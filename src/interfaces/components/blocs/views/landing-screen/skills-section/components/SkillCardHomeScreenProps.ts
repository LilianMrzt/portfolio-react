import { type ReactElement } from 'react'
import { type SkillObject } from '@interfaces/objects/front-objects/SkillObject'

export interface SkillCardHomeScreenProps {
    icon: ReactElement
    title: string
    skills: SkillObject[]
}
