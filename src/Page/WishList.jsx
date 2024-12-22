import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';

const WishList = () => {
    const {user}=useContext(AuthContext)
const [wishLists,setWishLists]=useState([])
    useEffect(()=>{
fetchData()
    },[])
    const fetchData =async()=>{
const {data}= await axios.get(`http://localhost:6500/wishList?email=${user?.email}`)
setWishLists(data)
    }
    const handleRemove=(id)=>{
        axios.delete(`http://localhost:6500/wishList/${id}`)
        .then(res=> {
            console.log(res.data)
            const remaining =wishLists.filter(list => list._id !== id)
            setWishLists(remaining)
        })
    }
    return (
        <div>
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
    <button className='btn btn-xs bg-[#857c6b] text-[#f5deb3]'>Details </button>
    <button onClick={()=> handleRemove(list._id)}><FaTrashAlt className='text-xl'></FaTrashAlt></button>
</div>

                </td>
               
              </tr>)
           }
          </tbody>
         
        </table>
      </div>
        </div>
    );
};

export default WishList;