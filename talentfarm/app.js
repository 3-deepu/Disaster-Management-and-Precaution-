// src/api.js
// Simulated API calls with Promises and random failure for demo

export const fetchSystemStatus = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) resolve("System Operational");
      else reject(new Error("Failed to fetch system status"));
    }, 1000);
  });

export const fetchAlerts = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9)
        resolve([
          { id: 1, message: "Flood warning in District A", level: "High" },
          { id: 2, message: "Power outage in District B", level: "Medium" },
        ]);
      else reject(new Error("Failed to fetch alerts"));
    }, 1200);
  });

export const fetchResources = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        { id: 1, name: "Water Bottles", available: 500 },
        { id: 2, name: "First Aid Kits", available: 200 },
      ]);
    }, 800)
  );
