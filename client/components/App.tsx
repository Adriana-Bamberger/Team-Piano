import { Outlet } from 'react-router-dom'
import ImgCard from './ImgCard.tsx'

function App() {
  return (
    <div
      className="app
    "
    >
      <h1>PokeMenu</h1>
      <p>Choose your starter ingredients</p>
      <Outlet />
    </div>
  )
}

export default App
