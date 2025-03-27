/**
 * Convertir une couleur sous format hex en format rgb
 * @param hex
 */
export const hexToRgb = (hex: string): { r: number, g: number, b: number } | null => {
    hex = hex.replace(/^#/, '')

    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('')
    }

    if (hex.length !== 6) {
        return null
    }

    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    return { r, g, b }
}

/**
 * Fonction pour assombrir une couleur rgb
 * @param hex
 */
export const darkenColor = (
    hex: string
): string => {
    const rgbHex = hexToRgb(hex)
    const percentage = 5
    const darken = (channel: number): number =>
        Math.max(0, Math.min(255, channel - (channel * percentage) / 100))

    const newR = Math.round(darken(rgbHex?.r ?? 0))
    const newG = Math.round(darken(rgbHex?.g ?? 0))
    const newB = Math.round(darken(rgbHex?.b ?? 0))

    return `rgb(${newR}, ${newG}, ${newB})`
}
