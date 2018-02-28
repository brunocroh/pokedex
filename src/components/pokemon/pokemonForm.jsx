import React from 'react'

class PokemonForm extends React.Component {
  componentWillMount () {
    this.props.pokemonLoad()
    console.log(this.props.pokemons)
  }

  render () {
    return (
      <div>
        Pokemon Form
      </div>
    )
  }
}

export default PokemonForm
