import { CATEGORIES } from '../actions/types.actions'

const initialState = []

const categories = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CATEGORIES.GET_CATEGORIES: {
      return [...state, payload]
    }
    default:
      return state
  }
}

export default categories
