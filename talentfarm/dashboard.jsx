// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { fetchSystemStatus } from "../api";

export const Dashboard = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSystemStatus()
      .then((res) => {
        setStatus(res);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return (
    <section aria-labelledby="dashboard-title">
      <h1 id="dashboard-title" className="text-2xl font-bold mb-4">
        Dashboard
      </h1>
      {loading && <p>Loading system status...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      {!loading && !error && (
        <>
          <p className="mb-2">
            System Status: <strong>{status}</strong>
          </p>
          <p>
            Welcome to the Disaster Management System. Here you can monitor real-time data and
            manage resources.
          </p>
        </>
      )}
    </section>
  );
};
