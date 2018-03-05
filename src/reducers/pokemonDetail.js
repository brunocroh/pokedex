import {
  POKEMON_DETAIL_ERROR,
  POKEMON_DETAIL_SUCCESS
} from 'Constants/actionTypes'

export default (state = null, action) => {
  switch (action.type) {
    case POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        ...action.payload.data
      }
    case POKEMON_DETAIL_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
