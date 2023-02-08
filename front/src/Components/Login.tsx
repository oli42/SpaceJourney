import React, { useContext, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import '../Style/style.scss'
import { Navigate, useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';
import NavBar from './NavBar';


type FormValues = {
  email: string;
  password: string;
};

function Login() {
  const { register, handleSubmit, getValues } = useForm<FormValues>();
  const [error, setError] = useState("");
  let navigation = useNavigate();
  const user = useContext(userContext);

  async function handleClick(infos: FormValues){

    let url: string = 'http://localhost:4000/login';
    const response = await fetch(url, { method: "POST",
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
  },
  body: JSON.stringify(infos)

  })
  const result = await response.json();
  
  if (result.message == "A problem occurred. "){
    setError("wrong identification");
    return ;
  }
  else{
    user?.setUserState({id: result.data.id, email: result.data.email, connected: true})
    localStorage.setItem('data', JSON.stringify(result.data.id));
    navigation('/');
  }
}
  
  const onSubmit: SubmitHandler<FormValues> = () =>{
    const  infos = getValues()
    handleClick(infos);

  }

  return (
    <div className="container">
    <div className="header"></div>
    <div className="footer"></div>
    <NavBar/>
    <div className="Login">
    <div className='formWrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
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

export default Login
