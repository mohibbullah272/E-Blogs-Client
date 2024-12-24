import axios from "axios";
import { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";

const RecentBlog = () => { 
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        axios.get(`https://e-blogs-server.vercel.app/recent-blog`)
        .then(res => setBlogs(res.data))
    },[])
    return (
        <div >
<h3 className="text-3xl px-5">Recent Blogs,,,</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {
                blogs.map(blog=> <BlogsCard key={blog._id} blog={blog}></BlogsCard>)
            }
        </div>
        </div>
    );
};

export default RecentBlog;