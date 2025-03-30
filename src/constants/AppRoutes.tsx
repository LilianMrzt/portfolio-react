import React from 'react'
import { HomeIcon, ProfileIcon, ProjectsIcon } from '@resources/Icons'
import { type RouteType } from '@interfaces/types/RouteType'

export const AppRoutes: Record<string, RouteType> = {
    home: {
        label: 'drawer.home',
        route: '/',
        icon: <HomeIcon/>
    },
    profile: {
        label: 'drawer.profile',
        route: '/profile',
        icon: <ProfileIcon/>
    },
    projects: {
        label: 'drawer.projects',
        route: '/projects',
        icon: <ProjectsIcon/>
    }
}
