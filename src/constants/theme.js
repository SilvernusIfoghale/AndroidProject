import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const COLORS = {
  white: '#ffffff',
  black: '#000000',
  pink: '#f3f',
  blackFill: '#050505',
  blackSkin: '#141415',
  graySkin: '#45454A',
  grayWhite: '#A0A0A7',
  offWhite: '##E7E7E9',
  yellowFill: '#FFD124',
  yellowSkin: '#D2AD23',
  yellowDark: '#A58922',
  yellowBrown: '#786620',
  Brown: '#4B421F',
  greenFill: '#1C792C',
  greenSkin: '#1C6729',
  greenDark: '#1D5427',
  greenGray: '#1D4224',
  greenBlack: '#1E3021',
};

export const SIZES = {
  //global sizes
  base: screenHeight * 0.01,
  font: screenHeight * 0.0175,
  radius: 5,
  padding: screenHeight * 0.03,

  // font sizes
  navTitle: screenHeight * 0.04375,
  h1: screenHeight * 0.0375,
  h2: screenHeight * 0.0275,
  h2a: screenHeight * 0.034,
  h2c: screenHeight * 0.0245,
  h3: screenHeight * 0.0225,
  h3a: screenHeight * 0.0235,
  h4: screenHeight * 0.0175,
  h5: screenHeight * 0.015,
  body1: screenHeight * 0.0355,
  body2: screenHeight * 0.025,
  body3: screenHeight * 0.02,
  body3a: screenHeight * 0.02,
  body3b: screenHeight * 0.022,
  body4: screenHeight * 0.0175,
  body5: screenHeight * 0.015,
  body6: screenHeight * 0.01,
  intro: screenHeight * 0.04,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  navTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.navTitle,
    color: '#000000',
  },
  largeTitleBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h1 * 1.1,
    lineHeight: screenHeight * 0.05,
    color: '#000000',
  },
  h1: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h1,
    lineHeight: screenHeight * 0.05,
    color: '#000000',
  },
  h1a: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h1 * 0.9,
    lineHeight: screenHeight * 0.05,
    color: '#000000',
  },
  h2: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h2,
    lineHeight: screenHeight * 0.0375,
    color: '#000000',
  },
  h3: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h3,
    lineHeight: screenHeight * 0.025,
    color: '#000000',
  },
  h3a: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h3a,
    lineHeight: screenHeight * 0.025,
    color: '#000000',
  },
  h4: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h4,
    lineHeight: screenHeight * 0.025,
    color: '#000000',
  },
  h5: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h5,
    lineHeight: screenHeight * 0.025,
    color: '#000000',
  },
  body: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1 * 1.2,
    lineHeight: 39,
    color: '#000000',
  },
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
    color: '#000000',
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
    color: '#000000',
  },
  body2a: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2 * 0.95,
    lineHeight: 30,
    color: '#000000',
  },
  body2b: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2 * 0.935,
    lineHeight: 30,
    color: '#000000',
  },
  body2c: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2 * 1.3,
    lineHeight: 30,
    color: '#000000',
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3 * 1.05,
    lineHeight: 22,
    color: '#000000',
  },
  body3a: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3a,
    lineHeight: 22,
    color: '#000000',
  },
  body3b: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3b,
    lineHeight: 22,
    color: '#000000',
  },
  body3c: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3a * 0.88,
    lineHeight: 22,
    color: '#000000',
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
    color: '#000000',
  },
  body4b: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4 * 0.9,
    lineHeight: 22,
    color: '#000000',
  },
  body5: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
    color: '#000000',
  },
  body6: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body6,
    lineHeight: 22,
    color: '#000000',
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
