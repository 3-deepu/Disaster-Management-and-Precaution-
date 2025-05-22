// src/contexts/AlertContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchAlerts } from "../api";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAlerts()
      .then((data) => {
        setAlerts(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return (
    <AlertContext.Provider value={{ alerts, loading, error }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlerts = () => useContext(AlertContext);
