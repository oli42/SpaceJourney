import { useState } from 'react'
import { Route, Routes} from 'react-router';
import Home from './Home';
import Register from './Components/Register';
import Login from './Components/Login';
import MyGal from './Components/MyGal';
import Nasa from './Components/Nasa';


function App() {

  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />}/>
      <Route path="login" element={<Login />}/>
      <Route path="mygal" element={<MyGal />}/>
      <Route path="nasa" element={<Nasa />}/>
    </Routes>
  )
}

export default App
