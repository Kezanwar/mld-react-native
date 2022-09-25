import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../utils/colors'
import { fonts, textTransform } from '../../../utils/fonts'
import { fontSizes, spacing } from '../../../utils/sizes'
import { correctPriceWithCurrency, getPrices } from '../../../utils/prices'
import CustomSelectDropdown from '../../../components/CustomSelectDropdown/CustomSelectDropdown'
import { useState } from 'react'
import { useMemo } from 'react'
import QuantityController from '../../../components/QuantityController/QuantityController'
import { useCallback } from 'react'
import SingleProductAttributeSelect from './SingleProductAttributeSelect'
import SingleProdVariablePricingOptionsAddToCart from './SingleProdVariablePricingOptionsAddToCart'
import SingleProdSimplePricingOptionsAddToCart from './SingleProdSimplePricingOptionsAddToCart'

const SingleProductTitleContainer = ({
  id,
  name,
  prices,
  short_description,
  has_options,
  variations,
  is_in_stock,
  attributes,
}) => {
  const pricingOptionProps = {
    name,
    prices,
    id,
    has_options,
    variations,
    is_in_stock,
    attributes,
  }

  return (
    <View style={styles.singleProdTitleContainer}>
      <Text style={styles.singleProdTitle}>{name}</Text>
      <Text
        style={[
          styles.singleProdBody,
          {
            color: colors.m_grey,
            lineHeight: 21,
            marginBottom: 20,
            fontSize: fontSizes.ml,
          },
        ]}
      >
        {short_description}
      </Text>
      {has_options ? (
        <SingleProdVariablePricingOptionsAddToCart {...pricingOptionProps} />
      ) : (
        <SingleProdSimplePricingOptionsAddToCart {...pricingOptionProps} />
      )}
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
    fontSize: fontSizes.xl + 2,
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

SingleProductTitleContainer.propTypes = {}

export default SingleProductTitleContainer
