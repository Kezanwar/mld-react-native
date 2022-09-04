import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { fonts } from '../../utils/fonts'
import PropTypes from 'prop-types'

const ProductCarouselCard = ({ dimensions, prod }) => {
  const { id, name, short_description, prices, store, images } = prod
  const { price_range } = prices

  const getDynamicFontSize = () => {
    if (name.length > 28) return { fontSize: 20 }
    else return {}
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

      <Text style={[styles.productTitle, getDynamicFontSize()]}>{name}</Text>
      <Text>{}</Text>
      <View style={styles.storeDetailsContainer}>
        <Text style={styles.storeName}>By {store.shop_name}</Text>
        <Image style={styles.shopGravatar} source={{ uri: store.gravatar }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  carouselCardWrapper: {
    backgroundColor: colors.white,
    marginRight: spacing.lg,
    padding: spacing.m,
    borderRadius: spacing.sm,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    justifyContent: 'space-between',
  },
  productImage: {
    flex: 2,
    marginBottom: spacing.lg,
    borderRadius: 5,
  },
  productTitle: {
    fontSize: fontSizes.lg,
    color: colors.mld_red,
    marginBottom: spacing.m,
    fontFamily: fonts.light,
    textTransform: 'lowercase',
    letterSpacing: -0.5,
  },
  storeDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  storeName: {
    fontSize: fontSizes.m,
    fontWeight: '600',
    color: colors.d_grey,
    fontFamily: fonts.light,
    textTransform: 'lowercase',
  },
  shopGravatar: {
    height: fontSizes.xxl,
    aspectRatio: 1,
    marginRight: spacing.sm,
    borderRadius: 50,
  },
})

ProductCarouselCard.propTypes = {
  prod: PropTypes.object,
  dimensions: PropTypes.object,
}

export default ProductCarouselCard
