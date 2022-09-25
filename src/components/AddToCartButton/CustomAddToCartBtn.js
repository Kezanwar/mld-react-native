import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useState } from 'react'
import { fonts, textTransform } from '../../utils/fonts'
import { fontSizes, spacing } from '../../utils/sizes'
import { colors } from '../../utils/colors'
import { addToCart } from '../../../redux/actions/cart.actions'
import { useCallback } from 'react'
import { Button } from 'react-native-paper'

const CustomAddToCartBtn = ({
  disabled,
  addToCart,
  productCartData,
  productId,
}) => {
  const [addToCartButtonData, setAddToCartButtonData] = useState({
    icon: 'cart',
    text: 'Add to cart',
    color: colors.d_grey,
  })

  const handleAddToCart = useCallback(() => {
    if (disabled || !productCartData) return
    addToCart(productCartData)
    if (addToCartButtonData.icon !== 'check-circle') {
      setAddToCartButtonData({
        icon: 'check-circle',
        text: 'Add again',
        color: 'green',
      })
    }
  }, [])

  return (
    <Button
      onPress={handleAddToCart}
      labelStyle={{
        textTransform: textTransform,
        fontFamily: fonts.light,
        fontSize: fontSizes.m,
        letterSpacing: -0.2,
        textDecorationLine: 'underline',
      }}
      contentStyle={{
        padding: 4,
      }}
      icon={addToCartButtonData.icon}
      color={addToCartButtonData.color}
      style={styles.add_to_cart}
    >
      {addToCartButtonData.text}
    </Button>
  )
}

const styles = StyleSheet.create({
  add_to_cart: {
    color: colors.white,
    borderRadius: 100,
  },
})

const mapDispatchToProps = {
  addToCart,
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

CustomAddToCartBtn.propTypes = {
  productCartData: PropTypes.object,
  productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  disabled: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomAddToCartBtn)
