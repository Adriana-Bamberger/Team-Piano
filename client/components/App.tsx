import { Outlet } from 'react-router-dom'
import ImgCard from './ImgCard.tsx'

function App() {
  return (
    <div
      className="app
    "
    >
      <img className="logo" src="../images/POKEMENU.png" />
      <Outlet />
    </div>
  )
}

export default App
