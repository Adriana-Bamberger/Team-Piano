import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import InfoPage from './components/InfoPage'

const routes = createRoutesFromElements(
  <>
    <Route path="/" index element={<App />} />
    <Route path="/pokemon:name" element={<InfoPage />} />
  </>,
)
