import { colors } from './colors'
import { fonts, textTransform } from './fonts'
import { fontSizes, spacing } from './sizes'

export const description_styles = {
  body: {
    fontFamily: fonts.light,
  },
  p: {
    color: colors.m_grey,
    fontFamily: fonts.light,
    fontSize: fontSizes.ml + 3,
    letterSpacing: -0.4,
    textTransform: textTransform,
    lineHeight: 26,
  },
}
export const base_styles = {
  fontFamily: fonts.light,
}
