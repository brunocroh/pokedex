import {
  POKEMON_LOAD_ERROR,
  POKEMON_LOAD_SUCCESS
} from 'Constants/actionTypes'

import axios from 'axios'

const pokemonLoadSuccess = (response) => {
  return {
    type: POKEMON_LOAD_SUCCESS,
    payload: response
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
    axios.get(`${uri}${query}`)
      .then(res => {
        dispatch(pokemonLoadSuccess(res))
      })
      .catch(err => {
        dispatch(pokemonLoadError(err))
      })
  }
}

export default pokemonLoad
