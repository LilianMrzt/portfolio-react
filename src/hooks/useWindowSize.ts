import { useState, useEffect } from 'react'

export const useWindowSize = (): { width: number, height: number } => {
    const [size, setSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    })

    useEffect(() => {
        const handleResize = (): void => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return size
}
