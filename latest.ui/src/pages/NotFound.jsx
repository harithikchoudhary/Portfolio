import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <h1 className="display-1 fw-bold text-dark">404</h1>
      <p className="mt-3 fs-4 text-secondary">Page Not Found</p>
      <Link
        to="/"
        className="mt-3 btn btn-success px-3 py-2 rounded transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
