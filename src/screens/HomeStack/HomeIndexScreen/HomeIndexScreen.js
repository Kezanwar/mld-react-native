import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import PropTypes from 'prop-types'

import ProductCarousel from '../../../features/ProductCarousel/ProductCarousel'
import ProductMasonryGrid from '../../../features/ProductMasonryGrid/ProductMasonryGrid'

import { colors } from '../../../utils/colors'
import { ROUTE_KEYS } from '../../../../constants/constants'

import { addToCart } from '../../../../redux/actions/cart.actions'
import { getProdsByCategories } from '../../../../redux/actions/products.actions'
import { getAllVendors } from '../../../../redux/actions/vendors.actions'
import { connect } from 'react-redux'
import VendorCarousel from '../../../features/VendorsCarousel/VendorCarousel'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { getCategories } from '../../../../redux/actions/categories.actions'
import CategoryCarousel from '../../../features/CategoryCarousel/CategoryCarousel'

const HomeIndexScreen = ({
  products,
  getProdsByCategories,
  getCategories,
  categories,
  vendors,
  getAllVendors,
  navigation,
}) => {
  const isFocused = useIsFocused()
  console.log(isFocused)

  useEffect(() => {
    getProdsByCategories('coffee')
    getProdsByCategories('spirits')
    getProdsByCategories('award_winners')
    getCategories()
    getAllVendors()
  }, [])

  return (
    <>
      <ScrollView contentContainerStyle={styles.screenWrapper}>
        {products?.coffee && (
          <ProductCarousel
            {...products.coffee}
            slug={'coffee'}
            stackRoute={ROUTE_KEYS.HOME.category}
          />
        )}

        {products?.spirits && (
          <ProductMasonryGrid
            {...products.spirits}
            stackRoute={ROUTE_KEYS.HOME.category}
            slug={'spirits'}
          />
        )}

        {categories ? (
          <CategoryCarousel
            title={'Browse Categories'}
            categories={categories}
          />
        ) : null}

        {products?.award_winners && (
          <ProductCarousel
            {...products.award_winners}
            slug={'award-winners'}
            stackRoute={ROUTE_KEYS.HOME.category}
          />
        )}

        {vendors?.all && (
          <VendorCarousel title={'Recommended Stores'} vendors={vendors.all} />
        )}

        <Button
          onPress={() => navigation.navigate(ROUTE_KEYS.HOME.single_product)}
        >
          single product
        </Button>
        {/* <Button onPress={() => console.log(categories)}>state</Button> */}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: colors.white,
  },
})

const mapDispatchToProps = {
  addToCart,
  getProdsByCategories,
  getAllVendors,
  getCategories,
}

const mapStateToProps = (state) => ({
  products: state.products,
  vendors: state.vendors,
  categories: state.categories,
})

HomeIndexScreen.propTypes = {
  products: PropTypes.object,
  vendors: PropTypes.object,
  getProdsByCategories: PropTypes.func,
  getAllVendors: PropTypes.func,
  getCategories: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndexScreen)
