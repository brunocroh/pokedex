import {
  POKEMON_LOAD_ERROR,
  POKEMON_LOAD_SUCCESS
} from 'Constants/actionTypes'

import * as _ from 'lodash'

const INITIAL_STATE = { next: undefined, list: [], query: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POKEMON_LOAD_SUCCESS:
      return listPaginateFiltering(state, action)
    case POKEMON_LOAD_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

function listPaginateFiltering (state, action) {
  const { results } = action.payload.data
  state = { ...state, next: action.payload.data.next }
  state = state.query === action.query
    ? state
    : { ...state, list: [], query: action.query }

  state = results
    ? { ...state, list: _.uniqBy([...state.list, ...results], 'name') }
    : { ...state, list: action.payload.data.forms }

  return state
}
