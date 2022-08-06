import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { fonts } from '../../utils/fonts'

const ProductCarousel = ({ title, products, dimensions }) => {
  console.log(products)
  return (
    <View style={styles.carouselWrapper}>
      <Text style={styles.carouselTitle}>{title}</Text>
      <ScrollView style={styles.scrollView} alwaysBounceHorizontal horizontal>
        {products &&
          products.map((prod) => {
            const { id, name, short_description, prices, store, images } = prod
            const getDynamicFontSize = () => {
              if (name.length > 28) return { fontSize: 20 }
              else return {}
            }
            return (
              <View
                key={`product-${id}`}
                style={[
                  styles.carouselItemWrapper,
                  { width: dimensions.width * 0.6 },
                ]}
              >
                {images && images[0] && images[0].thumbnail && (
                  <Image
                    style={[
                      styles.productImage,
                      { height: dimensions.height * 0.2 },
                    ]}
                    source={{ uri: images[0].thumbnail }}
                  />
                )}

                <Text style={[styles.productTitle, getDynamicFontSize()]}>
                  {name}
                </Text>
                {/* <Text>{short_description}</Text> */}
                <View style={styles.storeDetailsContainer}>
                  <Text style={styles.storeName}>By {store.shop_name}</Text>
                  <Image
                    style={styles.shopGravatar}
                    source={{ uri: store.gravatar }}
                  />
                </View>
              </View>
            )
          })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  carouselWrapper: {
    // flex: 0.7,
    padding: spacing.m,
    paddingTop: spacing.xxl,
    // marginBottom: spacing.sm,
  },
  carouselTitle: {
    color: colors.mld_red,
    fontSize: fontSizes.xxl,
    letterSpacing: -0.5,
    marginBottom: spacing.sm,
    // textDecorationLine: true,
    paddingLeft: spacing.sm,
    fontFamily: fonts.light,
    textTransform: 'lowercase',
  },
  scrollView: {
    // padding: spacing.lg,
    paddingBottom: spacing.lg,
    paddingTop: spacing.sm,
    paddingLeft: spacing.sm,
  },
  carouselItemWrapper: {
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

export default ProductCarousel
