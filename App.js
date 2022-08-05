import { StatusBar } from 'expo-status-bar'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import React from 'react'
import { spacing } from './src/utils/sizes'
import { navigationRef } from './RootNavigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomNavigation from './src/features/BottomNavigation/BottomNavigation'
import { ROUTE_KEYS } from './constants/constants'
import HomeStackNavigator from './src/screens/HomeStack/HomeStackNavigator'
import CartStackNavigator from './src/screens/CartStack/CartStackNavigator'

const Tab = createBottomTabNavigator()

function SearchScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  )
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  )
}

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar style="auto" />
        <NavigationContainer ref={navigationRef}>
          <Tab.Navigator
            tabBar={(props) => {
              return <BottomNavigation {...props} />
            }}
          >
            <Tab.Screen
              options={{ headerShown: false }}
              name={ROUTE_KEYS.HOME}
              component={HomeStackNavigator}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name={ROUTE_KEYS.SEARCH}
              component={SearchScreen}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name={ROUTE_KEYS.CART}
              component={CartStackNavigator}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name={ROUTE_KEYS.PROFILE}
              component={ProfileScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  SafeAreaContainer: {
    flex: 1,
    padding: spacing.m,
  },
  ScrollContainer: {
    flex: 1,
  },
})
