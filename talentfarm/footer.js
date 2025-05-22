// src/components/Footer.jsx
import React from "react";

export const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4" role="contentinfo">
    <p>Disaster Management System © {new Date().getFullYear()}</p>
  </footer>
);
