import React from 'react'
import styles from 'Main/App.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Loading from 'Template/Loading'

import pokemonDetail from './actions/pokemonDetail'

class PokemonDetail extends React.Component {
  componentWillMount () {
    const url = this.props.location.state.url
    this.props.pokemonDetail(url)
  }

  renderStats (pokemon) {
    return pokemon.stats.map(s => (
      <span key={s.stat.name} className={styles.stat} >{s.stat.name} : {s.base_stat}</span>
    ))
  }

  renderAbilities (pokemon) {
    return pokemon.abilities.map(a => (
      <span key={a.ability.name} className={styles.ability} >{a.ability.name}</span>
    ))
  }

  renderTypes (pokemon) {
    return pokemon.types
      .sort((a, b) => a.slot - b.slot)
      .map(t => (
        <span key={t.type.name} className={styles.type} >{t.type.name}</span>
      ))
  }

  renderProperties (pokemon) {
    return (
      <div>
        <span className={styles.propertie}>Height: {pokemon.height / 10} m</span>
        <span className={styles.propertie}>Weight: {pokemon.weight / 10} kg</span>
      </div>
    )
  }

  render () {
    const { pokemon, isFetching } = this.props

    if (isFetching) {
      return <Loading />
    }

    return (
      <div className={styles.containerDetail}>
        <div className={styles.title}>
          <h2>{pokemon.name}</h2>
        </div>
        <div className={styles.pokemonPhoto}>
          <img className={styles.itemCentralized} src={`images/pokemons/${pokemon.name}.png`} alt={pokemon.name} />
        </div>
        <div className={styles.pokemonDetails}>
          {this.renderStats(pokemon)}
        </div>
        <div className={styles.pokemonExtras}>
          {this.renderProperties(pokemon)}
        </div>
        <div className={styles.pokemonAblities}>
          {this.renderAbilities(pokemon)}
        </div>
        <div className={styles.pokemonTypes}>
          {this.renderTypes(pokemon)}
        </div>
        {console.log(pokemon)}
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    pokemon: state.pokemonDetail,
    isFetching: state.isFetching
  }
)
const mapDispatchToProps = dispatch => bindActionCreators({ pokemonDetail }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
