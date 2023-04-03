import React from "react";
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#121212] text-zinc-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Error 404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <Link
          to="/posts"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
