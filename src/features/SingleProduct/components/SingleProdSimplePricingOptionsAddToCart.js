import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import QuantityController from '../../../components/QuantityController/QuantityController'
import { colors } from '../../../utils/colors'
import { fontSizes, spacing } from '../../../utils/sizes'
import { fonts, textTransform } from '../../../utils/fonts'
import { useState } from 'react'
import { useMemo } from 'react'
import { getPrices } from '../../../utils/prices'
import CustomAddToCartBtn from '../../../components/AddToCartButton/CustomAddToCartBtn'
import SingleProductContext from '../SingleProductContext'
import { useContext } from 'react'

const SingleProdSimplePricingOptionsAddToCart = (props) => {
  if (!SingleProductContext) return null
  const context = useContext(SingleProductContext)
  const { id, name, prices, is_in_stock } = context

  const [quantity, setQuantity] = useState(1)

  const showPrices = useMemo(() => {
    return getPrices(prices, is_in_stock)
  }, [name])

  return (
    <>
      <Text style={styles.singleProdBody}>{showPrices}</Text>
      {is_in_stock && (
        <View style={styles.singleProdOptionsContainer}>
          <QuantityController variant={'simple-product'} quantity={quantity} setQuantity={setQuantity} />
          <CustomAddToCartBtn productId={id} quantity={quantity} productToAdd={context} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleProdSimplePricingOptionsAddToCart)
