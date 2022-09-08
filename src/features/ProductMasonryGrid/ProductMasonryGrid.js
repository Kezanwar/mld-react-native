import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import MasonryList from '@react-native-seoul/masonry-list'
import ProductSectionTitle from '../../components/ProductSectionTitle/ProductSectionTitle'

import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'
import { fontSizes } from '../../utils/sizes'
import { correctPriceWithCurrency, getPrices } from '../../utils/prices'

import { connect } from 'react-redux'
import { addToCart } from '../../../redux/actions/cart.actions'

const ProductMasonryGrid = ({
  products,
  title,
  stackRoute,
  slug,
  addToCart,
}) => {
  // const {} = data

  return (
    <View style={styles.masonryContainer}>
      <ProductSectionTitle stackRoute={stackRoute} slug={slug} title={title} />
      <MasonryList
        numColumns={2}
        // style={styles.masonryContainer}
        data={products.slice(6, 12)}
        keyExtractor={(item) => item.id}
        renderItem={({ item, i }) => (
          <GridItem addToCart={addToCart} item={item} />
        )}
      />
    </View>
  )
}

const GridItem = ({ item, addToCart }) => {
  const { id, name, short_description, prices, store, images } = item
  const { price_range } = prices

  const heights = [220, 170, 140]
  const random = Math.floor(Math.random() * heights.length)

  const [addToCartButtonData, setAddToCartButtonData] = useState({
    icon: 'cart',
    text: 'Add to cart',
    color: colors.d_grey,
  })

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

  const getDynamicFontSize = (name) => {
    if (name.length > 16) return { fontSize: 15 }
    else return {}
  }

  return (
    <>
      <View style={[styles.masonryGridItem]}>
        {images && images[0] && images[0].thumbnail && (
          <Image
            style={[styles.productImage, { height: heights[0] }]}
            source={{ uri: images[0].thumbnail }}
          />
        )}
        <View style={styles.productTitleWrapper}>
          <Text numberOfLines={3} style={styles.productTitle}>
            {name}
          </Text>
        </View>

        <Text style={styles.productPrices}>
          {getPrices(prices, price_range)}
        </Text>
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
      </View>
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
          style={[
            styles.productStoreName,
            { textDecorationLine: 'underline' },
            getDynamicFontSize(store.shop_name),
          ]}
        >
          {store.shop_name}
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  masonryContainer: { padding: 10 },
  masonryTitle: {
    marginLeft: 10,
    fontFamily: fonts.light,
    color: colors.mld_red,
    fontSize: fontSizes.xxl,
    textTransform: 'lowercase',
  },
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
    textTransform: 'lowercase',
    marginBottom: 16,
  },
  productPrices: {
    fontSize: 16,
    fontFamily: fonts.light,
    letterSpacing: -0.4,
    textAlign: 'center',
    textTransform: 'lowercase',
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
    textTransform: 'lowercase',
    marginTop: 20,
    marginBottom: 20,
  },
})

const mapDispatchToProps = {
  addToCart,
}

const mapStateToProps = (state) => ({})

ProductMasonryGrid.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  stackRoute: PropTypes.string,
  slug: PropTypes.string,
  addToCart: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductMasonryGrid)
