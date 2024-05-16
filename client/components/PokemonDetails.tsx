// Imports
import React from 'react'
import { usePokemon } from '../apis/pokemon'
import { useParams } from 'react-router-dom'

function PokemonDetails() {
  const { name } = useParams
  const { data, isLoading, isError } = usePokemon()
  const pokemonCharacter = data && data[name as string]
  console.log(data)
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching Pokémon data</div>
  }

  if (data && pokemonCharacter)
    return (
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    )
}

export default PokemonDetails
