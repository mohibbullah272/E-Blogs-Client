import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
const FeatureBlog = () => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const columns = [
        {
          name: "title",
          selector: (row) => row.title,
          sortable: true,
        },
        {
          name: "Author",
          selector: (row) => row.owner.name,
        },
        {
          name: "category",
          selector: (row) => row.category,
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
            const {data}=await axios.get(`http://localhost:6500/feature-blogs`)
            setData(data)
          }
          catch(err){
            console.log(err)
          }
          finally{
            setLoading(false)
          }

        }
        fetchData()
    },[])
    return (
        <div>
            
<DataTable
title="Top 10 posts"
columns={columns}
data={data}
progressPending={loading}
>

</DataTable>

        </div>
    );
};

export default FeatureBlog;