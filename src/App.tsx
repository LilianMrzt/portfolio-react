import './App.css'
import React from 'react'
import { type ReactNode } from 'react'
import LandingScreen from '@ui/views/LandingScreen'
import NavBar from '@components/blocs/NavBar'

const App = (): ReactNode => {
    return (
        <div
            className={'App'}
        >
            <NavBar/>
            <LandingScreen/>
        </div>
    )
}

export default App
