import { StatusBar } from 'expo-status-bar'
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import BottomBar from './src/features/BottomBar/BottomBar'
import { colors } from './src/utils/colors'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import store from './redux/store'
import { Provider } from 'react-redux'
import axios from 'axios'
import env from './mld.config'
import { TEST_ACTION } from './redux/actions/types.actions'
import React, { useEffect } from 'react'
import { spacing } from './src/utils/sizes'

export default function App() {
  // useEffect(() => {
  //   if (!state.test || state.test.length === 0) {
  //     axios
  //       .get(`${env.url}/api/redis/products`)
  //       .then((res) => {
  //         console.log(res.data)
  //         store.dispatch({ type: TEST_ACTION, payload: res.data })
  //       })
  //       .catch((err) => console.log(err))
  //   }
  // }, [])

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <SafeAreaView style={styles.SafeAreaContainer}>
            <ScrollView style={styles.ScrollContainer}>
              <Text>hello</Text>
            </ScrollView>
            <BottomBar />
          </SafeAreaView>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  SafeAreaContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ScrollContainer: {
    flex: 1,
    padding: spacing.m,
  },
})
