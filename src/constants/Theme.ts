const theme = {
    primary: getComputedStyle(document.documentElement).getPropertyValue('--primary').trim(),
    primaryOpacity: getComputedStyle(document.documentElement).getPropertyValue('--primary-opacity').trim(),
    tertiary: getComputedStyle(document.documentElement).getPropertyValue('--tertiary').trim(),
    onPrimary: getComputedStyle(document.documentElement).getPropertyValue('--on-primary').trim(),
    background: getComputedStyle(document.documentElement).getPropertyValue('--background').trim(),
    onBackground: getComputedStyle(document.documentElement).getPropertyValue('--on-background').trim(),
    surface: getComputedStyle(document.documentElement).getPropertyValue('--surface').trim(),
    surfaceSecondary: getComputedStyle(document.documentElement).getPropertyValue('--surface-secondary').trim(),
    text: getComputedStyle(document.documentElement).getPropertyValue('--text').trim(),
    textSecondary: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim(),
    outline: getComputedStyle(document.documentElement).getPropertyValue('--outline').trim(),

    green: getComputedStyle(document.documentElement).getPropertyValue('--green').trim(),
    onGreen: getComputedStyle(document.documentElement).getPropertyValue('--on-green').trim(),
    blue: getComputedStyle(document.documentElement).getPropertyValue('--blue').trim(),
    onBlue: getComputedStyle(document.documentElement).getPropertyValue('--on-blue').trim(),
    yellow: getComputedStyle(document.documentElement).getPropertyValue('--yellow').trim(),
    onYellow: getComputedStyle(document.documentElement).getPropertyValue('--on-yellow').trim(),
    orange: getComputedStyle(document.documentElement).getPropertyValue('--orange').trim(),
    onOrange: getComputedStyle(document.documentElement).getPropertyValue('--on-orange').trim()
}

export default theme
