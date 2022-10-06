import { CART } from '../actions/types.actions'

const initialState = {}

const cart = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CART.ADD_TO_CART: {
      const key = payload.id
      if (state[key]) {
        return {
          ...state,
          [key]: {
            ...state[key],
            count: state[key].count + payload.count,
          },
        }
      } else return { ...state, [key]: { product: payload.product, count: payload.count } }
    }
    case CART.REMOVE_FROM_CART: {
      const newState = { ...state }
      delete newState[payload]
      return newState
    }
    case CART.DECREMENT_PRODUCT_COUNT: {
      return { ...state, [payload]: { ...state[payload], count: state[payload].count - 1 } }
    }
    case CART.DECREMENT_PRODUCT_COUNT: {
      return { ...state, [payload]: { ...state[payload], count: state[payload].count + 1 } }
    }
    default:
      return state
  }
}

export default cart
