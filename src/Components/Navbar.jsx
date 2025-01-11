import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoNewspaperOutline } from "react-icons/io5";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IoIosLogOut } from "react-icons/io";
const Navbar = () => {
  const {user,logout}=useContext(AuthContext)
    const links=<>
    <NavLink className='p-2 font-semibold '  to={'/'}>Home</NavLink>
   {
    user &&  <NavLink className='p-2 font-semibold'  to={'/addBlog'}>Add Blog</NavLink>
   }
    <NavLink className='p-2 font-semibold'  to={'/allBlog'}>All Blog</NavLink>
    <NavLink className='p-2 font-semibold'  to={'/featureBlog'}>Feature Blog</NavLink>
  <NavLink className='p-2 font-semibold' to={'/policy'}>Privacy Policy</NavLink>
  {
    !user && <NavLink to={'/support'} className='p-2 lg:flex hidden font-semibold'>Support</NavLink>
  }

    </>
    const handleLogOut=()=>{
      logout()
      .then(()=>{
        // console.log('user get outed')
      })
    }
    return (
      <div className="navbar bg-white/90 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        {/* Navbar Start */}
        <div className="flex items-center gap-4">
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost"
              role="button"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  mt-3 w-52 p-2 shadow"
            >
              {links}
              <NavLink to={'/support'} className='p-2 font-semibold md:hidden flex'>Support</NavLink>
              {
                user && <>
                <NavLink to={'/myPost'} className='p-2 md:hidden flex font-semibold'>My Profile</NavLink>
                 <NavLink className='p-2 font-semibold'  to={'/wishList'}>WishList</NavLink>
                </>
              }
             
              {user ? (
                <div className="flex mt-5 gap-3 items-center">
                  <img
                    className="w-14 h-10 rounded-full bg-cover"
                    src={user?.photoURL}
                    alt={user?.displayName}
                  />
                  <button
                    onClick={handleLogOut}
                    className="btn btn-error btn-sm"
                  >
                    Logout <IoIosLogOut />
                  </button>
                </div>
              ) : (
                <div className="flex mt-5 items-center gap-5">
                  <Link to={"/register"}>
                    <button className="underline hover:bg-[#a88c71] hover:rounded-lg px-3 py-2">
                      Register
                    </button>
                  </Link>
                  <Link to={"/login"}>
                    <button className="btn border-none bg-[#a88c71]">
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
          <Link to={"/"}>
            <p className="btn flex gap-2 items-center btn-ghost text-xl">
              E-Blogs <IoNewspaperOutline />
            </p>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-5">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="hidden md:flex items-center gap-5">
          {user ? (
         <div className="dropdown dropdown-end">
         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
           <div className="w-10 rounded-full">
             <img
               alt="user"
               src={user?.photoURL} />
           </div>
         </div>
         <ul
           tabIndex={0}
           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             <NavLink className='p-2 font-semibold'  to={'/wishList'}>WishList</NavLink>
        <NavLink to={'/myPost'} className='p-2 font-semibold'>My Profile</NavLink>
         <NavLink to={'/support'} className='p-2 font-semibold'>Support</NavLink>
           <li><button className='p-2 font-semibold' onClick={handleLogOut}>Logout</button></li>
         </ul>
       </div>
          ) : (
            <div className="flex items-center gap-5">
              <Link to={"/register"}>
                <button className="underline hover:bg-[#a88c71] hover:rounded-lg px-3 py-2">
                  Register
                </button>
              </Link>
              <Link to={"/login"}>
                <button className="btn bg-[#a88c71] border-none">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
    );
};

export default Navbar;