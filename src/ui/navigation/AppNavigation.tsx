import React, { type ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from '@constants/DrawerRoutes'
import HomeScreen from '@ui/views/HomeScreen'
import ProjectsScreen from '@ui/views/ProjectsScreen'
import ProfileScreen from '@ui/views/ProfileScreen'
import ProjectDetailsScreen from '@ui/views/ProjectDetailsScreen'

const AppNavigation = (): ReactNode => {
    return (
        <Routes>
            <Route
                path={AppRoutes.home.route}
                element={<HomeScreen />}
            />
            <Route
                path={AppRoutes.profile.route}
                element={<ProfileScreen />}
            />
            <Route
                path={AppRoutes.projects.route}
                element={<ProjectsScreen />}
            />
            <Route
                path={`${AppRoutes.projects.route}/:projectSlug`}
                element={<ProjectDetailsScreen />}
            />
        </Routes>
    )
}

export default AppNavigation
