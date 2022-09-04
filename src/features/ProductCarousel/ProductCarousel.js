import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { fonts } from '../../utils/fonts'
import ProductCarouselCard from './ProductCarouselCard'

const ProductCarousel = ({ title, products, dimensions }) => {
  console.log(products)
  return (
    <View style={styles.carouselWrapper}>
      <Text style={styles.carouselTitle}>{title}</Text>
      <ScrollView style={styles.scrollView} alwaysBounceHorizontal horizontal>
        {products &&
          products.map((prod) => {
            return <ProductCarouselCard dimensions={dimensions} prod={prod} />
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
})

ProductCarousel.propTypes = {}

export default ProductCarousel
