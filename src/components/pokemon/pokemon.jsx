import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { pokemonAdd, pokemonRemove } from './actions/pokemonAdded'

import styles from 'Main/App.scss'

import Button from 'Template/Button'

const pokemon = props => {
  const { name, url, pokemonAdd, pokemonRemove } = props
  const { pokemonsAdded } = props.state

  const button = pokemonsAdded.list.find(p => p.name === name)
    ? <Button style={styles.buttonRemove} label='Remover Pokemon' onClick={() => pokemonRemove({name, url})}/>
    : <Button style={styles.buttonAdd} label='Adicionar Pokemon' onClick={() => pokemonAdd({name, url})}/>


  return (
    <div className={styles.pokemonCard}>
      <Link className={styles.gridContainer} to={{
        pathname: '/pokemon',
        state: { name, url }
      }}>
        <img className={styles.itemCentralized} src={`images/pokemons/${name}.png`} alt={name} />
        <span className={styles.itemCentralized} >{name}</span>
      </Link>
      {button}
    </div>
  )
}

const mapStateToProps = state => ({ state: state })
const mapDispatchToProps = dispatch => bindActionCreators({ pokemonAdd, pokemonRemove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(pokemon)
