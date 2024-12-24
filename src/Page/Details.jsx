import React, { useContext, useEffect, useState } from 'react';
import { FaComment, FaPen } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { FaRegFrownOpen } from "react-icons/fa";
import { BiSolidError } from "react-icons/bi";
import { motion} from "framer-motion";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const Details = () => {
    const {id} = useParams()
    const {user}=useContext(AuthContext)
    const blog = useLoaderData()
    // console.log(blog)
  
    const [comments,setComments]=useState([])
    useEffect(()=>{
fetchComment()
    },[])
    const fetchComment=async()=>{
        const {data}=await axios.get(`https://e-blogs-server.vercel.app/comment?blogId=${id}`)
        setComments(data)
    }
    const handleComment=(e)=>{
        e.preventDefault()
        const form = e.target
        const comment = form.comment.value 
       const commentData ={
        comment,photo:user?.photoURL,name:user?.displayName,blogId:id
       }
      axios.post('https://e-blogs-server.vercel.app/add-comment',commentData)
      .then(res=> {
        if(res.data.insertedId){
            setComments((prevComments) => [...prevComments, commentData]);
        }
      })
      form.reset()
   
    }
    return (
    <PhotoProvider>
    <motion.div initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{
          duration: 1, 
          ease: "easeOut", 
        }} className='p-5'>
     
     <div className='border-2  md:w-1/2 mx-auto rounded-3xl p-2 bg-opacity-5'>
          <PhotoView src={blog?.data?.photo}>
          <img data-reference="no-reference"  className='w-full rounded-3xl mx-auto' src={blog.data?.photo} alt={blog.data.title} />
          </PhotoView>
           </div>
           <div className='my-5'>
            <p className='text-xl font-semibold'>{blog.data.title}</p>
            <p className='font-semibold'>Author: {blog?.data.owner?.name}</p>
            <p className='font-semibold'>Category :{blog.data.category}</p>
            <p className='text-gray-500'>{blog.data.shortDes}</p>
            <p className='text-gray-500'>{blog.data.longDes}</p>
           </div>
           <div className='my-4'>
            {
                user?.email === blog.data?.owner?.email && <Link to={`/updateBlog/${id}`}>
                <button className='btn btn-neutral flex items-center gap-2'>Update Blog <FaPen></FaPen></button>
                </Link>
            }
           </div>
           <div>
            <h4 className='flex text-xl items-center gap-2'>Comments <FaComment></FaComment></h4>
           </div>
          {
            comments.length <= 0 ? <p className='flex gap-2 items-center'>No comments yet to show ! <FaRegFrownOpen /></p>: <div className='space-y-3 my-4'>
           
         {
            comments.map((comment,idx)=><div key={idx}>
             <div className='flex gap-2 items-center'>
                <img className='w-10 h-10 rounded-full bg-cover' data-reference="no-reference" src={comment?.photo}  />
                <p className='font-semibold'>{comment?.name}.</p>
                <p>{comment?.comment}</p>
             </div>
            </div>)
         }
           </div>
          }
{
    user?.email===blog.data?.owner?.email?<p className='flex items-center gap-2 text-xl font-bold text-red-600'> <BiSolidError />You can't comment on  own blogs</p>:           <div className="my-2 ">
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
}


     </motion.div>

    </PhotoProvider>
     
    );
};

export default Details;