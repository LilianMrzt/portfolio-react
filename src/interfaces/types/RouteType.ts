import { type ReactElement } from 'react'

export interface RouteType {
    label: string
    route?: string
    routeFn?: (param: string) => string
    icon: ReactElement
}
