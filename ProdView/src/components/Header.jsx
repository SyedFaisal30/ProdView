import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FiSearch, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Header = ({ onSearch, onSortChange }) => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query.trim());
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <img
          src={logo}
          alt="ProdView Logo"
          className="h-10 sm:h-12 object-contain mx-auto sm:mx-0"
        />

        {isAuthenticated && (
          <div className="sm:w-[48%] lg:w-[75%] xl:w-[60%] flex flex-wrap gap-2 box-border justify-between">
            {/* Search Bar */}
            <div className="w-[48%] lg:flex-1 relative">
              <FiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="pl-8 pr-8 py-2 w-full border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              {query && (
                <FiX
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-red-500"
                  onClick={handleClear}
                />
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="w-[48%] lg:w-auto">
              <select
                onChange={(e) => onSortChange(e.target.value)}
                className="w-full border text-sm py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: High to Low</option>
                <option value="rating-asc">Rating: Low to High</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="w-[48%] lg:w-auto">
              <button
                onClick={handleSearch}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Search
              </button>
            </div>

            {/* Logout Button */}
            <div className="w-[48%] lg:w-auto">
              <button
                onClick={logout}
                className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
