import React from 'react'
import Loading from 'Template/Loading'
import { connect } from 'react-redux'
import styles from 'Main/App.scss'

import Pokemon from './pokemon'

const pokemonList = props => {
  const renderPokemons = () => {
    const pokemons = props.pokemons || []
    return pokemons.map(poke => (
      <Pokemon
        key={poke.name}
        name={poke.name}
        url={poke.url}/>
    ))
  }

  const loading = () => {
    const { isFetching } = props

    if (isFetching) {
      return <Loading />
    }
  }


  return (
    <div className={styles.gridPokemons}>
      { loading() }
      { renderPokemons() }
    </div>
  )
}

const mapStateToProps = state => (
  {
    isFetching: state.isFetching
  }
)

export default connect(mapStateToProps)(pokemonList)
