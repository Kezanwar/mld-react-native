import React from 'react'
import HomeIndexScreen from './HomeIndexScreen/HomeIndexScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTE_KEYS } from '../../../constants/constants'
import { Text, View } from 'react-native'

const HomeStackNavigator = () => {
  const HomeStack = createNativeStackNavigator()

  const HomeProduct = () => {
    return (
      <View>
        <Text>home products</Text>
      </View>
    )
  }
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name={ROUTE_KEYS.HOME.index}
        component={HomeIndexScreen}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name={ROUTE_KEYS.HOME.single_product}
        component={HomeProduct}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
