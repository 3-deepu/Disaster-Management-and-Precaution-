// src/App.jsx (updated)

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AlertProvider } from "./contexts/AlertContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
// Inside App.jsx
import { ProtectedRoute } from "./components/ProtectedRoute";

<Routes>
  <Route path="/login" element={<Login />} />
  <Route
    path="/"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />
  <Route
    path="/alerts"
    element={
      <ProtectedRoute>
        <Alerts />
      </ProtectedRoute>
    }
  />
  <Route
    path="/map"
    element={
      <ProtectedRoute>
        <MapView />
      </ProtectedRoute>
    }
  />
  <Route
    path="/resources"
    element={
      <ProtectedRoute>
        <Resources />
      </ProtectedRoute>
    }
  />
</Routes>

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Alerts = lazy(() => import("./pages/Alerts"));
const MapView = lazy(() => import("./pages/MapView"));
const Resources = lazy(() => import("./pages/Resources"));
const Login = lazy(() => import("./pages/Login"));

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow p-4" role="main">
            <Suspense fallback={<p>Loading page...</p>}>
              <AlertProvider>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/map" element={<MapView />} />
                  <Route
                    path="/resources"
                    element={
                      <ProtectedRoute>
                        <Resources />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </AlertProvider>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
