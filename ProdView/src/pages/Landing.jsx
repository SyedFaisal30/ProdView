// src/pages/Landing.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Link } from "react-router-dom";

const Landing = () => {
  const { isAuthenticated } = useContext(AuthContext);

  // 🔁 Redirect if already logged in
  if (isAuthenticated) return <Navigate to="/products" />;

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to ProdView</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-md">
        Browse and explore a curated list of products with pricing, ratings, and more. Log in to get started!
      </p>
      <Link
        to="/login"
        className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-700 transition"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Landing;
