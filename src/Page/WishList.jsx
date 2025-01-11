import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { motion} from "framer-motion";
import useAxiosSecure from '../Hook/useAxiosSecure';
import LoadingPage from './LoadingPage';
const WishList = () => {
    const {user}=useContext(AuthContext)
    const [loading,setLoading]=useState(true)
const [wishLists,setWishLists]=useState([])
const axiosSecure = useAxiosSecure()
    useEffect(()=>{
fetchData()
    },[])
    const fetchData =async()=>{
try{
  setLoading(true)
  const {data} = await  axiosSecure.get(`/wishList?email=${user?.email}`)
  setWishLists(data)
}catch(err){
  console.log(err)
}
finally{
  setLoading(false)
}



    }
if(loading){
  return <LoadingPage></LoadingPage>
}

    const handleRemove=(id)=>{
        axios.delete(`https://e-blogs-server.vercel.app/wishList/${id}`,{withCredentials:true})
        .then(res=> {
          
            toast.success('successfully deleted')
            const remaining =wishLists.filter(list => list._id !== id)
            setWishLists(remaining)
        })
    }
  
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} // 
        animate={{ opacity: 1, y: 0 }} 
        transition={{
          duration: 1, 
          ease: "easeOut", 
        }} className='my-10 min-h-screen'>
               <div className="overflow-x-auto mt-10">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            
            </tr>
          </thead>
          <tbody>
           {
            wishLists.map(list=>  <tr key={list._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={list.photo}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{list.title}</div>
                      <div className="text-sm opacity-50">Category: {list.category}</div>
                    </div>
                  </div>
                </td>
                <td>
                <p>{list.shortDes}</p>
                </td>
                <td>
<div className='flex gap-5 items-center'>
    <Link to={`/details/${list.blogId}`}>
    <button className='btn btn-xs bg-[#857c6b] text-[#f5deb3]'>Details </button>
    </Link>
    <button onClick={()=> handleRemove(list._id)}><FaTrashAlt className='text-xl'></FaTrashAlt></button>
</div>

                </td>
               
              </tr>)
           }
          </tbody>
         
        </table>
      </div>
        </motion.div>
    );
};

export default WishList;