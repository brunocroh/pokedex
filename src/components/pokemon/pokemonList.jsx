import React from 'react'

import Pokemon from './pokemon'

export default props => {
  const renderPokemons = () => {
    const pokemons = props.pokemons || []
    console.log({pokemons})
    return pokemons.map(poke => (
      <Pokemon
        key={poke.name}
        name={poke.name}
        url={poke.url}/>
    ))
  }

  return (
    <div>
      {renderPokemons()}
    </div>
  )
}
