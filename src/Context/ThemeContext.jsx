import  { createContext, useContext, useState, useEffect } from 'react';

// 1. Create Context
const ThemeContext = createContext();

// 2. Create Provider Component
export function ThemeProvider({ children }) {
  // Check local storage or system preference on initial load
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('theme', theme);

    // Apply or remove the 'dark' class on the root element based on the current theme
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Function to toggle between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook for easy access in any component
export default function useTheme() {
  return useContext(ThemeContext);
}