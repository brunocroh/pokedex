import React from 'react'
import styles from 'Main/App.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import pokemonDetail from './actions/pokemonDetail'

class PokemonDetail extends React.Component {
  async componentWillMount () {
    const url = this.props.location.state.url
    await this.props.pokemonDetail(url)
  }

  render () {
    return (
      <div className={styles.containerDetail}>
        <div className={styles.pokemonPhoto}>
          <img className={styles.itemCentralized} src={`images/pokemons/${this.props.pokemon.name}.png`} alt={this.props.pokemon.name} />
        </div>
        <div className={styles.pokemonExtras}>
          <span>{this.props.pokemon.name}</span>
        </div>
        <div className={styles.pokemonDetails}>
          <span>detalhes</span>
        </div>
        {console.log(this.props.pokemon)}
      </div>
    )
  }
}

const mapStateToProps = state => ({pokemon: state.pokemonDetail})
const mapDispatchToProps = dispatch => bindActionCreators({ pokemonDetail }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
