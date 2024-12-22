import Lottie from "lottie-react";
import registerLottie from '../assets/RegisterLottie.json'
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const Register = () => {
    const {registerWithGoogle,signUpWithEmail,updateAuthData}=useContext(AuthContext)
    const [showPass,setShowPass]=useState(false)
const handleGoogleRegister=()=>{
registerWithGoogle()
.then(result=> {
    console.log(result.user)
})
.catch(err=> console.log(err))
}
    const handleSubmit=(e)=>{
e.preventDefault()
const form = e.target 
const username = form.name.value 
const password = form.password.value 
const photo = form.photo.value 
const email = form.email.value 
signUpWithEmail(email,password)
.then(result=>{
  console.log(result.user)
  updateAuthData(username,photo)
  .then(()=>{
    console.log('profile updated')
  })
})
.catch(err=> console.log(err))
    }
    return (
        <div className='flex md:flex-row-reverse flex-col'>
      <div className='md:w-1/2 md:h-[500px]'>
<Lottie animationData={registerLottie} loop={true}></Lottie>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 mt-20 shadow-2xl mx-auto ">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
          <button className="btn btn-primary">Register</button>
        </div>
        <div className='divider'>Or</div>
        <div className='  flex justify-center text-center mx-auto'>
<button onClick={handleGoogleRegister} className='flex gap-2 items-center btn btn-outline w-full text-center'><FaGoogle></FaGoogle> Register with google</button>
            </div>
            <p>Already have an account ? <Link className='underline' to={'/login'}>Login</Link></p>
      </form>
    </div>
        </div>
    );
};

export default Register;