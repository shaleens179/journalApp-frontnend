import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const userName = localStorage.getItem("userName") || "Guest";

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <div className={`flex justify-between items-center p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-md`}>
      <h1 className="font-bold text-xl">Journal App</h1>
      <div className="flex items-center gap-4">
        <span className="hidden md:block">{userName}</span>
        <button
          onClick={toggleTheme}
          className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
        <button
          onClick={handleLogout}
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
