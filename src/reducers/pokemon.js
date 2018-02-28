import {
  POKEMON_LOAD_ERROR,
  POKEMON_LOAD_SUCCESS,
} from 'Constants/actionTypes'

export default (state = { }, action) => {
  switch (action.type) {
    case POKEMON_LOAD_SUCCESS:
      return { ...state, pokemons: action.payload.data.results }
    case POKEMON_LOAD_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
