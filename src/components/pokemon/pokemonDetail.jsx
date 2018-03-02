import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { pokemonDetail } from './actions'

class PokemonDetail extends React.Component {
  componentWillMount () {
    const url = this.props.location.state.url
    this.props.pokemonDetail(url)
  }

  render () {
    return (
      <div>
        Pokemon Detail
        {console.log(this.props.pokemon)}
      </div>
    )
  }
}

const mapStateToProps = state => ({pokemon: state.pokemonDetail})
const mapDispatchToProps = dispatch => bindActionCreators({ pokemonDetail }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
