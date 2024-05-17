import { Link } from 'react-router-dom'

function ImgCard() {
  return (
    <>
      <div className="flexbox-container">
        <div className="flexbox-item">
          <Link to="pokemon/pikachu">
            <img
              src="./images/pikachu.png"
              alt="Pikachu"
              className="pokemon-img"
            />
          </Link>
        </div>

        <div className="flexbox-item">
          <Link to="pokemon/snorlax">
            <img src="./images/snorlax.png" className="pokemon-img" />
          </Link>
        </div>

        <div className="flexbox-item">
          <Link to="pokemon/eevee">
            <img src="./images/eevee.png" className="pokemon-img" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default ImgCard
