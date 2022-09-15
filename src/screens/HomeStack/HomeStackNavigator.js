import React from 'react'
import HomeIndexScreen from './HomeIndexScreen/HomeIndexScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { STACK_ROUTES } from '../../../constants/constants'
import { Text, View } from 'react-native'
import HomeSingleProductScreen from './HomeSingleProductScreen/HomeSingleProductScreen'

const HomeStackNavigator = () => {
  const HomeStack = createNativeStackNavigator()

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name={STACK_ROUTES.HOME.index}
        component={HomeIndexScreen}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name={STACK_ROUTES.HOME.single_product}
        component={HomeSingleProductScreen}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
