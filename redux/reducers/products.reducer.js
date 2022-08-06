import { PRODUCTS } from '../actions/types.actions'

const initialState = {}

const products = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case PRODUCTS.GET_PROD_BY_CAT: {
      return { ...state, ...payload }
    }
    default:
      return state
  }
}

export default products
