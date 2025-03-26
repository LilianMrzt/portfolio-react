import './app.css'
import React from 'react'
import { type ReactNode } from 'react'
import LandingScreen from '@ui/views/LandingScreen'
import NavBar from '@components/blocs/NavBar'

const App = (): ReactNode => {
    return (
        <div
            className={'app'}
        >
            <NavBar/>
            <main
                className={'app-main'}
            >
                <LandingScreen/>
            </main>
        </div>
    )
}

export default App
