import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";
import JournalEditor from "./assets/pages/JournalEditor";
import Dashboard from "./assets/pages/Dashboard";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Add/remove 'dark' class on root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/journal" element={<JournalEditor />} />
          <Route path="*" element={<h2 className="text-center mt-20 text-3xl">404 - Page Not Found</h2>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
