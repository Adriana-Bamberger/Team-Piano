import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
// import PokemonDetails from './components/PokemonDetails'
import App from './components/App'
import ImgCard from './components/ImgCard'
import Pikachu from './components/Pikachu'
import Snorlax from './components/Snorlax'
import Eevee from './components/Eevee'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<ImgCard />} />
    <Route path="pokemon/:name" element={<Pikachu />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
