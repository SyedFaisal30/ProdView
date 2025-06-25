// src/pages/Landing.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import { FaShoppingCart, FaSignInAlt } from "react-icons/fa";

const Landing = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) return <Navigate to="/products" />;

  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-[90vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl space-y-6 animate-fade-in">
        <div className="flex flex-col items-center">
          <FaShoppingCart className="text-6xl text-blue-600 mb-4 animate-bounce" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700">
            Welcome to <span className="text-blue-500">ProdView</span>
          </h1>
        </div>

        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
          Discover a wide range of products, view their prices, ratings, and
          details — all in one place. Built with modern web technologies.
        </p>

        <div className="grid sm:grid-cols-1 gap-4 text-left text-gray-800 text-sm sm:text-base font-medium">
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold mb-1 text-blue-700">
              🛍️ Explore Products
            </h3>
            <p className="text-gray-600">
              Discover 100+ popular items with real-time pricing, images, and
              ratings – all in one place.
            </p>
          </div>
        </div>

        <Link
          to="/login"
          className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition shadow-md"
        >
          <FaSignInAlt className="text-xl" />
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Landing;
