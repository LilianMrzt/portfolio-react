import React, { createContext, type FC, type ReactNode, useContext, useEffect, useState } from 'react'
import themeConstants from '@constants/ThemeConstants'

interface ThemeContextType {
    themeType: string
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [themeType, setThemeType] = useState(themeConstants.light)

    const toggleTheme = (): void => {
        const newTheme = themeType === themeConstants.dark ? themeConstants.light : themeConstants.dark
        setThemeType(newTheme)
        localStorage.setItem('data-theme', newTheme)
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('data-theme')
        if (localTheme) {
            setThemeType(localTheme)
        }
    }, [])

    useEffect(() => {
        document.body.setAttribute('data-theme', themeType)
    }, [themeType])

    return (
        <ThemeContext.Provider
            value={{
                themeType,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

/*
export const useThemeValues = (): any => {
    const [, setTick] = useState(0)

    // Trigger re-render on theme change
    useEffect(() => {
        const observer = new MutationObserver(() => { setTick(t => t + 1) })
        observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] })
        return () => { observer.disconnect() }
    }, [])

    return getTheme()
}
*/
