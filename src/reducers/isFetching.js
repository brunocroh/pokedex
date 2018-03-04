import {
  REQUEST,
  RECEIVE
} from 'Constants/actionTypes'

export default (state = false, action) => {
  switch (action.type) {
    case REQUEST:
      return true
    case RECEIVE:
      return false
    default:
      return state
  }
}
