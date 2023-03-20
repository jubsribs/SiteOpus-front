import { Route,Routes,Navigate} from 'react-router-dom'
import { Home } from '../screens/home'

export const AppRoutes = () => {

  return(
   
    <Routes>

      <Route
      path="/"
      element={< Home/>}
      />
    </Routes>
  )
}