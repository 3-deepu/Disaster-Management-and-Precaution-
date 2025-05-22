// src/pages/MapView.jsx
import React from "react";

export const MapView = () => (
  <section aria-labelledby="mapview-title">
    <h1 id="mapview-title" className="text-2xl font-bold mb-4">
      Map View
    </h1>
    <div
      className="bg-gray-200 h-64 flex items-center justify-center text-gray-600"
      role="region"
      aria-label="Map placeholder"
    >
      Map Placeholder - Integrate Google Maps or Leaflet here
    </div>
  </section>
);
