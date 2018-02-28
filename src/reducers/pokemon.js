import {
  POKEMON_LOAD_ERROR,
  POKEMON_LOAD_SUCCESS,
  POKEMON_DETAIL_ERROR,
  POKEMON_DETAIL_SUCCESS
} from 'Constants/actionTypes'

export default (state = { }, action) => {
  switch (action.type) {
    case POKEMON_LOAD_SUCCESS:
      return { ...state, pokemons: action.payload.data.results }
    case POKEMON_LOAD_ERROR:
      return { ...state, error: action.payload }
    case POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        pokemons: state.pokemon.pokemons.map(
          (c, i) => c.name === action.payload.data.results.name
            ? { ...c, ...action.payload.data.results }
            : c
        )
      }
    case POKEMON_DETAIL_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
