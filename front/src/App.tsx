import { useState } from 'react'
import './style.scss'
import { Route, Routes} from 'react-router';
import Home from './Home';
import Register from './Components/Register';
import Login from './Components/Login';


function App() {

  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />}/>
      <Route path="login" element={<Login />}/>
    </Routes>
  )
}

export default App
