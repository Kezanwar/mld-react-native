import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { fontSizes, spacing } from '../../utils/sizes'
import ProductCarouselCard from './ProductCarouselCard'
import ProductSectionTitle from '../../components/ProductSectionTitle/ProductSectionTitle'
import { STACK_ROUTES } from '../../../constants/routes.constants'

const ProductCarousel = ({ navigation, title, products, stack, slug, sameScreenNavigate }) => {
  return useMemo(() => {
    const dimensions = Dimensions.get('window')
    const forwardProps = { stack, navigation, sameScreenNavigate }
    return (
      <View style={styles.carouselWrapper}>
        {title ? (
          <ProductSectionTitle
            slug={slug}
            navigateTo={
              products
                ? {
                    route: STACK_ROUTES[stack].single_product,
                    params: { slug: products.slug },
                  }
                : null
            }
            navigation={navigation}
            title={title}
          />
        ) : null}

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
                <ProductCarouselCard key={`product-${prod.id}`} dimensions={dimensions} prod={prod} {...forwardProps} />
              )
            })}
        </ScrollView>
      </View>
    )
  }, [title, products, stack, slug])
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
    // paddingTop: spacing.sm,
    paddingLeft: spacing.sm,
  },
})

ProductCarousel.propTypes = {
  navigation: PropTypes.object.isRequired,
  stack: PropTypes.string.isRequired,
  title: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  slug: PropTypes.string,
  sameScreenNavigate: PropTypes.bool,
}

export default ProductCarousel
