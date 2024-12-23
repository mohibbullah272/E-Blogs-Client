import { useContext, useState } from 'react';
import Select from 'react-select'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GiAutoRepair } from "react-icons/gi";
const UpdateBlog = () => {
    const options = [
        { value: 'Tech', label: 'Tech & Development' },
        { value: 'Lifestyle', label: 'Lifestyle' },
        { value: 'Entertainment ', label: 'Entertainment ' },
        { value: 'Business ', label: 'Business ' },
        { value: 'Travel ', label: 'Travel & Adventure ' }
      ]
      const {user}=useContext(AuthContext)
      const [category,setCategory]=useState('')
     const handleSubmit =(e)=>{
        e.preventDefault()
        const form = e.target 
        const title = form.title.value 
        const shortDes = form.shortDes.value 
        const longDes = form.longDes.value 
        const photo = form.photo.value 
        const blogData={title,shortDes,longDes,photo,category , owner:{
          email:user?.email,
          name:user?.displayName,
          photo:user?.photoURL
        }}
console.log(blogData)
axios.post('http://localhost:6500/addBlog',blogData)
.then(res=> {
 if(res.data.insertedId){
 toast.success('your blog uploaded successfully')
  form.reset()
 }
}) }
    return (
        <div className=' md:p-10 p-5'>
        <p className='text-center text-3xl flex gap-2 items-center'>Repair your blog <GiAutoRepair /></p>
        <form onSubmit={handleSubmit}>
         <div className='md:flex gap-5 '>
         <div className="form-control md:w-1/2">
       <label className="label">
         <span className="label-text">Title</span>
       </label>
       <input type="text" placeholder="Title" name='title' className="input input-bordered" required />
     </div>
         <div className="form-control md:w-1/2">
       <label className="label">
         <span className="label-text">Short description</span>
       </label>
       <input type="text" name='shortDes' placeholder="short description" className="input input-bordered" required />
     </div>
         </div>
         <div className='md:flex gap-5 '>
         <div className="form-control md:w-1/2">
       <label className="label">
         <span className="label-text">Long description</span>
       </label>
       <input type="text" name='longDes' placeholder="long description" className="input input-bordered" required />
     </div>
         <div className="form-control  md:w-1/2">
       <label className="label">
         <span className="label-text">Category</span>
       </label>
      <Select required  options={options}
      onChange={(e)=>setCategory(e.value)}
      ></Select>
     </div>
         </div>
         <div className="form-control ">
       <label className="label">
         <span className="label-text">Photo url</span>
       </label>
       <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
     </div>
     <input type="submit" value="Update"  className='btn  btn-block mt-5 border-none bg-[#a88c71] '/>
        </form>
     </div>
    );
};

export default UpdateBlog;