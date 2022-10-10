import { HOME } from './types.actions'
import env from '../../mld.config'
import axios from 'axios'

export const getHomeSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: HOME.SET_HOME_SINGLE_PRODUCT_LOADING })
    const res = await axios.get(`${env.url}/api/redis/single?id=${id}`)
    dispatch({ type: HOME.GET_HOME_SINGLE_PRODUCT, payload: { ...res.data } })
  } catch (error) {
    console.log(error)
  }
}
