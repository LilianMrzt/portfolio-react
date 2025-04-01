import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { TranslationProvider } from '@hooks/TranslatonContext'
import { ThemeProvider } from '@hooks/ThemeContext'

const root = ReactDOM.createRoot(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('root')!
)

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <Router>
                <TranslationProvider>
                    <App />
                </TranslationProvider>
            </Router>
        </ThemeProvider>
    </React.StrictMode>
)
