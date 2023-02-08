import React, { useContext, useState } from 'react';
import Alert from './Alert';
import { useNavigate } from 'react-router';
import { userContext } from '../Context/userContext';

const NavBar = () => {

    let navigation = useNavigate();
    const user = useContext(userContext);

    const [alertGif, setAlertGif] = useState("gif")

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
    return (
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
            <button  onClick={handleLogOut}> LOGOUT  </button>
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
    );
};

export default NavBar;