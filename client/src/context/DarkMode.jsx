import { createContext,  useState, useContext  } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider ({ children }){
const storedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(storedDarkMode);
const toggleDarkMode = () => setDarkMode(!darkMode)
    return(
        <DarkModeContext.Provider value={{ darkMode,toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
    )
}
export const useDark = () => useContext(DarkModeContext);