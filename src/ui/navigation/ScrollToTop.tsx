import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll automatique en haut de la page lorsque le pathname change
 * @constructor
 */
const ScrollToTop = (): any => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
}

export default ScrollToTop
