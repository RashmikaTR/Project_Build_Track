import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Login from "./pages/Login";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Future routes will go here */}
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;