import {
  POKEMON_ADD,
  POKEMON_REMOVE
} from 'Constants/actionTypes'

export const pokemonAdd = (pokemon) => {
  return {
    type: POKEMON_ADD,
    payload: pokemon
  }
}

export const pokemonRemove = (err) => {
  return {
    type: POKEMON_REMOVE,
    payload: err
  }
}
