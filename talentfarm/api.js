// src/api.js
const BASE_URL = "https://your-real-api-url.com/api";

export const loginUser = async (username, password) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Login failed");
  }
  return res.json(); // Expected to return user data with token or user info
};
