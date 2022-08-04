import { PRODUCTS } from './types.actions'
import axios from 'axios'

export const getProdsByCategories = (slug) => (dispatch) => {
  try {
    const res = axios.get(
      `${env.url}/api/redis/products/getProdsByCats/${slug}`
    )
    const prodCat = res.data
    dispatch({ type: PRODUCTS.GET_PROD_BY_CAT, payload: prodCat })
  } catch (error) {
    console.log(error)
  }
}
