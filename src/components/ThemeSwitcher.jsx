
import React from "react";
import { useTheme } from "../context/useTheme";

export default function ThemeSwitcher() {
  const { theme, changeTheme } = useTheme();
  const isDark = theme === "dark";

  const handleToggle = (e) => {
    changeTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <div className="d-inline-flex align-items-center gap-2">
      <i
        className={`bi bi-sun-fill ${!isDark ? "text-warning" : "text-secondary"}`}
        aria-hidden="true"
      />

      <div className="form-check form-switch m-0">
        <input
          id="linknest-theme-switch"
          className="form-check-input rounded-pill theme-pill-switch"
          type="checkbox"
          role="switch"
          checked={isDark}
          onChange={handleToggle}
          aria-label="Toggle dark and light theme"
        />
      </div>

      <i
        className={`bi bi-moon-fill ${isDark ? "text-info" : "text-secondary"}`}
        aria-hidden="true"
      />
    </div>
  );
}