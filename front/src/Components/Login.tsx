import React, { useContext, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import '../Style/style.scss'
import { Navigate, useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';


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
  console.log('login',result)
  
  if (result.message == "A problem occurred. "){
    // navigation("/");
    setError("wrong identification");
    return ;
  }
  else{
    user?.setUserState({id: result.data.id, email: result.data.email, connected: true})
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
    <div className="register">
      <div className="gif"></div>
      <div className="button">
          <div className="register-b">
          <button onClick={() => navigation('/Register')}>REGISTER</button>
          </div>
          <div className="login-b">
            <button>LOGIN</button>
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
    <div className="Login">
    <div className='formWrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" {...register("email", { required: true })} placeholder='email'/>
          <input type="password" {...register("password", { required: true })} placeholder='password'/>

          {/* <input type="submit" /> */}
          <button type="submit">Submit</button>
          <p>{error}</p>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login
