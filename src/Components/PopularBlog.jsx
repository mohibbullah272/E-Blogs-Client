
const PopularBlog = () => {
    return (
        <div>
            <h3 className="text-3xl ">Popular Blogs,,,</h3>
<div className="md:flex gap-5 shadow-xl rounded-xl p-10">
<div className=" w-1/2 p-2 ">
    <img className="w-full mx-auto h-[300px] rounded-xl " src="https://images.pexels.com/photos/6033962/pexels-photo-6033962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    <h3 className="text-gray-950 mt-5 text-xl font-semibold">Exploring the Hidden Gems of Iceland</h3>
    <p className="text-gray-500">Take a virtual journey through Iceland's breathtaking landscapes and secret spots</p>
</div>

<div className="flex flex-col md:gap-0 gap-5">
<div className="flex  md:p-2  items-center gap-2">
<div>
    <img className="h-[150px] w-[200px] rounded-xl" src="https://images.pexels.com/photos/8102011/pexels-photo-8102011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
</div>
<div>
    <p className="text-xl text-gray-950 font-semibold">Mastering the Art of Minimalism in Everyday Life</p>
    <p className="text-gray-500">Discover how embracing minimalism can bring clarity and peace to your busy life</p>
</div>
</div>
<div className="flex  md:p-2  items-center gap-2">
<div>
    <img className="h-[150px] w-[200px] rounded-xl" src="https://images.pexels.com/photos/16129728/pexels-photo-16129728/free-photo-of-man-coding-on-pc.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
</div>
<div>
    <p className="text-xl text-gray-950 font-semibold">10 JavaScript Tricks Every Developer Should Know</p>
    <p className="text-gray-500">Enhance your coding skills with these practical and time-saving JavaScript tips</p>
</div>
</div>
<div className="flex  md:p-2  items-center gap-2">
<div>
    <img className="h-[150px] w-[200px] rounded-xl" src="https://images.pexels.com/photos/29148795/pexels-photo-29148795/free-photo-of-controlling-entertainment-devices-in-a-cozy-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
</div>
<div>
    <p className="text-xl text-gray-950 font-semibold">Top 5 Movies to Watch This Weekend</p>
    <p className="text-gray-500">A curated list of must-watch movies across genres to make your weekend entertaining</p>
</div>
</div>
</div>
</div>
        </div>
    );
};

export default PopularBlog