// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";
import { loginUser } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const userData = await loginUser(username, password);
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err.message || "Login failed");
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
