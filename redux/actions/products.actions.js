import { PRODUCTS } from './types.actions'
import env from '../../mld.config'
import axios from 'axios'
import { parseUnderScoreStrToDashStr } from '../../src/utils/parseStrings'

export const getProdsByCategories = (slug) => async (dispatch) => {
  const slugStr = parseUnderScoreStrToDashStr(slug)
  try {
    const res = await axios.get(`${env.url}/api/redis/getProdsByCat/${slugStr}`)
    const prodCat = res.data
    dispatch({ type: PRODUCTS.GET_PROD_BY_CAT, payload: { [slug]: prodCat } })
  } catch (error) {
    console.log(error)
  }
}
