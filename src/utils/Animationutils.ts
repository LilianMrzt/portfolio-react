export const scrollToSection = (
    sectionName: string
): void => {
    const element = document.getElementById(sectionName)
    if (element) {
        const offset = 64
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset

        window.scrollTo({
            top,
            behavior: 'smooth'
        })
    }
}
