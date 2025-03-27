const theme = {
    primary: getComputedStyle(document.documentElement).getPropertyValue('--primary').trim(),
    primaryOpacity: getComputedStyle(document.documentElement).getPropertyValue('--primary-opacity').trim(),
    onPrimary: getComputedStyle(document.documentElement).getPropertyValue('--on-primary').trim(),
    background: getComputedStyle(document.documentElement).getPropertyValue('--background').trim(),
    onBackground: getComputedStyle(document.documentElement).getPropertyValue('--on-background').trim(),
    onBackgroundSecondary: getComputedStyle(document.documentElement).getPropertyValue('--on-background-secondary').trim(),
    surface: getComputedStyle(document.documentElement).getPropertyValue('--surface').trim(),
    onSurface: getComputedStyle(document.documentElement).getPropertyValue('--on-surface').trim(),
    secondaryText: getComputedStyle(document.documentElement).getPropertyValue('--secondary-text').trim(),
    text: getComputedStyle(document.documentElement).getPropertyValue('--text').trim(),
    outline: getComputedStyle(document.documentElement).getPropertyValue('--outline').trim()
}

export default theme
