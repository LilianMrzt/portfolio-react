declare module '*.svg' {
    import type * as React from 'react'
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    const content: string
    export default content
}
