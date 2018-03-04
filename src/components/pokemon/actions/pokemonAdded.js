import {
  POKEMON_ADD,
  POKEMON_REMOVE
} from 'Constants/actionTypes'

export const pokemonAdd = (pokemon) => {
  return {
    type: POKEMON_ADD,
    pokemon
  }
}

export const pokemonRemove = (pokemon) => {
  return {
    type: POKEMON_REMOVE,
    pokemon
  }
}
