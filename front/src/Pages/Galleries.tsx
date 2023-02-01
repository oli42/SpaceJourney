import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';
import Alert from '../Components/Alert';

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

function Galleries() {

    let navigation = useNavigate();
    const [data, setData] = useState<Pic[]>()
    const [userList, setUserList] = useState<User[]>()
    const [userPics, setUserPics] = useState<Pic[]>()
    const [hide, setHide] = useState(false);
    const user = useContext(userContext);
    const [alertGif, setAlertGif] = useState("gif")
    let value = user?.userState.id;


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
      console.log(result)
    }

    async function handleDeletePic(item: Pic) {
        let url: string = 'http://localhost:4000/deletePic';
        const response = await fetch(url, { method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
      body: JSON.stringify({
        title: item.title,
        UserId: user?.userState.id,
      })
      })
      const result = await response.json();
      }
    
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
        <h2>Users</h2>
        {userList?.map((item, index) => (
            <div key = {index}>
            <p>Firstname: {item.firstName}<p>
            </p>Lastname: {item.lastName.charAt(0)}... </p>
            <p>Nbr of pics: {item.nbrPics} </p>
            <p>Last pic: <img src={item.lastUrl}/></p>
            </div>
        )) }
    </div>
    </div>
  )
}

export default Galleries