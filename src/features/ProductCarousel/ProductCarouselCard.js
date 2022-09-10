import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
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

  const getDynamicFontSize = useCallback(() => {
    if (name.length > 20) return { fontSize: 24 }
    else return {}
  }, [])

  const handleAddToCart = useCallback(() => {
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
  }, [])

  return (
    <View
      style={[styles.carouselCardWrapper, { width: dimensions.width * 0.75 }]}
    >
      {images && images[0] && images[0].thumbnail && (
        <Image
          style={[styles.productImage, { height: dimensions.height * 0.3 }]}
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
        <View style={styles.storeNameContainer}>
          <Text
            style={[styles.storeName, { color: colors.m_grey, marginRight: 5 }]}
          >
            By
          </Text>
          <Text style={[styles.storeName, { textDecorationLine: 'underline' }]}>
            {store.shop_name}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  carouselCardWrapper: {
    backgroundColor: colors.white,
    marginRight: spacing.m,
    padding: spacing.ml,
    borderRadius: spacing.m,
    borderWidth: 1,
    borderColor: colors.l_grey,
    justifyContent: 'space-between',
  },
  productImage: {
    marginBottom: spacing.lg,
    borderRadius: 10,
  },
  productTitle: {
    textAlign: 'center',
    fontSize: 26,
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
    color: colors.white,
    marginBottom: spacing.lg,
    borderRadius: 100,
  },
  storeDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeNameContainer: {
    flexDirection: 'row',
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
  addToCart: PropTypes.func,
}

const mapDispatchToProps = {
  addToCart,
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCarouselCard)
