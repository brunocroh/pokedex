import { combineReducers } from 'redux'
import pokemon from './pokemon'
import pokemonDetail from './pokemonDetail'

export default combineReducers({
  pokemon,
  pokemonDetail
})
