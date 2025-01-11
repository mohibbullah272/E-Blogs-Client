import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
    <div className='md:p-20 p-10 bg-black/90 text-[#4a4a4a]'>
    <div className='md:flex max-w-7xl mx-auto space-y-5 justify-between items-center'>
    <div>
      <div className='flex items-center gap-3'>
        <img width="50" height="50" src="https://img.icons8.com/nolan/64/blog.png" alt="blog"/>
        <p className='text-3xl text-white/70'>E-Blogs</p>
        </div>
        <div className='flex mt-5 items-center gap-3'>
           <Link to={'/addBlog'}>
           <button className='py-2 rounded-3xl px-5 text-white hover:bg-slate-50/50 bg-[#a57c56]'>Get Started</button>
           </Link>
           <Link to={'/support'}>
           <button className='py-2 rounded-3xl px-7 text-white hover:bg-slate-100/20 border-2'>Support</button>
           </Link>
        </div>
        <div className='flex  mt-3 items-center gap-3'>
            <a target='_blank' href="https://github.com/mohibbullah272/E-Blogs-Client"><FaGithub className='text-2xl text-black'></FaGithub> </a>
            <a target='_blank' href="https://www.facebook.com/"><FaFacebook className='text-2xl text-blue-500'></FaFacebook> </a>
            <a target='_blank' href="https://www.youtube.com/"><FaYoutube className='text-2xl text-red-600'></FaYoutube> </a>
            <a target='_blank' href="https://www.instagram.com/"><FaInstagram className='text-2xl text-pink-500'></FaInstagram> </a>
        </div>
      </div>
        <div className='md:flex   gap-20'>
<div className='text-white/90'>
    <h2 className='font-semibold text-xl'>Service</h2>
    <ul>
        <li><Link className='underline' to={'/allBlog'}>All Blogs</Link></li>
        <li><Link className='underline' to={'/featureBlog'}>Featured Blogs</Link></li>
        <li><Link className='underline' to={'/addBlog'}>Create Post</Link></li>
        
    </ul>
</div>
<div className='text-white/90'>
<h2 className='font-semibold text-xl'>Legal</h2>
    <ul>
        <li><Link className='underline' to={'/policy'}>Privacy Policy</Link></li>
        <li><Link className='underline' to={'/support'}>Support</Link></li>     
    </ul>
</div>
        </div>
    </div>
    <hr  className='mt-9'/>
    <p className='text-white/90 text-center mt-5'>Copyright © {new Date().getFullYear()} - All right reserved by E-blogs Ltd</p>
    </div>
    );
};

export default Footer;