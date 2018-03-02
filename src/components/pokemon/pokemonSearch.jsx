import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import pokemonLoad from './actions/pokemonLoad.js'
import pokemonQuery from './actions/pokemonQuery.js'

const pokemonSearch = props => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      props.pokemonLoad(undefined, props.value)
    }
  }

  return (
    <div>
      <input type="text"
        onChange={props.pokemonQuery}
        value={props.value}
        onKeyPress={handleKeyPress}/>
    </div>
  )
}

const mapStateToProps = state => ({value: state.pokemon.query, next: state.pokemon.next})
const mapDispatchToProps = dispatch => bindActionCreators({ pokemonLoad, pokemonQuery }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(pokemonSearch)
