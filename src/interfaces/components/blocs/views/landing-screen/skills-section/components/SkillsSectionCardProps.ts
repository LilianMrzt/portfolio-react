import { type ReactElement } from 'react'
import { type SkillObject } from '@interfaces/objects/front-objects/SkillObject'

export interface SkillsSectionCardProps {
    title: string
    icon: ReactElement
    skills: SkillObject[]
}
