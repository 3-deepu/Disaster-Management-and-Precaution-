// Enhanced React Frontend for Disaster Management System

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";
import { Alerts } from "./pages/Alerts";
import { MapView } from "./pages/MapView";
import { Resources } from "./pages/Resources";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Sample Component: Navbar
// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="bg-blue-700 text-white p-4 shadow">
    <ul className="flex gap-6">
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/alerts">Alerts</Link></li>
      <li><Link to="/map">Map View</Link></li>
      <li><Link to="/resources">Resources</Link></li>
    </ul>
  </nav>
);

// Sample Component: Footer
// components/Footer.jsx
import React from "react";

export const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4">
    <p>Disaster Management System © {new Date().getFullYear()}</p>
  </footer>
);

// Sample Page: Dashboard
// pages/Dashboard.jsx
import React, { useState, useEffect } from "react";

export const Dashboard = () => {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    setTimeout(() => setStatus("System Operational"), 1000); // Simulate fetch
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-2">System Status: <strong>{status}</strong></p>
      <p>Welcome to the Disaster Management System. Here you can monitor real-time data and manage resources.</p>
    </div>
  );
};

// Sample Page: Alerts
// pages/Alerts.jsx
import React, { useEffect, useState } from "react";

export const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Simulated API call
    setTimeout(() => {
      setAlerts([
        { id: 1, message: "Flood warning in District A", level: "High" },
        { id: 2, message: "Power outage in District B", level: "Medium" }
      ]);
    }, 1000);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Active Alerts</h1>
      {alerts.length === 0 ? <p>Loading alerts...</p> : (
        <ul className="space-y-2">
          {alerts.map(alert => (
            <li key={alert.id} className={`p-3 rounded shadow ${alert.level === 'High' ? 'bg-red-100' : 'bg-yellow-100'}`}>
              <strong>{alert.level}:</strong> {alert.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Sample Page: MapView
// pages/MapView.jsx
import React from "react";

export const MapView = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Map View</h1>
    <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-600">
      Map Placeholder - Integrate Google Maps or Leaflet here
    </div>
  </div>
);

// Sample Page: Resources
// pages/Resources.jsx
import React, { useState } from "react";

export const Resources = () => {
  const [resources, setResources] = useState([
    { id: 1, name: "Water Bottles", available: 500 },
    { id: 2, name: "First Aid Kits", available: 200 }
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Resources</h1>
      <ul className="space-y-2">
        {resources.map(resource => (
          <li key={resource.id} className="bg-green-100 p-3 rounded shadow">
            <strong>{resource.name}</strong>: {resource.available} units available
          </li>
        ))}
      </ul>
    </div>
  );
};
