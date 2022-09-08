import { VENDORS } from './types.actions'
import env from '../../mld.config'
import axios from 'axios'

export const getAllVendors = () => async (dispatch) => {
  try {
    const res = await axios.get(`${env.url}/api/redis/vendors`)
    const vendors = res?.data
    dispatch({ type: VENDORS.GET_VENDORS, payload: vendors })
  } catch (error) {
    console.log(error)
  }
}
