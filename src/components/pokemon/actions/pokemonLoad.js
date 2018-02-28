import {
  POKEMON_LOAD_ERROR,
  POKEMON_LOAD_SUCCESS
} from 'Constants/actionTypes'

import axios from 'axios'

const pokemonLoadSuccess = (response) => {
  console.log({POKEMON_LOAD_SUCCESS})
  return {
    type: POKEMON_LOAD_SUCCESS,
    payload: response
  }
}

const pokemonLoadError = (err) => {
  console.log({POKEMON_LOAD_ERROR})
  return {
    type: POKEMON_LOAD_ERROR,
    payload: err
  }
}

const pokemonLoad = () => {
  return function (dispatch) {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => {
        dispatch(pokemonLoadSuccess(res))
      })
      .catch(err => {
        dispatch(pokemonLoadError(err))
      })
  }
}

export default pokemonLoad
