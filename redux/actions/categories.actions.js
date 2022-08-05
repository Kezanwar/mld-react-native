import { CATEGORIES } from './types.actions'
import axios from 'axios'
import env from '../../mld.config'

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(`${env.url}/api/redis/categories`)
    const categories = res.data
    dispatch({ type: CATEGORIES.GET_CATEGORIES, payload: categories })
  } catch (error) {
    console.log(error)
  }
}
