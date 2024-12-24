import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GiAutoRepair } from "react-icons/gi";
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const UpdateBlog = () => {
    const blogData = useLoaderData()
  const {_id,title,category:categories,shortDes,longDes,photo}=blogData ||{}
  const navigate = useNavigate()
      const {user}=useContext(AuthContext)
      const [category,setCategory]=useState(categories)
     const handleSubmit =(e)=>{
        e.preventDefault()
        const form = e.target 
        const title = form.title.value 
        const shortDes = form.shortDes.value 
        const longDes = form.longDes.value 
        const photo = form.photo.value 
        const blogData={title,shortDes,category,longDes,photo,  owner:{
          email:user?.email,
          name:user?.displayName,
          photo:user?.photoURL
        }}
axios.patch(`http://localhost:6500/update-blog/${_id}`,blogData)
.then(res=> {
  if(res.data.modifiedCount){
    navigate('/allBlog')
    toast.success('blog successfully updated')
  }
})


 }
    return (
        <div className=' md:p-10 p-5'>
        <p className='text-center text-3xl flex gap-2 items-center'>Repair your blog <GiAutoRepair /></p>
        <form onSubmit={handleSubmit}>
         <div className='md:flex gap-5 '>
         <div className="form-control md:w-1/2">
       <label className="label">
         <span className="label-text">Title</span>
       </label>
       <input type="text" defaultValue={title} placeholder="Title" name='title' className="input input-bordered" required />
     </div>
         <div className="form-control md:w-1/2">
       <label className="label">
         <span className="label-text">Short description</span>
       </label>
       <input type="text" name='shortDes' defaultValue={shortDes} placeholder="short description" className="input input-bordered" required />
     </div>
         </div>
         <div className='md:flex gap-5 '>
         <div className="form-control md:w-1/2">
       <label className="label">
         <span className="label-text">Long description</span>
       </label>
       <input type="text" name='longDes' defaultValue={longDes} placeholder="long description" className="input input-bordered" required />
     </div>
         <div className="form-control  md:w-1/2">
       <label className="label">
         <span className="label-text">Category</span>
       </label>
  <select  onChange={(e)=>setCategory(e.target.value)} defaultValue={categories} className='select select-bordered' name="category">
    <option value="Tech">Tech & Development</option>
    <option value="Lifestyle">Lifestyle</option>
    <option value="Entertainment ">Entertainment</option>
    <option value="Business ">Business</option>
    <option value="Travel ">Travel </option>
  </select>
     </div>
         </div>
         <div className="form-control ">
       <label className="label">
         <span className="label-text">Photo url</span>
       </label>
       <input type="text" defaultValue={photo} name='photo' placeholder="photo url" className="input input-bordered" required />
     </div>
     <input type="submit" value="Update"  className='btn  btn-block mt-5 border-none bg-[#a88c71] '/>
        </form>
     </div>
    );
};

export default UpdateBlog;