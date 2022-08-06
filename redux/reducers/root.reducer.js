import { combineReducers } from 'redux'
import categories from './categories.reducer'
import cart from './cart.reducer'
import products from './products.reducer'

export default combineReducers({
  categories,
  cart,
  products,
})
