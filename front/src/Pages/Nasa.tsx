import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';
import Alert from '../Components/Alert';
import Add from '../Components/Add';


function Nasa() {

  let navigation = useNavigate();
  const [data, setData] = useState({ image: '', title: '', explanation: ''});
  const [hide, setHide] = useState(false);
  const user = useContext(userContext);
  const [alertGif, setAlertGif] = useState("gif")
  
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
    // user?.setUserState({id: 0, email: '', connected: false});
    localStorage.clear() 
    navigation('/')
  }

  const handleGif = (alert: any) => {
    setAlertGif(alert);
    setTimeout(()=>{
      setAlertGif('gif')
    },16000)
  }
  
  useEffect(()=>{
      handleData()
  }, [])


  return (
    <div className="container">
    <div className="header"></div>
    <div className="footer"></div>
    <div className="register">
      <div className={alertGif}></div>
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
          <button onClick={()=> navigation('/Galleries')}>GALLERIES</button>
          </div>
          <div className="nasaPod">
          <button>NASA POD</button>
          </div>
          <Alert changeGif={(alert : any) => handleGif(alert)} />
        <div className="alert3"><button></button></div>
      </div>
      <div className="col1"></div>
      <div className="col2"></div>
    </div>
    <div className="photo-nasa">
            <img src={data.image} alt={data.title} />
            <h2>{data.title}</h2>
            <p className='infos'>{hide ? data.explanation : null}</p>
            <Add data={data}/>
            <button onClick={()=> {!hide ? setHide(true) : setHide(false)} } >Infos</button>
    </div>
  </div>
  )
}

export default Nasa
