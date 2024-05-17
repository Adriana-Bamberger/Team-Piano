// Imports
import React from 'react'
import { usePokemon } from '../apis/pokemon'
import { Link, useParams } from 'react-router-dom'
import { Pokemon } from '../../models/pokemon'

function Snorlax() {
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
    const snorlax = data[1]
    return (
      <div>
        <ul>
          <li>{snorlax.name}</li>
          <section>
            <h2>Stats:</h2>
            <p>Weight: 460kgs</p>
            <p>Protein: 20.1%</p>
            <p>Fat: 56%</p>
            <p>Calories: 740.6</p>
          </section>
        </ul>
        <Link to="/">Home Page</Link>
      </div>
    )
  }
}

export default Snorlax
