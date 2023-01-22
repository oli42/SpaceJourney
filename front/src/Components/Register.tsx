import React from 'react'
import { Form } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};
function Register() {

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
  return (
    <div className="container">
    <div className="header"><h1>My Space Journey</h1></div>
    <div className="footer"></div>
    <div className="register">
      <div className="gif"></div>
      <div className="button">
          <div className="register-b">
          <button>REGISTER</button>
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
          <div className="topgallery">
          <button>TOP GALLERY</button>
          </div>
        <div className="alert2">
          <button>ALERT</button>
        </div>
        <div className="alert3"><button>« That's one small step for man, one giant leap for mankind ».</button></div>
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

          {/* <input type="submit" /> */}
          {/* <button>Submit</button> */}
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register
