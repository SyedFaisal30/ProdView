import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600">ProdView</h1>

      {isAuthenticated && (
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="hidden sm:block px-2 py-1 border rounded text-sm"
          />

          <button
            onClick={logout}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
