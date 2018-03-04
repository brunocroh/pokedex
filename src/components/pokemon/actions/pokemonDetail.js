import {
  POKEMON_DETAIL_ERROR,
  POKEMON_DETAIL_SUCCESS
} from 'Constants/actionTypes'

import { request, receive } from './fetching'

import axios from 'axios'

const pokemonDetailSuccess = (response) => {
  return {
    type: POKEMON_DETAIL_SUCCESS,
    payload: response
  }
}

const pokemonDetailError = (err) => {
  return {
    type: POKEMON_DETAIL_ERROR,
    payload: err
  }
}

const pokemonDetail = (url) => {
  return function (dispatch) {
    dispatch(request())
    axios.get(url)
      .then(res => {
        dispatch(pokemonDetailSuccess(res))
        dispatch(receive())
      })
      .catch(err => {
        dispatch(pokemonDetailError(err))
      })
  }
}

export default pokemonDetail
