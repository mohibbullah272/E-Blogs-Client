import React, { useContext, useState } from 'react';
import { FaComment } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';

const Details = () => {
    const {id} = useParams()
    const {user}=useContext(AuthContext)
    const blog = useLoaderData()
    const handleComment=(e)=>{
        e.preventDefault()
        const form = e.target
        const comment = form.comment.value 
       const commentData ={
        comment,photo:user?.photoURL,name:user?.displayName,blogId:id
       }
      axios.post('http://localhost:6500/add-comment',commentData)
      .then(res=> console.log(res.data))
    }
    return (
        <div className='p-5'>
     
     <div className='border-2  md:w-1/2 mx-auto rounded-3xl p-2 bg-opacity-5'>
            <img data-reference="no-reference"  className='w-full rounded-3xl mx-auto' src={blog?.photo} alt={blog.title} />
           </div>
           <div className='my-5'>
            <p className='text-xl font-semibold'>{blog.title}</p>
            <p className='font-semibold'>Author: {blog?.owner?.name}</p>
            <p className='font-semibold'>Category :{blog.category}</p>
            <p className='text-gray-500'>{blog.shortDes}</p>
            <p className='text-gray-500'>{blog.longDes}</p>
           </div>
           <div>
            <h4 className='flex text-xl items-center gap-2'>Comments <FaComment></FaComment></h4>
           </div>
           <div>
            {/* comments will appear here */}
            <p> Lorem ipsum dolor sit amet.</p>
            <p> Lorem ipsum dolor sit amet.</p>
            <p> Lorem ipsum dolor sit amet.</p>
            <p> Lorem ipsum dolor sit amet.</p>
            <p> Lorem ipsum dolor sit amet.</p>
           </div>
           <div className="my-2 ">
  <form onSubmit={handleComment} className="relative w-full max-w-sm">
    <textarea
      name="comment"
      className="textarea textarea-bordered w-full"
      placeholder="put your valuable comment hare"
    ></textarea>
    <input
      type="submit"
      className="btn border-none bg-stone-500/70 text-gray-900 absolute bottom-2 right-2"
      value="Submit"
    />
  </form>
</div>


     </div>
     
    );
};

export default Details;