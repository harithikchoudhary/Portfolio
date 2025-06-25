from flask import Flask, request, jsonify
import os
from flask_cors import CORS
import time
from openai import OpenAI
from dotenv import load_dotenv
import backoff

load_dotenv()
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# NVIDIA API Configuration
NVIDIA_API_KEY = os.environ.get("NVIDIA_API_KEY", "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")
NVIDIA_MODEL = os.environ.get("NVIDIA_MODEL", "microsoft/phi-3.5-mini-instruct")

# Initialize the OpenAI client with NVIDIA's API
client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key=NVIDIA_API_KEY,
    timeout=30.0
)

# Common model parameters
MODEL_PARAMS = {
    "temperature": 0.2,
    "top_p": 0.7,
    "max_tokens": 1024,
    "stream": True
}

# Retry decorator for API calls
@backoff.on_exception(
    backoff.expo,
    (Exception),
    max_tries=3,
    max_time=30
)
def make_api_call(messages, model_params):
    """Make API call with retry logic"""
    try:
        response = client.chat.completions.create(
            model=NVIDIA_MODEL,
            messages=messages,
            **model_params
        )
        return response
    except Exception as e:
        print(f"API call failed: {str(e)}")
        raise

def process_streamed_response(response):
    """Process streamed response and handle timeouts"""
    result = ""
    try:
        for chunk in response:
            if chunk.choices[0].delta.content is not None:
                result += chunk.choices[0].delta.content
        return result
    except Exception as e:
        print(f"Error processing stream: {str(e)}")
        return result

@app.route("/api/health", methods=["GET"])
def health_check():
    """Simple health check endpoint"""
    return jsonify({"status": "healthy", "timestamp": time.time()})


@app.route("/api/analyze-requirements", methods=["POST"])
def analyze_requirements():
    """Endpoint to analyze code and extract business and technical requirements"""
    
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    source_language = data.get("sourceLanguage")
    target_language = data.get("targetLanguage")
    source_code = data.get("sourceCode")
    
    if not all([source_language, source_code]):
        return jsonify({"error": "Missing required fields"}), 400
    
    try:
        # Create a prompt for the business requirements
        business_prompt = f"""
You are a business analyst responsible for analyzing and documenting the business requirements from the following {source_language} code. Your task is to interpret the code's intent and extract meaningful business logic suitable for non-technical stakeholders.

The code may be written in a legacy language like COBOL, possibly lacking comments or modern structure. You must infer business rules by examining variable names, control flow, data manipulation, and any input/output operations. Focus only on **business intent**—do not describe technical implementation.

### Output Format Instructions:
- Use plain text headings and paragraphs with the following structure:
- Use '#' for main sections (equivalent to h2)
- Use '##' for subsection headings (equivalent to h4)
- Use '###' for regular paragraph text
- Use '-' for bullet points and emphasize them by using bold tone in phrasing
- Do NOT use Markdown formatting like **bold**, _italic_, or backticks

### Structure your output into these 5 sections:

# Overview
## Purpose of the System  
### Describe the system's primary function and how it fits into the business.
## Context and Business Impact  
### Explain the operational context and value the system provides.

# Objectives
## Primary Objective  
### Clearly state the system's main goal.
## Key Outcomes  
### Outline expected results (e.g., improved processing speed, customer satisfaction).

# Business Rules & Requirements
## Business Purpose  
### Explain the business objective behind this specific module or logic.
## Business Rules  
### List the inferred rules/conditions the system enforces.
## Impact on System  
### Describe how this part affects the system's overall operation.
## Constraints  
### Note any business limitations or operational restrictions.

# Assumptions & Recommendations
- Assumptions  
### Describe what is presumed about data, processes, or environment.
- Recommendations  
### Suggest enhancements or modernization directions.

# Expected Output
## Output  
### Describe the main outputs (e.g., reports, logs, updates).
## Business Significance  
### Explain why these outputs matter for business processes.

{source_language} Code:
{source_code}
"""

        # Create a prompt for the technical requirements
        technical_prompt = f"""
Analyze the following {source_language} code and extract the technical requirements for migrating it to {target_language}.
Do not use any Markdown formatting (e.g., no **bold**, italics, or backticks).
Return plain text only.

Focus on implementation details such as:
- Data types and structures that need to be preserved
- Special handling needed for {source_language}-specific features
- Error handling requirements
- Performance considerations
- Integration points with other systems
- Database or file operations

Format your response as a numbered list with '# Technical Requirements' as the title.
Each requirement should start with a number followed by a period (e.g., "1.", "2.", etc.)

{source_language} Code:
{source_code}
"""

        # Call NVIDIA API for business requirements with retry logic
        try:
            business_response = make_api_call(
                messages=[
                    {"role": "system", "content": f"You are an expert in analyzing legacy code to extract business requirements. You understand {source_language} deeply and can identify business rules and processes in the code."},
                    {"role": "user", "content": business_prompt}
                ],
                model_params=MODEL_PARAMS
            )
            business_requirements = process_streamed_response(business_response)
        except Exception as e:
            print(f"Business requirements analysis failed: {str(e)}")
            business_requirements = "Error analyzing business requirements. Please try again."

        # Call NVIDIA API for technical requirements with retry logic
        try:
            technical_response = make_api_call(
                messages=[
                    {"role": "system", "content": f"You are an expert in {source_language} to {target_language} migration. You deeply understand both languages and can identify technical challenges and requirements for migration."},
                    {"role": "user", "content": technical_prompt}
                ],
                model_params=MODEL_PARAMS
            )
            technical_requirements = process_streamed_response(technical_response)
        except Exception as e:
            print(f"Technical requirements analysis failed: {str(e)}")
            technical_requirements = "Error analyzing technical requirements. Please try again."
        
        # Ensure technical requirements are formatted consistently
        lines = technical_requirements.split("\n")
        formatted_lines = []
        req_count = 0
        
        for line in lines:
            line = line.strip()
            if line == "# Technical Requirements":
                formatted_lines.append(line)
            elif line and not line.startswith("#"):
                # Check if line already has a number
                if not line[0].isdigit():
                    req_count += 1
                    formatted_lines.append(f"{req_count}. {line}")
                else:
                    formatted_lines.append(line)
            else:
                formatted_lines.append(line)
        
        technical_requirements = "\n".join(formatted_lines)
        
        return jsonify({
            "businessRequirements": business_requirements,
            "technicalRequirements": technical_requirements,
            "sourceLanguage": source_language,
            "targetLanguage": target_language
        })
        
    except Exception as e:
        print(f"Error in requirements analysis: {str(e)}")
        return jsonify({"error": f"Analysis failed: {str(e)}"}), 500

@app.route("/api/convert", methods=["POST"])
def convert_code():
    """Endpoint to convert code from one language to another"""

    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    source_language = data.get("sourceLanguage")
    target_language = data.get("targetLanguage")
    source_code = data.get("sourceCode")
    business_requirements = data.get("businessRequirements", "")
    technical_requirements = data.get("technicalRequirements", "")

    if not all([source_language, target_language, source_code]):
        return jsonify({"error": "Missing required fields"}), 400

    try:
        # Create a prompt for the NVIDIA API model
        prompt = f"""
Convert the following {source_language} code to {target_language} based on the provided business and technical requirements.

Business Requirements:
{business_requirements}

Technical Requirements:
{technical_requirements}

{source_language} Code:
{source_code}

Only return the converted code. Do not use markdown formatting (e.g., no triple backticks), do not include explanations, and don't keep only the comments in the code.
"""

        # Call NVIDIA API for code conversion with retry logic
        try:
            response = make_api_call(
                messages=[
                    {
                        "role": "system",
                        "content": f"You are an expert code converter assistant specializing in {source_language} to {target_language} migration. You convert legacy code to modern, idiomatic code while maintaining all business logic."
                    },
                    {"role": "user", "content": prompt}
                ],
                model_params=MODEL_PARAMS
            )
            converted_code = process_streamed_response(response)
        except Exception as e:
            print(f"Code conversion failed: {str(e)}")
            converted_code = "Error converting code. Please try again."

        return jsonify({
            "convertedCode": converted_code,
            "sourceLanguage": source_language,
            "targetLanguage": target_language
        })

    except Exception as e:
        print(f"Error in code conversion: {str(e)}")
        return jsonify({"error": f"Conversion failed: {str(e)}"}), 500


@app.route("/api/languages", methods=["GET"])
def get_languages():
    """Return supported languages"""
    
    # This should match the languages in your frontend
    languages = [
        {"name": "COBOL", "icon": "📋"},
        {"name": "Java", "icon": "☕"},
        {"name": "C#", "icon": "🔷"}, 
    ]
    
    return jsonify({"languages": languages})


if __name__ == "__main__":
    # Use environment variables for configuration in production
    port = int(os.environ.get("PORT", 5000))
    debug = os.environ.get("FLASK_DEBUG", "False").lower() == "true"
    
    app.run(host="0.0.0.0", port=port, debug=debug) 