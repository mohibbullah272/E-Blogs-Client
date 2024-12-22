import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import loginLottie from '../assets/loginLottie.json'
const Login = () => {
     const [showPass,setShowPass]=useState(false)

     const handleSubmit=(e)=>{
      e.preventDefault()
      const form = e.target 
      const email = form.email.value 
      const password = form.password.value 
      console.table({email,password})
     }
    return (
        <div className='flex md:flex-row-reverse flex-col'>
      <div className='md:w-1/2 md:h-[500px]'>
<Lottie animationData={loginLottie} loop={true}></Lottie>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 mt-20 shadow-2xl mx-auto ">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
         <div className="form-control relative">
                 <label className="label">
                   <span className="label-text">Password</span>
                 </label>
                 <input type={`${showPass?'text':'password'}`} name="password" placeholder="password" className="input input-bordered" required />
               <div onClick={()=>setShowPass(!showPass)} className="absolute top-14 right-4">
                   {
                       showPass?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                   }
               </div>
               </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className='divider'>Or</div>
        <div className='  flex justify-center text-center mx-auto'>
<button className='flex gap-2 items-center btn btn-outline w-full text-center'><FaGoogle></FaGoogle> login with google</button>
            </div>
      </form>
    </div>
        </div>
    );
};

export default Login;