import React, { useContext, useState } from 'react'
import { Form } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import '../Style/style.scss'
import { Navigate, useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';


type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function Register() {

  const { register, handleSubmit, getValues } = useForm<FormValues>();
  let navigation = useNavigate();
  const user = useContext(userContext);
  const [error, setError] = useState("");




  async function handleClick(infos: FormValues){

    let url: string = 'http://localhost:4000/createUser';
    const response = await fetch(url, { method: "POST",
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
  },
  body: JSON.stringify(infos)
  })
  const result = await response.json();
  console.log(result)
  if (result.message == "This user already exists"){
    setError("This user already exists");
    return
  }
  else{
    navigation('/');
  }
}

async function handleLogin(infos: FormValues){

  let url_: string = 'http://localhost:4000/login';
  const response_ = await fetch(url_, { method: "POST",
  headers: {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin' : '*'
  },
  body: JSON.stringify(infos)
  }) 
  const result_ = await response_.json();

  user?.setUserState({id: result_.data.id, email: result_.data.email, connected: true})

}
  

  const onSubmit: SubmitHandler<FormValues> = () =>{
    const  infos = getValues()
    const copy = infos;
    console.log(infos)
    handleClick(infos);
    // handleLogin(infos)

  }
    
  return (
    <div className="container">
    <div className="header"></div>
    <div className="footer"></div>
    <div className="register">
      <div className="gif"></div>
      <div className="button">
          <div className="register-b">
          <button>REGISTER</button>
          </div>
          <div className="login-b">
            <button onClick={()=> navigation('/Login')}>LOGIN</button>
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
    <div className="Register">
      <div className='formWrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName", { required: true })} placeholder='firstname' />
          <input {...register("lastName", { required: true })} placeholder='lastName'/>
          <input type="email" {...register("email", { required: true })} placeholder='email'/>
          <input type="password" {...register("password", { required: true })} placeholder='password'/>
          <button type="submit">Submit</button>
          <p>{error}</p>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register
