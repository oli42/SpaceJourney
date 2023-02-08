import { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { userContext } from '../Context/userContext';
import Delete from '../Components/Delete';
import NavBar from '../Components/NavBar';

interface Pic {
  url: string, 
  title: string,
  explanation: string,
}

function MyGal() {

  const [data, setData] = useState<Pic[]>()
  const [hide, setHide] = useState(false);
  const user = localStorage.getItem('data');
  let value = user;

  async function handleGetPics() {
    let url: string = `http://localhost:4000/userPics/${value}`;
    const response = await fetch(url, { method: "GET",
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }
  })
  const result = await response.json();
  setData(result.data)
}

  useEffect(()=>{
    handleGetPics();
  }, [])

  return (
    <div className="container">
    <div className="header"></div>
    <div className="footer"></div>
    <NavBar/>
    <div className="myGal">
      <Swiper 
        modules={[Navigation, EffectFade]}
        navigation
        // effect='fade'
        speed={100}
        slidesPerView={1}
        loop
        className='myGal'
        >
          {data?.map((item, index) => (
            <SwiperSlide key = {index}>
              <img src={item.url} alt={''}/>
              <h2>{item.title}</h2> 
              <p className='infos'>{hide ? item.explanation : null}</p>
              <Delete data={item}/>
              <button onClick={()=> {!hide ? setHide(true) : setHide(false)} } >Infos</button>
            </SwiperSlide>
          )) }
      </Swiper>
    </div>
  </div>
  )
}

export default MyGal
