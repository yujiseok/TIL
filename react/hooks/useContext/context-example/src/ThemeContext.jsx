import { useState, useContext, createContext } from "react";
const ThemeContext = createContext(null);
const ThemeUpdateContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleClickTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={handleClickTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
