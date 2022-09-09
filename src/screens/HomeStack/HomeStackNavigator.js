import React from 'react'

import PropTypes from 'prop-types'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTE_KEYS } from '../../../constants/constants'
import HomeIndexScreen from './HomeIndexScreen/HomeIndexScreen'

const HomeStackNavigator = ({}) => {
  const HomeStack = createNativeStackNavigator()
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name={ROUTE_KEYS.HOME.index}
        component={HomeIndexScreen}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
