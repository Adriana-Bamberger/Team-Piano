// Imports
import React from 'react'
import { usePokemon } from '../apis/pokemon'
import { Link, useParams } from 'react-router-dom'
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
          <section>
            <h2>Stats:</h2>
            <p>Weight: 90kgs</p>
            <p>Protein: 30g</p>
            <p>Fat: 3g</p>
            <p>Calories: 540</p>
          </section>
        </ul>
        <Link to="/">Home Page</Link>
      </div>
    )
  }
}

export default Eevee
