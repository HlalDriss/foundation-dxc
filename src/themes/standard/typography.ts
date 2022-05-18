const fontFamily = ['Open Sans', 'sans-serif'].join(',');
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 600;
const fontWeightBold = 700;
const firstColor = '#121212';
const secondColor = '#63666A';
const fontSize13px = 13;
const fontSize15px = 15;
const fontSize17px = 17;
const fontSize20px = 20;

const typography: any = {
    fontFamily: fontFamily,
    fontSize: fontSize15px,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold,
    h1: {
        fontFamily: fontFamily,
        fontWeight: fontWeightMedium,
        fontSize: 23,
        color: firstColor
    },
    h2: {
        fontFamily: fontFamily,
        fontWeight: fontWeightMedium,
        fontSize: fontSize20px,
        color: firstColor
    },
    h3: {
        fontFamily: fontFamily,
        fontWeight: fontWeightRegular,
        fontSize: fontSize20px,
        color: '#6B6C72'
    },
    h4: {
        fontFamily: fontFamily,
        fontWeight: fontWeightMedium,
        fontSize: fontSize17px,
        color: firstColor
    },
    h5: {
        fontFamily: fontFamily,
        fontWeight: fontWeightRegular,
        fontSize: fontSize17px,
        color: '#64666A'
    },
    h6: {
        fontFamily: fontFamily,
        fontWeight: fontWeightMedium,
        fontSize: fontSize15px,
        color: firstColor
    },
    button: {
        fontFamily: fontFamily,
        fontWeight: fontWeightMedium,
        fontSize: fontSize13px
    },
    body1: {
        fontFamily: fontFamily,
        fontWeight: fontWeightRegular,
        fontSize: fontSize15px,
        color: firstColor
    },
    body: {
        fontFamily: fontFamily,
        fontWeight: fontWeightRegular,
        fontSize: fontSize15px,
        color: firstColor
    },
    bodySmall: {
        fontFamily: fontFamily,
        fontWeight: fontWeightRegular,
        fontSize: fontSize13px,
        color: secondColor
    },
    title: {
        fontFamily: fontFamily,
        fontWeight: fontWeightMedium,
        fontSize: fontSize17px,
        color: firstColor
    },
    subTitle: {
        fontFamily: fontFamily,
        fontWeight: fontWeightMedium,
        fontSize: fontSize13px,
        color: firstColor
    },
    tableHeader: {
        fontFamily: fontFamily,
        fontWeight: fontWeightMedium,
        fontSize: fontSize13px,
        color: secondColor
    },
    caption: {
        fontFamily: fontFamily,
        fontWeight: fontWeightRegular,
        fontSize: 12,
        color: firstColor
    },
    ticketHeaderTitle: {
        fontFamily: fontFamily,
        fontWeight: fontWeightMedium,
        fontSize: 16
    }
};
export default typography;
