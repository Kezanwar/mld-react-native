import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { fonts } from '../../utils/fonts'
import PropTypes from 'prop-types'
import { correctPriceWithCurrency, getPrices } from '../../utils/prices'
import { Button } from 'react-native-paper'
import { connect } from 'react-redux'
import { addToCart } from '../../../redux/actions/cart.actions'

const ProductCarouselCard = ({ dimensions, prod, addToCart, cart }) => {
  const { id, name, short_description, prices, store, images } = prod
  const { price_range } = prices
  const [addToCartButtonData, setAddToCartButtonData] = useState({
    icon: 'cart',
    text: 'Add to cart',
    color: colors.d_grey,
  })

  const getDynamicFontSize = () => {
    if (name.length > 20) return { fontSize: 24 }
    else return {}
  }

  // const getPrices = () => {
  //   if (price_range) {
  //     return (
  //       correctPriceWithCurrency(price_range.min_amount) +
  //       ' - ' +
  //       correctPriceWithCurrency(price_range.max_amount)
  //     )
  //   } else return correctPriceWithCurrency(prices.price)
  // }

  const handleAddToCart = () => {
    addToCart({
      title: name,
      product_id: id,
      price: correctPriceWithCurrency(prices.price),
    })
    if (addToCartButtonData.icon !== 'check-circle') {
      setAddToCartButtonData({
        icon: 'check-circle',
        text: 'Added',
        color: 'green',
      })
    }
  }

  return (
    <View
      key={`product-${id}`}
      style={[styles.carouselCardWrapper, { width: dimensions.width * 0.6 }]}
    >
      {images && images[0] && images[0].thumbnail && (
        <Image
          style={[styles.productImage, { height: dimensions.height * 0.2 }]}
          source={{ uri: images[0].thumbnail }}
        />
      )}

      <Text
        numberOfLines={2}
        style={[styles.productTitle, getDynamicFontSize()]}
      >
        {name}
      </Text>
      <Text style={styles.price_range}>{getPrices(prices, price_range)}</Text>
      <Button
        onPress={handleAddToCart}
        labelStyle={{
          textTransform: 'lowercase',
          fontFamily: fonts.light,
          fontSize: fontSizes.m,
          letterSpacing: -0.2,
          textDecorationLine: 'underline',
        }}
        contentStyle={{
          // flexDirection: 'row-reverse',
          padding: 4,
          color: 'red',
        }}
        icon={addToCartButtonData.icon}
        color={addToCartButtonData.color}
        style={styles.add_to_cart}
      >
        {addToCartButtonData.text}
      </Button>

      <View style={styles.storeDetailsContainer}>
        <Image style={styles.shopGravatar} source={{ uri: store.gravatar }} />
        <Text style={styles.storeName}>By {store.shop_name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  carouselCardWrapper: {
    backgroundColor: colors.white,
    marginRight: spacing.lg,
    padding: spacing.ml,
    borderRadius: spacing.sm,
    // shadowColor: '#171717',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
    borderWidth: 1,
    borderColor: colors.l_grey,
    justifyContent: 'space-between',
  },
  productImage: {
    flex: 2,
    marginBottom: spacing.lg,
    borderRadius: 5,
  },
  productTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: colors.d_grey,
    marginBottom: spacing.lg,
    fontFamily: fonts.light,
    textTransform: 'lowercase',
    letterSpacing: -0.75,
  },
  price_range: {
    textAlign: 'center',
    fontSize: fontSizes.m,
    color: colors.mld_red,
    marginBottom: spacing.sm,
    fontFamily: fonts.light,
    textTransform: 'lowercase',
    letterSpacing: -0.35,
  },
  add_to_cart: {
    // borderColor: colors.d_grey,
    // borderWidth: 1,
    // backgroundColor: colors.d_grey,
    color: colors.white,
    marginBottom: spacing.lg,
    borderRadius: 100,
  },
  storeDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeName: {
    fontSize: 18,
    color: colors.d_grey,
    fontFamily: fonts.light,
    textTransform: 'lowercase',
    letterSpacing: -0.5,
  },
  shopGravatar: {
    height: 40,
    aspectRatio: 1,
    marginRight: spacing.m,
    borderRadius: 50,
  },
})

ProductCarouselCard.propTypes = {
  prod: PropTypes.object,
  dimensions: PropTypes.object,
}

const mapDispatchToProps = {
  addToCart,
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCarouselCard)
