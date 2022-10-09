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

const SingleProductTitleAndOptionsContainer = () => {
  const { name, short_description, has_options } = useContext(SingleProductContext)

  if (!name || !short_description) return null
  return (
    <View style={styles.singleProdTitleContainer}>
      <Text style={styles.singleProdTitle}>{name}</Text>
      <Text
        style={[
          styles.singleProdBody,
          {
            color: colors.m_grey,
            lineHeight: 24,
            marginBottom: 20,
            fontSize: fontSizes.ml + 4,
          },
        ]}
      >
        {short_description}
      </Text>
      {has_options ? <SingleProdVariablePricingOptionsAddToCart /> : <SingleProdSimplePricingOptionsAddToCart />}
    </View>
  )
}

const styles = StyleSheet.create({
  singleProdTitleContainer: {
    backgroundColor: colors.l_grey,
    paddingHorizontal: 15,
    paddingTop: 20,
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
    color: colors.mld_red,
    fontFamily: fonts.light,
    fontSize: fontSizes.lg,
    letterSpacing: -0.4,
    marginBottom: spacing.m,
    textTransform: textTransform,
  },
})

SingleProductTitleAndOptionsContainer.propTypes = {}

export default SingleProductTitleAndOptionsContainer
