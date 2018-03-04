import React from 'react'

import styles from 'Main/App.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'Template/Button'
import pokemonLoad from './actions/pokemonLoad.js'

const pokemonFilter = props => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      props.pokemonLoad(undefined, e.target.value)
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <input type="text"
          className={styles.input}
          placeholder='Nome ou código'
          onKeyPress={handleKeyPress}/>
        <Button style={styles.buttonRed} icon='search' onClick={handleKeyPress} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({next: state.pokemon.next})
const mapDispatchToProps = dispatch => bindActionCreators({ pokemonLoad }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(pokemonSearch)
