// src/pages/Resources.jsx
import React, { useEffect, useState } from "react";
import { fetchResources } from "../api";

export const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResources().then((data) => {
      setResources(data);
      setLoading(false);
    });
  }, []);

  return (
    <section aria-labelledby="resources-title">
      <h1 id="resources-title" className="text-2xl font-bold mb-4">
        Resources
      </h1>
      {loading ? (
        <p>Loading resources...</p>
      ) : (
        <ul className="space-y-2">
          {resources.map(({ id, name, available }) => (
            <li key={id} className="bg-green-100 p-3 rounded shadow">
              <strong>{name}</strong>: {available} units available
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
