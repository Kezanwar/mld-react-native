import { HOME } from '../../actions/types.actions'

const initialState = {
  product: null,
  recommended_products: null,
  store_products: null,
  isLoading: true,
  error: null,
}

const homeSingleProduct = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case HOME.GET_HOME_SINGLE_PRODUCT: {
      return { ...state, ...payload, isLoading: false }
    }
    case HOME.SET_HOME_SINGLE_PRODUCT_LOADING: {
      return { ...state, isLoading: true }
    }
    default:
      return state
  }
}

export default homeSingleProduct
