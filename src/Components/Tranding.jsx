import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingPage from '../Page/LoadingPage';
const Tranding = () => {
 const {data:blogs ,isFetching,isLoading}=useQuery({
    queryKey:["featureBlog"],
    queryFn:async()=>{
        const {data}= await axios('Featured.json')
        return data
    }
 })
if(isFetching || isLoading){
  return <LoadingPage></LoadingPage>
}
    return (
        <div className='w-full'>
        <Swiper
           slidesPerView={1} 
           spaceBetween={20}
           pagination={{
             clickable: true,
           }}
           navigation={true} 
           autoplay={{
             delay: 3000,
             disableOnInteraction: false, 
           }}
           breakpoints={{
             640: {
               slidesPerView: 2, 
           
             },
             768: {
               slidesPerView: 3, 
           
             },
             1024: {
               slidesPerView: 3, 
          
             },
           }}
           modules={[Pagination, Navigation, Autoplay]} 
           className="mySwiper"
        >
   {
    blogs.map(blog=>  <SwiperSlide key={blog.id}>
      <div className="relative">
        <img className="h-[600px] w-full object-cover" src={blog?.image} alt="" />
        
   
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
     
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-xl text-white font-bold w-3/4 sm:w-1/2">
            {blog?.title}
          </p>
        </div>
      </div>
    </SwiperSlide>)
   }
        </Swiper>
      </div>
    );
};

export default Tranding;