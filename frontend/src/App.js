import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Login from "./pages/Login";
import LaborManagement from "./pages/LaborManagement";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <LanguageProvider>
    <Router>
      <Routes>
        {/* Public route (no Navbar) */}
        <Route path="/" element={<Login />} />

        {/* Protected routes with Navbar */}
        <Route
        element={
              <Layout />
          }
          >
            <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/labor-management" element={<LaborManagement />} />
        </Route>
      </Routes>
    </Router>
    </LanguageProvider>
  );
}

export default App;