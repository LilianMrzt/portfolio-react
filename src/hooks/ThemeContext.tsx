import React, { createContext, useContext, useState, useEffect, type FC } from 'react'
import { themes } from '@constants/theme/Themes'

type ThemeType = 'light' | 'dark'

interface ThemeContextProps {
    themeName: ThemeType
    theme: typeof themes.light
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [themeName, setThemeName] = useState<ThemeType>('light')

    const theme = themes[themeName]

    const toggleTheme = (): void => {
        document.body.classList.add('theme-changing')
        setTimeout(() => {
            document.body.classList.remove('theme-changing')
        }, 50)

        setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        const root = document.documentElement
        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value)
        })
    }, [theme])

    return (
        <ThemeContext.Provider value={{ themeName, theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useProjectsDetails must be used within an projectsDetailsProvider')
    }
    return context
}
