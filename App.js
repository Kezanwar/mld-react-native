import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import BottomBar from './src/features/BottomBar/BottomBar'
import { colors } from './src/utils/colors'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer, crea } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import store from './redux/store'
import { Provider } from 'react-redux'
import React, { useEffect } from 'react'
import { spacing } from './src/utils/sizes'
import { navigationRef } from './RootNavigation'

const Stack = createNativeStackNavigator()

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
  // console.log(<Stack.Screen name="Home" component={HomeScreen} />)
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar style="auto" />
        {/* <SafeAreaView style={styles.SafeAreaContainer}> */}
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="Home">
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
            />
          </Stack.Navigator>
        </NavigationContainer>
        <BottomBar />
        {/* </SafeAreaView> */}
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
