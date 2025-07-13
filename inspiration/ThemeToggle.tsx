"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
export interface ThemeToggleProps {
  className?: string;
}
export default function ThemeToggle({
  className = ""
}: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  useEffect(() => {
    // Set dark theme by default on mount
    document.documentElement.classList.add('dark');
  }, []);
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  return <motion.button whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.95
  }} onClick={toggleTheme} className={`
        relative flex items-center justify-center
        w-10 h-6 rounded-full transition-colors duration-300
        ${isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-amber-200 hover:bg-amber-300'}
        ${className}
      `} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
      {/* Toggle Circle */}
      <motion.div animate={{
      x: isDark ? -8 : 8
    }} transition={{
      type: "spring",
      stiffness: 500,
      damping: 30
    }} className={`
          absolute w-4 h-4 rounded-full shadow-sm
          flex items-center justify-center
          ${isDark ? 'bg-slate-900 text-slate-300' : 'bg-white text-amber-600'}
        `}>
        {isDark ? <Moon size={10} className="fill-current" /> : <Sun size={10} className="fill-current" />}
      </motion.div>
    </motion.button>;
}