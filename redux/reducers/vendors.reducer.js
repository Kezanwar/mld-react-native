import { VENDORS } from '../actions/types.actions'

const initialState = []

const vendors = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case VENDORS.GET_VENDORS: {
      return [...state, ...payload]
    }
    default:
      return state
  }
}

export default vendors
