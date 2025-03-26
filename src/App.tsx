import './app.css'
import React, { useState } from 'react'
import { type ReactNode } from 'react'
import LandingScreen from '@ui/views/LandingScreen'
import NavBar from '@components/blocs/NavBar'
import Drawer from '@components/blocs/Drawer'

const App = (): ReactNode => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <div
            className={'app'}
        >
            <NavBar
                onMenuClick={() => {
                    setIsDrawerOpen(!isDrawerOpen)
                }}
            />
            <Drawer
                onClose={() => {
                    setIsDrawerOpen(false)
                }}
                isDrawerOpen={isDrawerOpen}
            />
            <main
                className={'app-main'}
            >
                <LandingScreen/>
            </main>
        </div>
    )
}

export default App
