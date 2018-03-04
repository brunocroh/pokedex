import React from 'react'

import styles from 'Main/App.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'Template/Button'
import { pokemonLoad, pokemonLoadReplace } from './actions/pokemonLoad'

const pokemonFilter = props => {
  const onlyAdded = (e) => {
    props.pokemonLoadReplace(props.pokemons)
  }

  const allPokemons = (e) => {
    props.pokemonLoad()
  }

  return (
    <div>
      <div className={styles.containerFilter}>
        <Button label='Mostrar Apenas Pokemons Adicionados' style={styles.buttonRed} onClick={onlyAdded} />
        <Button label='Mostrar Todos os Pokemons' style={styles.buttonAdd} onClick={allPokemons} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({pokemons: state.pokemonsAdded.list})
const mapDispatchToProps = dispatch => bindActionCreators({ pokemonLoadReplace, pokemonLoad }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(pokemonFilter)
