import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-dark shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-primary dark:text-accent">
        Journal App ✍️
      </h1>
      <div className="flex items-center gap-4">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">My Journals</Button>
        <Button variant="ghost">About</Button>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 transition"
        >
          {dark ? (
            <Moon className="text-accent w-5 h-5 animate-spin-slow" />
          ) : (
            <Sun className="text-yellow-500 w-5 h-5 animate-pulse" />
          )}
        </button>
      </div>
    </nav>
  );
}
