import { createContext, ReactNode, useState, useEffect, useContext } from 'react';
import { ThemeContextType } from './ThemeContext.types';

const ThemeContext = createContext<ThemeContextType | undefined>({
    darkMode: false,
    setDarkMode: () => {}
});

export function useDarkMode() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a ThemeProvider');
    }
    return context;
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}
