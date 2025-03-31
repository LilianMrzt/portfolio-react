import { type ReactNode } from 'react'

export interface SectionProps {
    label: string
    id: string
    children: ReactNode
    viewDetailsRoute?: string
    viewDetailsButtonLabel?: string
    sectionScrollId?: string
}
