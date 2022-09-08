import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { addToCart } from '../../../redux/actions/cart.actions'
import { getProdsByCategories } from '../../../redux/actions/products.actions'
import { getAllVendors } from '../../../redux/actions/vendors.actions'
import { connect } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTE_KEYS } from '../../../constants/constants'
import { colors } from '../../utils/colors'
import ProductCarousel from '../../features/ProductCarousel/ProductCarousel'
import ProductMasonryGrid from '../../features/ProductMasonryGrid/ProductMasonryGrid'

const HomeStackNavigator = ({
  addToCart,
  products,
  getProdsByCategories,
  vendors,
  getAllVendors,
}) => {
  const HomeStack = createNativeStackNavigator()

  useEffect(() => {
    getProdsByCategories('coffee')
    getProdsByCategories('spirits')
    getProdsByCategories('award_winners')
    getAllVendors()
  }, [])

  console.log(products)
  console.log(vendors)

  function HomeScreen() {
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
        {/* <Button onPress={() => console.log(products)}>click</Button> */}
      </>
    )
  }

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name={ROUTE_KEYS.HOME.index}
        component={HomeScreen}
      />
    </HomeStack.Navigator>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeStackNavigator)
