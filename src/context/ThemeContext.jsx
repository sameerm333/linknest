import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { DEFAULT_THEME, STORAGE_KEY, THEMES } from "./themeConfig";
import { ThemeContext } from "./useTheme";



function readSavedTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved && THEMES.includes(saved) ? saved : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

function writeSavedTheme(theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch (e){
    console.log(e)
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readSavedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    writeSavedTheme(theme);
  }, [theme]);

  const changeTheme = useCallback((newTheme) => {
    if (THEMES.includes(newTheme)) {
      setTheme(newTheme);
    }
  }, []);

  const value = useMemo(
    () => ({
      theme,
      themes: THEMES,
      changeTheme,
    }),
    [theme, changeTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
