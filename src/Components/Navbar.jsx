import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoNewspaperOutline } from "react-icons/io5";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IoIosLogOut } from "react-icons/io";
const Navbar = () => {
  const {user,logout}=useContext(AuthContext)
    const links=<>
    <NavLink className='p-2 font-semibold '  to={'/'}>Home</NavLink>
    <NavLink className='p-2 font-semibold'  to={'/addBlog'}>Add Blog</NavLink>
    <NavLink className='p-2 font-semibold'  to={'/allBlog'}>All Blog</NavLink>
    <NavLink className='p-2 font-semibold'  to={'/featureBlog'}>Feature Blog</NavLink>
    <NavLink className='p-2 font-semibold'  to={'/wishList'}>WishList</NavLink>

    </>
    const handleLogOut=()=>{
      logout()
      .then(()=>{
        console.log('user get outed')
      })
    }
    return (
        <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {
                links
             }
                {
                  user? <div className='flex mt-5 gap-3 items-center'>
                     <img data-reference='no-reference' className='w-14 rounded-full h-10 bg-cover ' src={user?.photoURL} alt={user.displayName} />
                     <button onClick={handleLogOut} className='btn btn-error btn-sm'>Logout <IoIosLogOut></IoIosLogOut> </button>
                  </div>:<div className="flex items-center gap-5">
                  <Link to={'/register'}>
                  <button className='underline hover:bg-[#a88c71] hover:rounded-lg px-3 py-2'>Register</button>
                  </Link>
               <Link to={'/login'}>
               <button className='btn border-none bg-[#a88c71]'>Login</button>
               </Link>
                </div>
                }
            </ul>
          </div>
        <Link to={'/'}>
        <p className="btn btn-ghost text-xl">E-Blogs 
          <IoNewspaperOutline />
          </p>
        </Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">
     {
        links
     }
          </ul>
        </div>
{
  user? <div className='navbar-end gap-5 items-center md:flex hidden'>
    <img data-reference='no-reference' className='w-12 rounded-full h-12 bg-cover ' src={user?.photoURL} alt={user.displayName} />
    <button onClick={handleLogOut} className='btn border-none bg-red-500/70'>Logout <IoIosLogOut className='text-xl'></IoIosLogOut></button>
  </div>:        <div className="navbar-end md:flex hidden  gap-5">
  <Link to={'/register'}>
  <button className='underline hover:bg-[#a88c71] hover:rounded-lg px-3 py-2'>Register</button>
  </Link>
<Link to={'/login'}>
<button className='btn bg-[#a88c71] border-none'>Login</button>
</Link>
</div>
}
      </div>
    );
};

export default Navbar;