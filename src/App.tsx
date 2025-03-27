import './app.css'
import React, { useState } from 'react'
import { type ReactNode } from 'react'
import NavBar from '@components/blocs/nav-bar/NavBar'
import Drawer from '@components/blocs/drawer/Drawer'
import AppNavigation from '@ui/navigation/AppNavigation'

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
                <AppNavigation/>
            </main>
        </div>
    )
}

export default App
