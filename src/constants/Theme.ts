const theme = {
    primary: getComputedStyle(document.documentElement).getPropertyValue('--primary').trim(),
    primaryOpacity: getComputedStyle(document.documentElement).getPropertyValue('--primary-opacity').trim(),
    onPrimary: getComputedStyle(document.documentElement).getPropertyValue('--on-primary').trim(),
    background: getComputedStyle(document.documentElement).getPropertyValue('--background').trim(),
    surface: getComputedStyle(document.documentElement).getPropertyValue('--surface').trim(),
    text: getComputedStyle(document.documentElement).getPropertyValue('--text').trim(),
    outline: getComputedStyle(document.documentElement).getPropertyValue('--outline').trim()
}

export default theme
