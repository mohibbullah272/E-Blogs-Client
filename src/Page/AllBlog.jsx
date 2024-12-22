import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineControl } from "react-icons/ai";
import BlogsCard from "../Components/BlogsCard";

const AllBlog = () => {
  const [filter,setFilter]=useState('')
  const [search,setSearch]=useState('')
  console.log(filter,search)
const [blogs,setBlogs]=useState([])
  useEffect(()=>{
 axios.get(`http://localhost:6500/all-blogs?filter=${filter}&search=${search}`)
.then(res=> setBlogs(res.data))
  },[filter,search])
    return (
        <div>
          <div className="flex flex-wrap  gap-3 justify-center items-center">

          <div className="dropdown-select">
     
      <select
        id="select-dropdown"
        defaultValue=''
        onChange={(e)=>setFilter(e.target.value)}
        className="select select-bordered"
      >
        <option value="" disabled>Filter by category</option>
        <option value="Travel ">Travel </option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Business ">Business </option>
        <option value="Entertainment  ">Entertainment  </option>
        <option value="iBusiness ">Business </option>
      </select>
    </div>
            <div className="w-1/2">
            <label className="input input-bordered flex items-center  gap-2">
  <input onChange={(e)=>setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
            </div>
            <div>
                <button className="btn">Reset</button>
            </div>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 p-10">
{
    blogs.map(blog=> <BlogsCard key={blog._id} blog={blog}></BlogsCard>)
}

            </div>
        </div>
    );
};

export default AllBlog;