import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FiSearch, FiX } from "react-icons/fi";

const Header = ({ onSearch }) => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleClear = () => {
    setQuery("");
    onSearch(""); // 🔁 Reset search
  };

  return (
    <header className="bg-white shadow-md px-4 py-3 flex flex-col sm:flex-row sm:justify-between items-center gap-3 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600">ProdView</h1>

      {isAuthenticated && (
        <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
          <div className="relative w-full sm:w-64">
            <FiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-8 pr-8 py-1 w-full border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            {query && (
              <FiX
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-red-500"
                onClick={handleClear}
              />
            )}
          </div>

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            Search
          </button>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
