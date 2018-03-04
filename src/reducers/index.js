import { combineReducers } from 'redux'
import pokemon from './pokemon'
import pokemonsAdded from './pokemonsAdded'
import isFetching from './isFetching'
import pokemonDetail from './pokemonDetail'

export default combineReducers({
  pokemon,
  pokemonsAdded,
  pokemonDetail,
  isFetching
})
