import { useState } from 'react'
import { Route, Routes} from 'react-router';
import Home from './Pages/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import MyGal from './Pages/MyGal';
import Nasa from './Pages/Nasa';
import { userContext } from './Context/userContext'
import Galleries from './Pages/Galleries';
import UserGal from './Components/UserGal';


function App() {

  const [userState, setUserState] = useState({id: 0, email: '', connected: false})

  return (
   
    <userContext.Provider value={{userState, setUserState}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>
        <Route path="mygal" element={<MyGal />}/>
        <Route path="nasa" element={<Nasa />}/>
        <Route path="galleries" element={<Galleries />}/>
        <Route path="usergal" element={<UserGal />}/>
      </Routes>
    </userContext.Provider>
  )
}

export default App
