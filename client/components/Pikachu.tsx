// Imports
import { useFetchPokemon } from '../apis/pokemon'
import { useParams, Link } from 'react-router-dom'

function Pikachu() {
  const { name } = useParams()

  const { data, isLoading, isError } = useFetchPokemon(name)

  // const pokemonCharacter = data && data[]
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching Pokémon data</div>
  }

  if (data) {
    return (
      <div className="wrapping">
        <Link to="/">Home Page</Link>
        <h1>{name}</h1>
        <h2>Types: </h2>
        {data.types.map(({ type, slot }) => (
          <p key={slot}>{type.name}</p>
        ))}
        <img
          className="smallImg"
          src={data.sprites.front_default}
          alt={`Front Default Sprite for ${data.name}`}
        />
        <section>
          <h2>Abilities: </h2>
          {data.abilities.map(({ ability, slot }) => (
            <p key={slot}>{ability.name}</p>
          ))}
        </section>
        <section>
          <h2>Stats:</h2>
          <p>Weight: 100kgs</p>
          <p>Protein: 100g</p>
          <p>Fat: 100g</p>
          <p>Calories: 100</p>
          <p>
            <u>
              <b>good for gains fr</b>
            </u>
          </p>
        </section>
        <section>
          <h2>Moves: </h2>
          {data.moves.map(({ move }) => (
            <p className="container" key={move.name}>
              {move.name}
            </p>
          ))}
        </section>
      </div>
    )
  }
}

export default Pikachu
