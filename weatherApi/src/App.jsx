import './App.css'
import UserData from "./pages/UserData"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom" 
import Weather from './pages/WeaTher'
import Home from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/users' element={<UserData/>}/>
          <Route path="weather" element={<Weather/>}/>
        </Routes>
      </BrowserRouter>  
      
    
    </>
  )
}

export default App
