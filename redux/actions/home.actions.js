import { HOME } from './types.actions'
import env from '../../mld.config'
import axios from 'axios'

export const getHomeSingleProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${env.url}/api/redis/single?id=${id}`)
    const prod = res.data
    dispatch({ type: HOME.GET_HOME_SINGLE_PRODUCT, payload: prod })
  } catch (error) {
    console.log(error)
  }
}
