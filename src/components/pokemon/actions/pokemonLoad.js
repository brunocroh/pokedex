import {
  POKEMON_LOAD_ERROR,
  POKEMON_LOAD_SUCCESS,
  POKEMON_LOAD_REPLACE
} from 'Constants/actionTypes'

import { request, receive } from './fetching'

import axios from 'axios'

const pokemonLoadSuccess = (response, query) => {
  return {
    type: POKEMON_LOAD_SUCCESS,
    payload: response,
    query
  }
}

const pokemonLoadError = (err) => {
  return {
    type: POKEMON_LOAD_ERROR,
    payload: err
  }
}

export const pokemonLoadReplace = (pokemons) => {
  return {
    type: POKEMON_LOAD_REPLACE,
    query: POKEMON_LOAD_REPLACE,
    pokemons
  }
}

export const pokemonLoad = (
  uri = 'https://pokeapi.co/api/v2/pokemon/',
  query = ''
) => {
  return function (dispatch) {
    dispatch(request())
    axios.get(`${uri}${query}`)
      .then(res => {
        dispatch(pokemonLoadSuccess(res, query))
        dispatch(receive())
      })
      .catch(err => {
        console.log(err)
        pokemonLoad(uri, query)
      })
  }
}
