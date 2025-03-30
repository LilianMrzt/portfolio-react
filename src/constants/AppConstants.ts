const screenSizes = {
    screenS: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--screen-s').trim()),
    screenM: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--screen-m').trim()),
    screenL: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--screen-l').trim())
}

export default screenSizes
