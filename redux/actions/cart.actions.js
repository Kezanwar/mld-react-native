import { v4 } from 'uuid'
import { CART } from './types.actions'

export const addToCart = (item) => (dispatch) => {
  try {
    dispatch({ type: CART.ADD_TO_CART, payload: { ...item, uuid: v4() } })
  } catch (error) {
    console.log(error)
  }
}

export const removeFromCart = (uuid) => (dispatch) => {
  try {
    console.log(uuid)
    dispatch({ type: CART.REMOVE_FROM_CART, payload: uuid })
  } catch (error) {
    console.log(error)
  }
}
