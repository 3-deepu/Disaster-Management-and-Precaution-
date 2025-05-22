// src/pages/Alerts.jsx
import React from "react";
import { useAlerts } from "../contexts/AlertContext";

export const Alerts = () => {
  const { alerts, loading, error } = useAlerts();

  return (
    <section aria-labelledby="alerts-title">
      <h1 id="alerts-title" className="text-2xl font-bold mb-4">
        Active Alerts
      </h1>
      {loading && <p>Loading alerts...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      {!loading && !error && alerts.length === 0 && <p>No alerts at the moment.</p>}
      {!loading && !error && alerts.length > 0 && (
        <ul className="space-y-2">
          {alerts.map(({ id, level, message }) => (
            <li
              key={id}
              className={`p-3 rounded shadow ${
                level === "High" ? "bg-red-100" : "bg-yellow-100"
              }`}
              role="alert"
              aria-live="assertive"
            >
              <strong>{level}:</strong> {message}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
