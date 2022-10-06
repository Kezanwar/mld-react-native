import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import React from 'react'
import { spacing } from './src/utils/sizes'
import { navigationRef } from './RootNavigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomNavigation from './src/features/BottomNavigation/BottomNavigation'
import { STACK_ROUTES } from './constants/routes.constants'
import HomeStackNavigator from './src/screens/HomeStack/HomeStackNavigator'
import CartStackNavigator from './src/screens/CartStack/CartStackNavigator'
import { colors } from './src/utils/colors'
import { useFonts } from 'expo-font'
import { fonts } from './src/utils/fonts'

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
  let [fontsLoaded] = useFonts({
    [fonts.bold]: require('./assets/fonts/HelveticaNeueLTStd-Md.otf'),
    [fonts.light]: require('./assets/fonts/HelveticaNeueLTStd-Lt.otf'),
    [fonts.thin]: require('./assets/fonts/HelveticaNeueLTStd-Th.otf'),
  })
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }

  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  )

  return (
    <Provider store={store}>
      <PaperProvider>
        <MyStatusBar backgroundColor={colors.white} />
        <NavigationContainer ref={navigationRef}>
          <Tab.Navigator
            tabBar={(props) => {
              return <BottomNavigation {...props} />
            }}
          >
            <Tab.Screen
              options={{ headerShown: false }}
              name={STACK_ROUTES.HOME.stack}
              component={HomeStackNavigator}
            />
            <Tab.Screen options={{ headerShown: false }} name={STACK_ROUTES.SEARCH.stack} component={SearchScreen} />
            <Tab.Screen
              options={{ headerShown: false }}
              name={STACK_ROUTES.CART.stack}
              component={CartStackNavigator}
            />
            <Tab.Screen options={{ headerShown: false }} name={STACK_ROUTES.PROFILE.stack} component={ProfileScreen} />
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
  statusBar: {
    borderRadius: 400,
  },
})
