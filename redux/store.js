import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root.reducer'

const initialState = {}
const middleware = [thunk]

const enhancerList = []
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension())
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware, ...enhancerList))
)

export default store
