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

const HomeIndexScreen = ({
  products,
  getProdsByCategories,
  vendors,
  getAllVendors,
}) => {
  const isFocused = useIsFocused()
  console.log(isFocused)

  useEffect(() => {
    getProdsByCategories('coffee')
    getProdsByCategories('spirits')
    getProdsByCategories('award_winners')
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
        {products?.award_winners && (
          <ProductCarousel
            {...products.award_winners}
            slug={'award-winners'}
            stackRoute={ROUTE_KEYS.HOME.category}
          />
        )}
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
}

const mapStateToProps = (state) => ({
  products: state.products,
  vendors: state.vendors,
})

HomeIndexScreen.propTypes = {
  products: PropTypes.object,
  vendors: PropTypes.object,
  getProdsByCategories: PropTypes.func,
  getAllVendors: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndexScreen)
