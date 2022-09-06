import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { addToCart } from '../../../redux/actions/cart.actions'
import { getProdsByCategories } from '../../../redux/actions/products.actions'
import { connect } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTE_KEYS } from '../../../constants/constants'
import { colors } from '../../utils/colors'
import ProductCarousel from '../../features/ProductCarousel/ProductCarousel'
import ProductMasonryGrid from '../../features/ProductMasonryGrid/ProductMasonryGrid'

const HomeStackNavigator = ({ addToCart, products, getProdsByCategories }) => {
  const HomeStack = createNativeStackNavigator()

  useEffect(() => {
    getProdsByCategories('coffee')
    getProdsByCategories('spirits')
  }, [])

  console.log(products)

  const dimensions = Dimensions.get('window')

  function HomeScreen() {
    return (
      <>
        <ScrollView contentContainerStyle={styles.screenWrapper}>
          {products && products.coffee && (
            <ProductCarousel
              dimensions={dimensions}
              products={products.coffee.products}
              title={products.coffee.title}
            />
          )}
          {products && products.spirits && (
            <ProductMasonryGrid
              title={products.spirits.title}
              products={products.spirits.products}
            />
          )}
        </ScrollView>
      </>
    )
  }

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name={ROUTE_KEYS.HOME_SCREEN}
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
}

const mapStateToProps = (state) => ({
  products: state.products,
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeStackNavigator)
