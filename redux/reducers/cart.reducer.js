import { CART } from '../actions/types.actions'

const initialState = []

const cart = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CART.ADD_TO_CART: {
      return [...state, payload]
    }
    case CART.REMOVE_FROM_CART: {
      return state.filter((item) => item.uuid !== payload)
    }
    default:
      return state
  }
}

export default cart
