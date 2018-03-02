import { POKEMON_QUERY } from 'Constants/actionTypes'

export default function pokemonQuery (e) {
  return {
    type: POKEMON_QUERY,
    query: e.target.value
  }
}
