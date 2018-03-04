import {
  REQUEST,
  RECEIVE
} from 'Constants/actionTypes'

export const request = () => {
  return {
    type: REQUEST
  }
}

export const receive = () => {
  return {
    type: RECEIVE
  }
}
