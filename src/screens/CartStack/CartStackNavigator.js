import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { removeFromCart } from '../../../redux/actions/cart.actions'
import { connect } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { STACK_ROUTES } from '../../../constants/routes.constants'
import { Button } from 'react-native-paper'
import { spacing } from '../../utils/sizes'
const CartStackNavigator = ({ removeFromCart, cart }) => {
  const CartStack = createNativeStackNavigator()

  function CartScreen() {
    return (
      <ScrollView
        contentContainerStyle={{
          //   flex: 1,
          paddingTop: spacing.xl,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {cart?.length > 0 &&
          cart.map((item) => {
            return useMemo(() => (
              <View
                key={item.uuid}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <Text style={{ marginRight: spacing.m }}>{item.title}</Text>
                <Text>{item.price}</Text>
                <Button onPress={() => removeFromCart(item.uuid)}>
                  remove from cart
                </Button>
              </View>
            ))
          })}
      </ScrollView>
    )
  }

  return (
    <CartStack.Navigator>
      <CartStack.Screen
        options={{ headerShown: false }}
        name={STACK_ROUTES.CART.index}
        component={CartScreen}
      />
    </CartStack.Navigator>
  )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = {
  removeFromCart,
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartStackNavigator)
