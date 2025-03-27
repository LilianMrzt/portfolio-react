import React from 'react'
import { HomeIcon, ProjectsIcon } from '@resources/Icons'
import { type RouteType } from '@interfaces/types/RouteType'

export const AppRoutes: Record<string, RouteType> = {
    home: {
        label: 'Accueil',
        route: '/',
        icon: <HomeIcon/>
    },
    projects: {
        label: 'Projets',
        route: '/projects',
        icon: <ProjectsIcon/>
    }
}
