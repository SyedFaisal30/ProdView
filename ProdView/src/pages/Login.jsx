import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const res = await axios.post(`${import.meta.env.VITE_API}/auth/login`, {
      username,
      password,
    });

    const userData = res.data;

    localStorage.setItem("user", JSON.stringify(userData));

    login(userData.accessToken);

    navigate("/products");
  } catch (err) {
    console.error("Login failed:", err.response?.data || err.message);
    setError("Invalid credentials");
  }
};

  return (
    <div className="flex items-center justify-center h-[90vh] bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded p-8 w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border px-3 py-2 w-full mb-2 rounded"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border px-3 py-2 w-full mb-2 rounded"
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
