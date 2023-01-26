import { useState } from 'react'
import './Style/style.scss'
import { Navigate, useNavigate } from 'react-router-dom';

function Home() {

    let navigation = useNavigate();

   
  return (
   
    <div className="container">
    <div className="header"></div>
    <div className="footer"></div>
    <div className="register">
      <div className="gif"></div>
      <div className="button">
          <div className="register-b">
          <button  onClick={() => navigation('/Register')}>REGISTER</button>
          </div>
          <div className="login-b">
            <button  onClick={() => navigation('/Login')}>LOGIN</button>
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
          <button>NASA PIC OF THE DAY</button>
          </div>
        <div className="alert2">
          <button>ALERT</button>
        </div>
        <div className="alert3"><button></button></div>
      </div>
      <div className="col1"></div>
      <div className="col2"></div>
    </div>
    <div className="photo">
        <div className='title'>
        <h1>My Space Journey</h1>
        </div>
        <div className='buz'>
          <p>"That's one small step for man, one giant leap for mankind"</p>
        </div>
        </div>
  </div>
  )
}

export default Home