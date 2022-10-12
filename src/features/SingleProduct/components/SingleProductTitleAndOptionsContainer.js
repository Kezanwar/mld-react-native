import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../utils/colors'
import { fonts, textTransform } from '../../../utils/fonts'
import { fontSizes, spacing } from '../../../utils/sizes'
import SingleProdVariablePricingOptionsAddToCart from './SingleProdVariablePricingOptionsAddToCart'
import SingleProdSimplePricingOptionsAddToCart from './SingleProdSimplePricingOptionsAddToCart'
import { useContext } from 'react'
import SingleProductContext from '../SingleProductContext'
import { useWindowDimensions } from 'react-native'
import RenderHtml from 'react-native-render-html'
import { base_styles, description_styles } from '../../../utils/renderHtmlStyles'
import Divider from '../../../components/Divider/Divider'

const SingleProductTitleAndOptionsContainer = () => {
  const { name, short_description, has_options } = useContext(SingleProductContext)
  if (!name || !short_description) return null
  const { width } = useWindowDimensions()
  console.log(short_description)
  return (
    <View style={styles.singleProdTitleContainer}>
      <Text style={styles.singleProdTitle}>{name}</Text>
      <View style={styles.singleProdBody}>
        <RenderHtml
          tagsStyles={description_styles}
          contentWidth={width}
          source={{ html: short_description }}
          systemFonts={[fonts.light]}
          enableExperimentalGhostLinesPrevention={true}
        />
        {/* {short_description} */}
      </View>
      <Divider styleOverride={{ marginBottom: 30, marginTop: 10 }} />
      {has_options ? <SingleProdVariablePricingOptionsAddToCart /> : <SingleProdSimplePricingOptionsAddToCart />}
    </View>
  )
}

const styles = StyleSheet.create({
  singleProdTitleContainer: {
    backgroundColor: colors.l_grey,
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 5,
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    borderRadius: 20,
    marginTop: -25,
  },
  singleProdTitle: {
    fontFamily: fonts.light,
    fontSize: fontSizes.xl + 8,
    letterSpacing: -0.4,
    marginBottom: spacing.sm,
    textTransform: textTransform,
  },
  singleProdBody: {
    // marginBottom: 10,
  },
})

SingleProductTitleAndOptionsContainer.propTypes = {}

export default SingleProductTitleAndOptionsContainer
