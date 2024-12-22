import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoNewspaperOutline } from "react-icons/io5";
const Navbar = () => {
    const links=<>
    <NavLink className='p-2 font-semibold '  to={'/'}>Home</NavLink>
    <NavLink className='p-2 font-semibold'  to={'/addBlog'}>Add Blog</NavLink>
    <NavLink className='p-2 font-semibold'  to={'/allBlog'}>All Blog</NavLink>
    <NavLink className='p-2 font-semibold'  to={'/featureBlog'}>Feature Blog</NavLink>
    <NavLink className='p-2 font-semibold'  to={'/wishList'}>WishList</NavLink>

    </>
    return (
        <div className="navbar bg-base-100">
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
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">E-Blogs 
          <IoNewspaperOutline />
          </a>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">
     {
        links
     }
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <Link to={'/register'}>
          <button className='underline hover:bg-green-200/60 hover:rounded-lg px-3 py-2'>Register</button>
          </Link>
       <Link to={'/login'}>
       <button className='btn bg-green-300'>Login</button>
       </Link>
        </div>
      </div>
    );
};

export default Navbar;