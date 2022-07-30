import { TEST_ACTION } from './types.actions'
// import { v4 } from 'uuid'
import store from '../store'

export const setTest = (data) => {
  //   const id = v4()
  console.log('hello')
  store.dispatch({
    type: TEST_ACTION,
    payload: data,
  })
}
