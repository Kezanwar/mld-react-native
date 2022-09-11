import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { fonts } from '../../utils/fonts'
import ProductCarouselCard from './ProductCarouselCard'
import ProductCategorySectionTitle from '../../components/ProductSectionTitle/ProductSectionTitle'

const ProductCarousel = ({ title, products, stackRoute, slug }) => {
  return useMemo(() => {
    const dimensions = Dimensions.get('window')
    return (
      <View style={styles.carouselWrapper}>
        <ProductCategorySectionTitle
          slug={slug}
          stackRoute={stackRoute}
          title={title}
        />
        <ScrollView
          snapToAlignment={'left'}
          snapToInterval={dimensions.width * 0.75 + spacing.m}
          decelerationRate={0}
          style={styles.scrollView}
          alwaysBounceHorizontal
          horizontal
        >
          {products &&
            products.map((prod) => {
              return (
                <ProductCarouselCard
                  key={`product-${prod.id}`}
                  dimensions={dimensions}
                  prod={prod}
                />
              )
            })}
        </ScrollView>
      </View>
    )
  }, [title, products, stackRoute, slug])
}

const styles = StyleSheet.create({
  carouselWrapper: {
    // flex: 0.7,
    padding: 10,
    paddingTop: spacing.lg,
    // marginBottom: spacing.sm,
  },
  scrollView: {
    // padding: spacing.lg,
    paddingBottom: spacing.lg,
    paddingTop: spacing.sm,
    paddingLeft: spacing.sm,
  },
})

ProductCarousel.propTypes = {
  title: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object),
  dimensions: PropTypes.object,
}

export default ProductCarousel
