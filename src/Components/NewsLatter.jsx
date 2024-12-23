 

const NewsLatter = () => {
    return (
        <div style={{backgroundImage:`url('https://images.pexels.com/photos/8004107/pexels-photo-8004107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center',
            
        }} className="h-[400px] relative my-5 rounded-3xl">
             <div
    className="absolute rounded-3xl inset-0  bg-black opacity-30  "
    style={{ zIndex: 1 }}
  ></div>
           <div className="relative z-10  top-28 text-white">
            <h3 className="text-center text-xl py-5">Your Weekly Dose of Inspiration
            Subscribe now <br /> to stay inspired and informed</h3>
     <div className="md:w-1/2 p-2 mx-auto">
     <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow text-black" placeholder="Your Email address" />
  <span className="px-5 py-2 hover:bg-slate-500/50 rounded-3xl bg-[#857c6b]">Subscribe</span>
</label>
     </div>
           </div>
        </div>
    );
};

export default NewsLatter;