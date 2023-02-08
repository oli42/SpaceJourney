import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import NavBar from '../Components/NavBar';

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

    useEffect(() => {
        handleUsers()
    }, [])

  return (
    <div className="container">
    <div className="header"></div>
    <div className="footer"></div>
    <NavBar/>
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
        { userList?.map((item, index) => (
        <SwiperSlide key = {index}>
            <div className='galleries' key = {index}>
            <p>{item.firstName}'s gallery</p>
            {/* <p>Lastname: {item.lastName.charAt(0)}... </p> */}
              <p>Nbr of pics: {item.nbrPics} </p>
              <button onClick={()=> handleSelect(item.id)}>view</button>
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