import {
  POKEMON_LOAD_ERROR,
  POKEMON_LOAD_SUCCESS
} from 'Constants/actionTypes'

export default (state = { next: undefined, list: [] }, action) => {
  switch (action.type) {
    case POKEMON_LOAD_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...action.payload.data.results],
        next: action.payload.data.next
      }
    case POKEMON_LOAD_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
