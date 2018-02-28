import React from 'react'
import { connect } from 'redux'
import { Link } from 'react-router-dom';

import pokemonDetail from './actions/pokemonDetail.js'

export default props => {

  return (
    <div>
      <Link to={{
        pathname: '/pokemon',
        state: { name: props.name, url: props.url }
      }} >
        {props.id}: {props.name}
      </Link>
    </div>
  )
}
