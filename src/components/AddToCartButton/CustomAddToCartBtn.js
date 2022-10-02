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

const CustomAddToCartBtn = ({ addToCart, productToAdd, quantity }) => {
  const [addToCartButtonData, setAddToCartButtonData] = useState({
    icon: 'cart',
    text: 'Add to cart',
    color: colors.d_grey,
  })

  console.log(quantity)

  // productToAdd is used as a enabled/disabled source of truth for the add to cart

  const handleAddToCart = useCallback(() => {
    if (quantity < 1 || !productToAdd) return
    addToCart(productToAdd)
    if (addToCartButtonData.icon !== 'check-circle') {
      setAddToCartButtonData({
        icon: 'check-circle',
        text: 'Add again',
        color: 'green',
      })
    }
  }, [productToAdd, quantity])

  return (
    <View style={styles.addCartContainer}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  addCartContainer: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.d_grey,
  },
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
  productToAdd: PropTypes.object,
  productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomAddToCartBtn)
