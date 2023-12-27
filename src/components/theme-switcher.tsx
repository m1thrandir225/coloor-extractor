"use client";

import {MoonIcon, SunIcon} from "lucide-react";
import {useTheme} from "next-themes";

export default function ThemeSwitcher() {
  const {setTheme, themes, systemTheme, theme} = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={handleThemeChange}>
      {theme === "dark" ? (
        <SunIcon size={24} className="text-white" />
      ) : (
        <MoonIcon size={24} className="text-black" />
      )}
    </button>
  );
}
