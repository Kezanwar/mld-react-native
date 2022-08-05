import { combineReducers } from 'redux'
import categories from './categories.reducer'
import cart from './cart.reducer'

export default combineReducers({
  categories,
  cart,
})
