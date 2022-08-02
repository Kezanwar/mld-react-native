import { StatusBar } from 'expo-status-bar'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import BottomBar from './src/containers/BottomBar/BottomBar'
import { colors } from './src/utils/colors'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import store from './redux/store'
import { Provider } from 'react-redux'
import React from 'react'
import { spacing } from './src/utils/sizes'
import { navigationRef } from './RootNavigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomNavigation from './src/features/BottomNavigation/BottomNavigation'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

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
    </View>
  )
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  )
}

function CartScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cart Screen</Text>
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

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar style="auto" />
        <NavigationContainer ref={navigationRef}>
          <Tab.Navigator
            tabBar={(props) => {
              // console.log(props)
              return <BottomNavigation {...props} />
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
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

/* <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Search"
              component={SearchScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Cart"
              component={CartScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Profile"
              component={ProfileScreen}
            /> */
// /* </Stack.Navigator> }
