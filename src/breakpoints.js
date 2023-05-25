const size = {
    mobileM: '400px',
    mobileL: '480px',
    tablet: '760px',
    laptop: '1280px', 
    desktopM: '1530px',
    desktopL: '1920px',
};

export const devices = {
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktopM: `(min-width: ${size.desktopM})`,
    desktopL: `(min-width: ${size.desktopL})`
};

//@media ${device.deviceName} {

//}