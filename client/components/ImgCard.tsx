import { Link } from 'react-router-dom'

function ImgCard() {
  return (
    <>
      <p>Choose your Pokémon!</p>
      <body></body>
      <div className="flexbox-container">
        <div className="flexbox-item">
          <Link to="pokemon/pikachu">
            <img className="cards" src="./images/pikachu.png" alt="Pikachu" />
          </Link>
        </div>

        <div className="flexbox-item">
          <Link to="pokemon/snorlax">
            <img className="cards" src="./images/snorlax.png" />
          </Link>
        </div>

        <div className="flexbox-item">
          <Link to="pokemon/eevee">
            <img className="cards" src="./images/eevee.png" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default ImgCard
