// src/pages/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-20 p-6 border rounded shadow"
      aria-label="Login form"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <label className="block mb-2" htmlFor="username">
        Username:
      </label>
      <input
        id="username"
        type="text"
        className="w-full p-2 mb-4 border rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        autoComplete="username"
        disabled={loading}
      />
      <label className="block mb-2" htmlFor="password">
        Password:
      </label>
      <input
        id="password"
        type="password"
        className="w-full p-2 mb-4 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="current-password"
        disabled={loading}
      />
      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};
