import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function MyGal() {
  let navigation = useNavigate();

  return (
    <div className="container">
    <div className="header"></div>
    <div className="footer"></div>
    <div className="register">
      <div className="gif"></div>
      <div className="button">
          <div className="register-b2">
          <button>MY GALLERY</button>
          </div>
          <div className="login-b2">
            <button>LOGOUT</button>
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
          <div className='topgallery'>
          <button>TOP GALLERY</button>
          </div>
          <div className="nasaPod">
          <button onClick={() => navigation('/Nasa')}>NASA POD</button>
          </div>
        <div className="alert2">
          <button>ALERT</button>
        </div>
        <div className="alert3"><button></button></div>
      </div>
      <div className="col1"></div>
      <div className="col2"></div>
    </div>
    <div className="Login"></div>
  </div>
  )
}

export default MyGal
