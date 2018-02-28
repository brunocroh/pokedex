import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Pokemon from './../components/pokemon'
import PokemonDetail from './../components/pokemon/pokemonDetail'

export default props => {
  return (
    <Switch>
      <Route exact path='/' component={Pokemon} />
      <Route path='/pokemon' component={PokemonDetail} />
    </Switch>
  )
}
