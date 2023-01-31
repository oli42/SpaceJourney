import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  dotenv from 'dotenv'
import { userContext } from '../Context/userContext';


function Nasa() {

  let navigation = useNavigate();
  const [data, setData] = useState({ image: '', title: '', explanation: ''});
  const [hide, setHide] = useState(false);
  const user = useContext(userContext);


  async function handleSavePic() {
    let url: string = 'http://localhost:4000/createPic';
    const response = await fetch(url, { method: "POST",
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
  },
  body: JSON.stringify({
    url: data.image,
    title: data.title,
    explanation: data.explanation,
    UserId: user?.userState.id,
  })
  })
  const result = await response.json();
  }
  
  async function handleData(){
        const key = '';
      let url = `https://api.nasa.gov/planetary/apod?api_key=${key}` 
      const response  = await fetch(url, {method: "GET",
      headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
      }})
      const result = await response.json();
      setData({ image: result.url, title: result.title, explanation: result.explanation });
  }

  const handleLogOut = () =>{
    user?.setUserState({id: 0, email: '', connected: false});
    navigation('/')
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
            <button onClick={handleLogOut}>LOGOUT</button>
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
          <button>GALLERIES</button>
          </div>
          <div className="nasaPod">
          <button>NASA POD</button>
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
            <img src={data.image} alt={data.title} />
            <h2>{data.title}</h2>
            <p className='infos'>{hide ? data.explanation : null}</p>
            <button onClick={()=> handleSavePic()}>Add to My Gallery</button>
            <button onClick={()=> {!hide ? setHide(true) : setHide(false)} } >Infos</button>
    </div>
  </div>
  )
}

export default Nasa
