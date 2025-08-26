import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { lightTheme, darkTheme } from "../styles/theme";
import type { DefaultTheme } from "styled-components";

type ThemeContextType = {
  themeName: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProviderCustom = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be inside ThemeProviderCustom");
  return ctx;
};

export const getTheme = (themeName: "light" | "dark"): DefaultTheme =>
  themeName === "light" ? lightTheme : darkTheme;
