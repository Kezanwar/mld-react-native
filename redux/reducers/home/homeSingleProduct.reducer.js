import { HOME } from '../../actions/types.actions'

const initialState = {
  product: null,
  isLoading: true,
  error: null,
}

const homeSingleProduct = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case HOME.GET_HOME_SINGLE_PRODUCT: {
      return { ...state, product: payload, isLoading: false }
    }
    default:
      return state
  }
}

export default homeSingleProduct
