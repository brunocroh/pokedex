import React from 'react'

class PokemonDetail extends React.Component {
  render () {
    return (
      <div>
        Pokemon Detail
        {console.log(this.props)}
      </div>
    )
  }
}

export default PokemonDetail
