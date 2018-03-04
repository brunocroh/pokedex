import React from 'react'
import styles from 'Main/App.scss'
import { connect } from 'redux'
import { Link } from 'react-router-dom'


export default props => {
  return (
    <div className={styles.pokemonCard}>
      <Link className={styles.gridContainer} to={{
        pathname: '/pokemon',
        state: { name: props.name, url: props.url }
      }}>
        <img className={styles.itemCentralized} src={`images/pokemons/${props.name}.png`} alt={props.name} />
        <span className={styles.itemCentralized} >{props.name}</span>
      </Link>
    </div>
  )
}
