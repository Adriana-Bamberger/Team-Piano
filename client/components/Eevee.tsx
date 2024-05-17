// Imports
import React from 'react'
import { usePokemon } from '../apis/pokemon'
import { useParams } from 'react-router-dom'
import { Pokemon } from '../../models/pokemon'

function Eevee() {
  // const { name } = useParams
  const { data, isLoading, isError } = usePokemon()
  // const pokemonCharacter = data && data[]
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching Pokémon data</div>
  }

  if (data) {
    const eevee = data[2]
    return (
      <div>
        <ul>
          <li>{eevee.name}</li>
        </ul>
      </div>
    )
  }
}

export default Eevee
