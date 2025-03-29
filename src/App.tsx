import './app.css'
import React, { useState } from 'react'
import { type ReactNode } from 'react'
import NavBar from '@components/blocs/nav-bar/NavBar'
import Drawer from '@components/blocs/drawer/Drawer'
import AppNavigation from '@ui/navigation/AppNavigation'
import Footer from '@components/blocs/footer/Footer'
import ScrollToTop from '@ui/navigation/ScrollToTop'

const App = (): ReactNode => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <div
            className={'app'}
        >
            <ScrollToTop/>
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
            <Footer/>
        </div>
    )
}

export default App
