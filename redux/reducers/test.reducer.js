import { TEST_ACTION } from '../actions/types.actions'

const initialState = []

const test = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TEST_ACTION: {
      return [...state, ...payload]
    }
    default:
      return state
  }
}

export default test
