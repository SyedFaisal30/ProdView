import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isTokenExpired } from "../utils/jwtutils";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken && !isTokenExpired(storedToken);
  });

  useEffect(() => {
    if (!token || isTokenExpired(token)) {
      logout("Session expired. Please login again.");
    } else {
      setIsAuthenticated(true);
    }

    const interval = setInterval(() => {
      if (token && isTokenExpired(token)) {
        logout("Session expired. Please login again.");
      }
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [token]);

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    toast.success("Login successful!");

    setTimeout(() => {
      localStorage.removeItem("token");
    }, 60 * 1000);
  };

  const logout = (msg = "Logged out successfully.") => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
    toast.info(msg);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
