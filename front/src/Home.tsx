import { useState } from 'react'
import './style.scss'
import { Navigate, useNavigate } from 'react-router-dom';

function Home() {

    let navigation = useNavigate();

    const handleRegister = () => {
        navigation('/Register');
    }
    const handleLogin = () => {
        navigation('/Login');
    }
  return (
   
    <div className="container">
    <div className="header"><h1>My Space Journey</h1></div>
    <div className="footer"></div>
    <div className="register">
      <div className="gif"></div>
      <div className="button">
          <div className="register-b">
          <button onClick={handleRegister}>REGISTER</button>
          </div>
          <div className="login-b">
            <button onClick={handleLogin}>LOGIN</button>
          </div>
          <div className="alert">
            <div className='c1'></div>
            <div className='c2'></div>
            <div className='c3'></div>
            <div className='c4'></div>
            <div className='c5'></div>
            <div className='c6'></div>
            <div className='c7'></div>
            <div className='c8'></div>
            <div className='c9'></div>
          </div>
          <div className="topgallery">
          <button>TOP GALLERY</button>
          </div>
        <div className="alert2">
          <button>ALERT</button>
        </div>
        <div className="alert3"><button>« That’s one small step for man, one giant leap for mankind ».</button></div>
      </div>
      <div className="col1"></div>
      <div className="col2"></div>
    </div>
    <div className="photo"><p>Nasa pic of the day</p></div>
  </div>
  )
}

export default Home