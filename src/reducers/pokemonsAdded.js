import {
  POKEMON_ADD,
  POKEMON_REMOVE
} from 'Constants/actionTypes'

import * as _ from 'lodash'

const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POKEMON_ADD:
      return {
        ...state,
        list: _.uniqBy([...state.list, action.pokemon])
      }
    case POKEMON_REMOVE:
      return {
        ...state,
        list: state.list
          .filter(i => i.name !== action.pokemon.name)
      }
    default:
      return state
  }
}
