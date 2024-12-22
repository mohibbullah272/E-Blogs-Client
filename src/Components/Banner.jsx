import LazyLoad from 'react-lazy-load';
import banner from '../assets/banner2.jpg'
const Banner = () => {
    return (
<LazyLoad height={600} >
<div style={{background:`url(${banner})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
       }} className='h-[600px] rounded-3xl  bg-center'  >
<div className='flex  flex-col items-center '>
<h3 className='text-2xl text-center mt-64 text-white'>Post, comment, and engage with content on your favorite topics</h3>
<p className='text-center text-white/70'>Stay connected with live updates and notifications</p>
</div>
        </div>
</LazyLoad>
    );
};

export default Banner;