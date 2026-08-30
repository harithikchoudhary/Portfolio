import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
