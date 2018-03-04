import React from 'react'
import styles from 'Main/App.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'Template/Button'
import Loading from 'Template/Loading'

import pokemonLoad from './actions/pokemonLoad'

import PokemonSearch from './pokemonSearch'
import PokemonList from './pokemonList'

class Pokemon extends React.Component {
  componentWillMount () {
    this.props.pokemonLoad(this.props.next)
  }

  render () {
    let { pokemonLoad, pokemons, isFetching } = this.props

    if (isFetching & !pokemons.length) {
      return <Loading />
    }

    return (
      <div className={styles.rootContainer}>
        <PokemonSearch/>
        <PokemonList pokemons={pokemons}/>
        <Button style={styles.buttonBlue} onClick={() => pokemonLoad(this.props.next)} label='carregar mais'/>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    pokemons: state.pokemon.list,
    next: state.pokemon.next,
    isFetching: state.isFetching
  }
)
const mapDispatchToProps = dispatch => bindActionCreators({ pokemonLoad }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)
