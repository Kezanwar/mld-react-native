import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import MasonryList from '@react-native-seoul/masonry-list'
import ProductSectionTitle from '../../components/ProductSectionTitle/ProductSectionTitle'

import { colors } from '../../utils/colors'
import { fonts, textTransform } from '../../utils/fonts'
import { fontSizes } from '../../utils/sizes'
import { getPrices } from '../../utils/prices'
import { STACK_ROUTES } from '../../../constants/routes.constants'

const ProductMasonryGrid = ({ stack, products, title, slug, navigation }) => {
  const forwardProps = { navigation, stack }
  return (
    <View style={styles.masonryContainer}>
      <ProductSectionTitle
        slug={slug}
        navigateTo={
          products
            ? {
                route: STACK_ROUTES[stack].category,
                params: { slug: products.slug },
              }
            : null
        }
        navigation={navigation}
        title={title}
      />
      <MasonryList
        numColumns={2}
        data={products.slice(6, 12)}
        keyExtractor={(item) => item.id}
        renderItem={({ item, i }) => <GridItem {...forwardProps} index={i} item={item} />}
      />
    </View>
  )
}

const GridItem = ({ index, item, navigation, stack }) => {
  const { id, name, prices, store, images, is_in_stock } = item
  const { price_range } = prices

  const heights = [220, 170, 140]
  const random = Math.floor(Math.random() * heights.length)

  const getDynamicFontSize = useCallback((name) => {
    if (name.length > 16) return { fontSize: 15 }
    else return {}
  }, [])

  const removeFirstTwoMarginTop = useCallback((i) => {
    if (i === 0 || i === 1) return { marginTop: 12 }
    else return {}
  }, [])

  return (
    <>
      <TouchableWithoutFeedback onPress={() => navigation.navigate(STACK_ROUTES[stack].single_product, { id })}>
        <View style={[styles.masonryGridItem, removeFirstTwoMarginTop(index)]}>
          {images && images[0] && images[0] && (
            <Image style={[styles.productImage, { height: heights[0] }]} source={{ uri: images[0] }} />
          )}
          <View style={styles.productTitleWrapper}>
            <Text numberOfLines={3} style={styles.productTitle}>
              {name}
            </Text>
          </View>

          <Text style={styles.productPrices}>{getPrices(prices, is_in_stock)}</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.productStoreDetailsContainer}>
        <Text
          style={[
            styles.productStoreName,
            { color: colors.m_grey, marginRight: 5 },
            getDynamicFontSize(store.shop_name),
          ]}
        >
          By
        </Text>
        <Text
          style={[styles.productStoreName, { textDecorationLine: 'underline' }, getDynamicFontSize(store.shop_name)]}
        >
          {store.shop_name}
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  masonryContainer: { padding: 10 },
  masonryGridItem: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    padding: 16,
    borderRadius: 16,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.l_grey,
  },
  productImage: {
    borderRadius: 10,
    marginBottom: 20,
  },
  productTitleWrapper: {
    minHeight: 90,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 22,

    fontFamily: fonts.light,
    letterSpacing: -0.4,
    textAlign: 'center',
    textTransform: textTransform,
    marginBottom: 16,
  },
  productPrices: {
    fontSize: 16,
    fontFamily: fonts.light,
    letterSpacing: -0.4,
    textAlign: 'center',
    textTransform: textTransform,
    color: colors.mld_red,
    marginBottom: 10,
  },
  add_to_cart: {
    // borderColor: colors.d_grey,
    // borderWidth: 1,
    // backgroundColor: colors.d_grey,
    color: colors.white,
    borderRadius: 100,
  },

  productStoreDetailsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  productStoreName: {
    textAlign: 'center',
    fontFamily: fonts.light,
    fontSize: fontSizes.m,
    textTransform: textTransform,
    marginTop: 20,
    marginBottom: 20,
  },
})

ProductMasonryGrid.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  stackRoute: PropTypes.string,
  slug: PropTypes.string,
  addToCart: PropTypes.func,
}

export default React.memo(ProductMasonryGrid)
