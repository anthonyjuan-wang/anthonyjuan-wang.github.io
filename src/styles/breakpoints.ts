interface Size {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

export const size: Size = {
  xs: '400px', // for small screen mobile
  sm: '600px', // for mobile screen
  md: '900px', // for tablets
  lg: '1280px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px', // for big screens
}

export const device = {
  mobileS: `(max-width: ${size.xs})`,
  mobileM: `(max-width: ${size.sm})`,
  tablet: `(max-width: ${size.md})`,
  laptop: `(max-width: ${size.lg})`,
  laptopL: `(max-width: ${size.xl})`,
  desktop: `(max-width: ${size.xxl})`,
}