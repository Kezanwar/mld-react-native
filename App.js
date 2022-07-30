import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, Text, View } from 'react-native'
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

export default function App() {
  const state = store.getState()
  useEffect(() => {
    if (!state.test || state.test.length === 0)
      axios
        .get(`${env.url}/api/redis/products`)
        .then((res) => {
          console.log(res.data)
          store.dispatch({ type: TEST_ACTION, payload: res.data })
        })
        .catch((err) => console.log(err))
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    )
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <BottomBar />
            {/* {store && (
              <FlatList
                renderItem={renderItem}
                data={state ? state.test : []}
                // keyExtractor={(item) => item.id}
              />
            )} */}
          </View>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
