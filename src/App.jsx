import './styles/Principal.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Auth from './layout/Auth'
import Login from './paginas/Login'
import { LandinPage } from './paginas/LandinPage'
import { Register } from './paginas/Register'
import { Forgot } from './paginas/Forgot'
import { NotFound } from './paginas/NotFound'
import { Confirmar } from './paginas/Confirmar'
import Restablecer from './paginas/Restablecer_password'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        ////<Route index element={<LandinPage/>}/>
        <Route path='/' element={<Auth/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='forgot/:id' element={<Forgot/>}/>
          <Route path='confirmar/:token' element={<Confirmar/>}/>
          <Route path='recuperar-password/:token' element={<Restablecer/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
