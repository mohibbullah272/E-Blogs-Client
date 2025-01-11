import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
import { motion } from "framer-motion";
const FeatureBlog = () => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const columns = [
        {
          name: "Title",
          selector: (row) => row.title,
         
        },
        {
          name: "Author",
          selector: (row) => row.owner.name,
          sortable: true,
        },
        {
          name: "category",
          selector: (row) => row.category,
          sortable: true,
        },
        {
          name: "description",
          selector: (row) => row.shortDes,
        },
    
    ]
    useEffect(()=>{
        const fetchData=async()=>{
          try{
            setLoading(true)
            const {data}=await axios.get(`https://e-blogs-server.vercel.app/feature-blogs`)
            setData(data)
          }
          catch(err){
            // console.log(err)
          }
          finally{
            setLoading(false)
          }

        }
        fetchData()
    },[])
    return (
        <motion.div className='min-h-screen ' initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut", 
        }}>
            
<DataTable
title="Top 10 posts"
columns={columns}
data={data}
progressPending={loading}
striped
>

</DataTable>

        </motion.div>
    );
};

export default FeatureBlog;