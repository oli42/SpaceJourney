import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';
import Alert from '../Components/Alert';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import UserGal from '../Components/UserGal';

interface Pic {
  url: string, 
  title: string,
  explanation: string,
 
}

interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    nbrPics: number,
    lastUrl: string,
}

interface navigationProps {
  id: number
}

function Galleries() {

    let navigation = useNavigate();
    const [userList, setUserList] = useState<User[]>()
    const user = useContext(userContext);
    // const user = localStorage.getItem('data');

    const [alertGif, setAlertGif] = useState("gif")
    let value = user;


    async function handleUsers() {
        let url: string = 'http://localhost:4000/users';
        const response = await fetch(url, { method: "GET",
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      }
      })
      const result = await response.json();
      setUserList(result.data)
    }

    const handleSelect = (id: number) => {
      navigation('/UserGal', {
        state: {
          userId: id,
        }
      });
    };
    
    const handleLogOut = () =>{
      user?.setUserState({id: 0, email: '', connected: false});
      localStorage.clear() 

      navigation('/')
    }
    
    const handleGif = (alert: any) => {
      setAlertGif(alert);
      setTimeout(()=>{
        setAlertGif('gif')
      },16000)
    }

    useEffect(() => {
        handleUsers()
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
          <button>GALLERIES</button>
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
    <div className="galleries">
        <Swiper 
        modules={[Navigation, EffectFade]}
        navigation
        // effect='fade'
        speed={100}
        spaceBetween={-110}
        slidesPerView={2}
        loop
        className='galleries'
       
        >
        {userList?.map((item, index) => (
        <SwiperSlide key = {index}>
            <div className='galleries' key = {index}>
            <p>{item.firstName}'s gallery</p>
            {/* <p>Lastname: {item.lastName.charAt(0)}... </p> */}
              <p>Nbr of pics: {item.nbrPics} </p>
              <button onClick={()=> handleSelect(item.id)}>open</button>
              <img src={item.lastUrl}/>
            </div>
        </SwiperSlide>
        )) }
        </Swiper>
    </div>
    </div>
  )
}

export default Galleries