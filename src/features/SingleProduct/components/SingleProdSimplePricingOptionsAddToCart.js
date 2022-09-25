import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SingleProductAttributeSelect from './SingleProductAttributeSelect'
import QuantityController from '../../../components/QuantityController/QuantityController'
import { colors } from '../../../utils/colors'
import { fontSizes, spacing } from '../../../utils/sizes'
import { fonts, textTransform } from '../../../utils/fonts'
import { useState } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { correctPriceWithCurrency, getPrices } from '../../../utils/prices'

const SingleProdSimplePricingOptionsAddToCart = ({
  id,
  name,
  prices,
  has_options,

  is_in_stock,
}) => {
  const [quantity, setQuantity] = useState(0)
  const outOfStock = 'out of stock'

  const showPrices = useMemo(() => {
    if (!is_in_stock) return outOfStock
    else return getPrices(prices)
  }, [name])

  return (
    <>
      <Text style={styles.singleProdBody}>{showPrices}</Text>
      {is_in_stock && (
        <View style={styles.singleProdOptionsContainer}>
          <QuantityController quantity={quantity} setQuantity={setQuantity} />
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  singleProdBody: {
    color: colors.mld_red,
    fontFamily: fonts.light,
    fontSize: fontSizes.lg,
    letterSpacing: -0.4,
    marginBottom: spacing.m,
    textTransform: textTransform,
  },
  singleProdOptionsContainer: {
    marginBottom: spacing.lg,
  },
})

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})

SingleProdSimplePricingOptionsAddToCart.propTypes = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProdSimplePricingOptionsAddToCart)
