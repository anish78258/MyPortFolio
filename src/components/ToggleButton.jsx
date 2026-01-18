import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils.jsx";

function ToggleButton() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    
    if (!theme) {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      return;
    }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newTheme = !prev;

      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newTheme;
    });
  };

  return (
    <div>
      <button onClick={toggleDarkMode}  className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden overflow-hidden"
      )}>
        {!darkMode ? <Sun className="pop-inout text-yellow-600" /> : <Moon className="pop-inout text-blue-600"/>}
      </button>
    </div>
  );
}

export default ToggleButton;
