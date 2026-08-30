import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-ink text-mist flex flex-col items-center justify-center px-6">
      <p className="text-petrol tracking-[0.35em] uppercase text-xs mb-4">404</p>
      <h1 className="font-display text-4xl sm:text-6xl font-bold mb-4">Page not found</h1>
      <p className="text-steel mb-8">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="border border-mist/20 hover:border-petrol px-6 py-3 text-sm tracking-wide uppercase no-underline text-mist"
      >
        Back to portfolio
      </Link>
    </div>
  );
};

export default NotFound;
