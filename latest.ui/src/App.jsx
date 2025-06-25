import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <Routes>
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
