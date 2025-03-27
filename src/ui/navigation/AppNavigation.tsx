import React, { type ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from '@constants/AppRoutes'
import LandingScreen from '@ui/views/LandingScreen'

const AppNavigation = (): ReactNode => {
    return (
        <Routes>
            <Route
                path={AppRoutes.home.route}
                element={<LandingScreen />}
            />
            <Route
                path={AppRoutes.projects.route}
                element={<LandingScreen />}
            />
        </Routes>
    )
}

export default AppNavigation
