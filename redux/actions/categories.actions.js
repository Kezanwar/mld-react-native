import { CATEGORIES } from './types.actions'
import axios from 'axios'

export const getCategories = () => (dispatch) => {
  try {
    const res = axios.get(`${env.url}/api/redis/categories`)
    const categories = res.data
    dispatch({ type: CATEGORIES.GET_CATEGORIES, payload: categories })
  } catch (error) {
    console.log(error)
  }
}
