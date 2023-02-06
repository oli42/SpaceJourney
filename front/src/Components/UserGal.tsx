import { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { userContext } from '../Context/userContext';
import Alert from './Alert';
import { useLocation } from "react-router-dom";

interface Pic {
  url: string, 
  title: string,
  explanation: string,
}

function UserGal() {

  let navigation = useNavigate();
  const [data, setData] = useState<Pic[]>()
  const [hide, setHide] = useState(false);
  const user = useContext(userContext);
  const [alertGif, setAlertGif] = useState("gif")
  const location = useLocation();
  let galId = location.state.userId;


  async function handleGetPics() {
    let url: string = `http://localhost:4000/userPics/${galId}`;
    const response = await fetch(url, { method: "GET",
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }
  })
  const result = await response.json();
  setData(result.data)
}

const handleLogOut = () =>{
  user?.setUserState({id: 0, email: '', connected: false});
  navigation('/')
}

const handleGif = (alert: any) => {
  setAlertGif(alert);
  setTimeout(()=>{
    setAlertGif('gif')
  },16000)
}

  useEffect(()=>{
    handleGetPics();
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
          <button onClick={() => navigation('/Nasa')}>NASA POD</button>
          </div>
          <Alert changeGif={(alert : any) => handleGif(alert)} />
        <div className="alert3"><button></button></div>
      </div>
      <div className="col1"></div>
      <div className="col2"></div>
    </div>
    <div className="userGal">
      <Swiper 
        modules={[Navigation, EffectFade]}
        navigation
        // effect='fade'
        speed={100}
        slidesPerView={1}
        loop
        className='userGal'
        >
          {data?.map((item, index) => (
            <SwiperSlide key = {index}>
            <img src={item.url} alt={''}/>
            <h2>{item.title}</h2> 
              <p className='infos'>{hide ? item.explanation : null}</p>
            <button onClick={()=> {!hide ? setHide(true) : setHide(false)} } >Infos</button>
            </SwiperSlide>
          )) }
      </Swiper>
    </div>
  </div>
  )
}

export default UserGal
