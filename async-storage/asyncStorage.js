import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEYS = {
  RECENTLY_VIEWED_PRODUCTS: 'RECENTLY_VIEWED_PRODUCTS',
}

export const storeRecentlyViewedProducts = async (productId) => {
  try {
    let currentVal = await AsyncStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED_PRODUCTS)
    if (currentVal) {
      currentVal = JSON.parse(currentVal)
      const exists = currentVal.some((v) => v === productId)
      if (exists) {
        return
      }
      if (currentVal.length === 5) {
        currentVal.pop()
      }
      currentVal.unshift(productId)
      await AsyncStorage.setItem(STORAGE_KEYS.RECENTLY_VIEWED_PRODUCTS, JSON.stringify(currentVal))
    } else await AsyncStorage.setItem(STORAGE_KEYS.RECENTLY_VIEWED_PRODUCTS, JSON.stringify([productId]))
  } catch (e) {
    // saving error
    console.error(e)
  }
}

export const getRecentlyViewProducts = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED_PRODUCTS)
    console.log(JSON.parse(value))
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
}

export const removeRecentlyViewedProducts = async () => {
  try {
    const value = await AsyncStorage.removeItem(STORAGE_KEYS.RECENTLY_VIEWED_PRODUCTS)
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
}
