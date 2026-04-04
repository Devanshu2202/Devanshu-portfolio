import { createContext, useContext, useState } from "react";

const defaultTheme = {
  isEveningEdition: false,
  toggleTheme: () => {},
  bg: "bg-[#f4f1ea]",
  text: "text-zinc-900",
  border: "border-zinc-900",
  mutedBg: "bg-zinc-200",
  accentText: "text-zinc-600",
  link: "hover:text-blue-800",
};

const ThemeContext = createContext(defaultTheme);
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isEveningEdition, setIsEveningEdition] = useState(false);

  const theme = {
    isEveningEdition,
    toggleTheme: () => setIsEveningEdition(!isEveningEdition),
    bg: isEveningEdition ? "bg-zinc-900" : "bg-[#f4f1ea]",
    text: isEveningEdition ? "text-zinc-200" : "text-zinc-900",
    border: isEveningEdition ? "border-zinc-500" : "border-zinc-900",
    mutedBg: isEveningEdition ? "bg-zinc-800" : "bg-zinc-200",
    accentText: isEveningEdition ? "text-zinc-400" : "text-zinc-600",
    link: isEveningEdition ? "hover:text-white" : "hover:text-blue-800",
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
