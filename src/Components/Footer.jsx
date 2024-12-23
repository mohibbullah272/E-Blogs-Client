import React from 'react';
import { IoNewspaperOutline } from "react-icons/io5";
const Footer = () => {
    return (
        <div  className='bg-black/90 text-white rounded-t-xl'>
            <div className='p-5 text-center'>
                <h3 className='text-2xl py-2'>Lets get started with something great</h3>
                <p>join us over 400 blogs post daily</p>
            </div>
            <div className='flex justify-center gap-5'>
                <button className='btn btn-outline text-white'>Chat to us</button>
                <button className='btn border-none bg-stone-600 text-gray-300'>Get Started </button>
            </div>
            <div className='md:flex p-4 md:text-center gap-5 justify-around mt-5'>
                <div>
                    <h4  className='font-bold'>Product</h4>
                    <p>About us</p>
                    <p>Career</p>
                    <p>Press</p>
                    <p>News</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h4 className='font-bold'>Company</h4>
                    <p>Blogs</p>
                    <p>NewsLatter</p>
                    <p>Event</p>
                    <p>Tutorials</p>
                    <p>Support</p>
                </div>
                <div>
                    <h4 className='font-bold'>Resource</h4>
                    <p>OverView</p>
                    <p>Solution</p>
                    <p>Tutorials </p>
                    <p>Pricing</p>
                    <p>Releases</p>
                </div>
                <div>
                    <h4 className='font-bold'>Social</h4>
                    <p>Facebook</p>
                    <p>Youtube</p>
                    <p>WhatsApp</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                </div>
                <div>
                    <h4 className='font-bold'>Legal</h4>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Policy</p>
                    <p>Cookie</p>
                </div>
            </div>
          <hr  className='my-3'/>
            <div className='flex justify-between p-5'>
                <p className='flex items-center gap-2 text-2xl'><IoNewspaperOutline className='text-white text-2xl'></IoNewspaperOutline> E-Blogs</p>
                <p>© 2024  E-Blogs All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;