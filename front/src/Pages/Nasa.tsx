import { useContext, useEffect, useState } from 'react'
import { userContext } from '../Context/userContext';
import Add from '../Components/Add';
import NavBar from '../Components/NavBar';


function Nasa() {

  const [data, setData] = useState({ image: '', title: '', explanation: ''});
  const [hide, setHide] = useState(false);
  const user = useContext(userContext);
  
  async function handleData(){
        const key = 'p9rD7ZTgD0AgYz29qAWpbas36swmMlw2cndTj87I';
      let url = `https://api.nasa.gov/planetary/apod?api_key=${key}` 
      const response  = await fetch(url, {method: "GET",
      headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
      }})
      const result = await response.json();
      setData({ image: result.url, title: result.title, explanation: result.explanation });
  }
  
  useEffect(()=>{
      handleData()
  }, [])

  return (
    <div className="container">
    <div className="header"></div>
    <div className="footer"></div>
    <NavBar/>
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
