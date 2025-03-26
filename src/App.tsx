import './App.css'
import React from 'react'
import { type ReactNode } from 'react'
import LandingScreen from '@ui/views/LandingScreen'

const App = (): ReactNode => {
    return (
        <div
            className={'App'}
        >
            <LandingScreen/>
        </div>
    )
}

export default App
