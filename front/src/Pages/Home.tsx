import { useContext, useEffect, useState } from 'react'
import '../Style/style.scss'
import { Navigate, useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';
import Alert from '../Components/Alert';

function Home() {

  let navigation = useNavigate();
  const user = useContext(userContext);

  const [alertGif, setAlertGif] = useState("gif")

  const handleGif = (alert: any) => {
    setAlertGif(alert);
    setTimeout(()=>{
      setAlertGif('gif')
    },16000)
  }
   
  return (
   
    <div className="container">
    <div className="header"></div>
    <div className="footer"></div>
    <div className="register">
      <div className={alertGif}></div>
      <div className="button">
          <div className="register-b">
          {user?.userState.connected ?
          <button  onClick={() => navigation('/MyGal')}>MY GALLERY</button>
            :
          <button  onClick={() => navigation('/Register')}>REGISTER</button>
          }
          </div>
          <div className="login-b">
            {user?.userState.connected ?
            <button  onClick={() => user.setUserState({id: 0, email: '', connected: false})}> LOGOUT  </button>
            :
            <button  onClick={() => navigation('/Login')}> LOGIN  </button>
            
           }
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
          {user?.userState.connected ?
          <button onClick={() => navigation('/Galleries')}>GALLERIES</button>
          :
          <button >GALLERIES</button>
          }
          </div>
          <div className="nasaPod">
          {user?.userState.connected ?
          <button  onClick={() => navigation('/Nasa')}>NASA POD</button>
            :
          <button>NASA POD</button>
          }
          </div>
          <Alert changeGif={(alert : any) => handleGif(alert)} />
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