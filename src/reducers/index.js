import { combineReducers } from 'redux'
import pokemon from './pokemon'
import fetchingPokemons from './fetchingPokemons'
import pokemonDetail from './pokemonDetail'

export default combineReducers({
  pokemon,
  pokemonDetail,
  fetchingPokemons
})
