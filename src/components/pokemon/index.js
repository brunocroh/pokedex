import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import pokemonLoad from './actions/pokemonLoad'
import pokemonDetail from './actions/pokemonDetail'
import PokemonList from './pokemonList.jsx'

class Pokemon extends React.Component {
  componentWillMount () {
    this.props.pokemonLoad()
  }

  render () {
    return (
      <div>
        <PokemonList pokemons={this.props.pokemons} getDetail={pokemonDetail}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({pokemons: state.pokemon.pokemons})
const mapDispatchToProps = dispatch => bindActionCreators({ pokemonLoad, pokemonDetail }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)
