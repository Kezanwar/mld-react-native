import { CATEGORIES } from './types.actions'
import store from '../store'
import axios from 'axios'

export const getCategories = () => {
  try {
    const res = axios.get(`${env.url}/api/redis/categories`)
    const categories = res.data
    store.dispatch({ type: CATEGORIES.GET_CATEGORIES, payload: categories })
  } catch (error) {
    console.log(error)
  }
}
