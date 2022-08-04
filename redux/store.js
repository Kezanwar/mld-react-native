// import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
import rootReducer from './reducers/root.reducer'

// const initialState = {}
// const middleware = [thunk]

// const enhancerList = []
// const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__

// if (typeof devToolsExtension === 'function') {
//   enhancerList.push(devToolsExtension())
// }

// const store = createStore(
//   rootReducer,
//   initialState,
//   // applyMiddleware(...middleware)
//   composeWithDevTools(applyMiddleware(...middleware, ...enhancerList))
// )

// export default store

import { createStore, combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
}
export default configureStore
