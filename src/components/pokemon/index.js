import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'Template/button.jsx'

import pokemonLoad from './actions/pokemonLoad.js'

import PokemonSearch from './pokemonSearch.jsx'
import PokemonList from './pokemonList.jsx'

class Pokemon extends React.Component {
  componentWillMount () {
    this.props.pokemonLoad(this.props.next)
  }

  render () {
    return (
      <div>
        <PokemonSearch/>
        <PokemonList pokemons={this.props.pokemons}/>
        <Button onClick={() => this.props.pokemonLoad(this.props.next)} label='carregar mais'/>
      </div>
    )
  }
}

const mapStateToProps = state => ({pokemons: state.pokemon.list, next: state.pokemon.next})
const mapDispatchToProps = dispatch => bindActionCreators({ pokemonLoad }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)
