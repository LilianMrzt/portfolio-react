import React, { type ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from '@constants/AppRoutes'
import LandingScreen from '@ui/views/LandingScreen'
import ProjectsScreen from '@ui/views/ProjectsScreen'
import ProfileScreen from '@ui/views/ProfileScreen'

const AppNavigation = (): ReactNode => {
    return (
        <Routes>
            <Route
                path={AppRoutes.home.route}
                element={<LandingScreen />}
            />
            <Route
                path={AppRoutes.profile.route}
                element={<ProfileScreen />}
            />
            <Route
                path={AppRoutes.projects.route}
                element={<ProjectsScreen />}
            />
        </Routes>
    )
}

export default AppNavigation
