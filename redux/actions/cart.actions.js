import { CART } from './types.actions'

export const addToCart = (item, count) => (dispatch) => {
  try {
    dispatch({
      type: CART.ADD_TO_CART,
      payload: { id: item.id, product: item, count: count },
    })
  } catch (error) {
    console.log(error)
  }
}

export const removeFromCart = (item_id) => (dispatch) => {
  try {
    dispatch({ type: CART.REMOVE_FROM_CART, payload: item_id })
  } catch (error) {
    console.log(error)
  }
}

export const decrementProductCountCart = (item_id) => (dispatch) => {
  try {
    dispatch({ type: CART.DECREMENT_PRODUCT_COUNT, payload: item_id })
  } catch (error) {
    console.log(error)
  }
}

export const incrementProductCountCart = (item_id) => (dispatch) => {
  try {
    dispatch({ type: CART.REMOVE_FROM_CART, payload: item_id })
  } catch (error) {
    console.log(error)
  }
}
