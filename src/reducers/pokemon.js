import {
  POKEMON_LOAD_ERROR,
  POKEMON_LOAD_SUCCESS,
  POKEMON_QUERY
} from 'Constants/actionTypes'

const INITIAL_STATE = { next: undefined, list: [], query: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POKEMON_LOAD_SUCCESS:
      const { results } = action.payload.data
      return {
        ...state,
        list: results
          ? [action.payload.data]
          : action.payload.data.results,
        next: action.payload.data.next
      }
    case POKEMON_LOAD_ERROR:
      return { ...state, error: action.payload }
    case POKEMON_QUERY:
      return { ...state, query: action.query }
    default:
      return state
  }
}
