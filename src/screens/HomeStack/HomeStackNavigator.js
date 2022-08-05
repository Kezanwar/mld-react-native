import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { addToCart } from '../../../redux/actions/cart.actions'
import { getCategories } from '../../../redux/actions/categories.actions'
import { connect } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTE_KEYS } from '../../../constants/constants'
import { Button } from 'react-native-paper'

const HomeStackNavigator = ({ addToCart, categories, getCategories }) => {
  const HomeStack = createNativeStackNavigator()

  useEffect(() => {
    console.log('cat useeffect fired')
    if (categories.length === 0) {
      getCategories()
    }
  }, [categories])

  function HomeScreen() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Home Screen</Text>
        <Button
          onPress={() =>
            addToCart({ title: 'hello', price: `£${Math.random().toFixed(2)}` })
          }
        >
          add to cart
        </Button>
      </View>
    )
  }

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{ headerShown: false }}
        name={ROUTE_KEYS.HOME}
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = {
  addToCart,
  getCategories,
}

const mapStateToProps = (state) => ({
  categories: state.categories,
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeStackNavigator)
