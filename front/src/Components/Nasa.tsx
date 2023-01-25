import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  dotenv from 'dotenv'

function Nasa() {

  let navigation = useNavigate();
  const [data, setData] = useState({ image: '', title: '' });

  async function handleData(){
        const key = '';
      let url = `https://api.nasa.gov/planetary/apod?api_key=${key}` 
      const response  = await fetch(url, {method: "GET",
      headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
      }})
      const result = await response.json();
      console.log(result)

      setData({ image: result.url, title: result.title });
  }
  useEffect(()=>{
    handleData()
  }, [])

  return (
    <div className="container">
    <div className="header"></div>
    <div className="footer"></div>
    <div className="register">
      <div className="gif"></div>
      <div className="button">
          <div className="register-b2">
          <button onClick={()=> navigation('/MyGal')}>MY GALLERY</button>
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
          <div className="topgallery">
          <button>NASA GALLERY</button>
          </div>
        <div className="alert2">
          <button>ALERT</button>
        </div>
        <div className="alert3"><button></button></div>
      </div>
      <div className="col1"></div>
      <div className="col2"></div>
    </div>
    <div className="photo-nasa">
        {/* <div className='img'> */}
            <img src={data.image} alt={data.title} />
            <h2>{data.title}</h2>

        {/* </div> */}
    </div>
  </div>
  )
}

export default Nasa
