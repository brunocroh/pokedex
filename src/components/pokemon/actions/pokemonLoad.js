import {
  POKEMON_LOAD_ERROR,
  POKEMON_LOAD_SUCCESS,
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS
} from 'Constants/actionTypes'

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

const pokemonLoad = (
  uri = 'https://pokeapi.co/api/v2/pokemon/',
  query = ''
) => {
  return function (dispatch) {
    dispatch(requestPokemons())
    axios.get(`${uri}${query}`)
      .then(res => {
        dispatch(pokemonLoadSuccess(res, query))
        receivePokemons()
      })
      .catch(err => {
        dispatch(pokemonLoadError(err))
      })
  }
}

const requestPokemons = () => {
  return {
    type: REQUEST_POKEMONS
  }
}

const receivePokemons = () => {
  return {
    type: RECEIVE_POKEMONS
  }
}

export default pokemonLoad
