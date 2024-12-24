
import { toast } from "react-toastify";

import { Typewriter } from "react-simple-typewriter";

const NewsLatter = () => {
   
    const handleSubscribe=(e)=>{
 e.preventDefault()
 const form =e.target
 const email = form.email.value 
 if(email){
    toast.success('Thank you for subscribing to our newsletter')
    form.reset()
 }
 else{
    toast.error('please put your email first')
 }
    }
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
            <h3 className="text-center text-xl py-5">
            <Typewriter
          words={["Your Weekly Dose of Inspiration","Stay Inspired, Stay Informed.","Your Weekly Spark of Creativity"]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />   <br /> Subscribe now to stay inspired and informed</h3>
     <div className="md:w-1/2 p-2 mx-auto">
     
<form onSubmit={handleSubscribe}>
<label className="input input-bordered flex items-center gap-2">
<input type="email" name="email" required className="grow text-black" placeholder="Your Email address" />
<input type="submit" style={{backgroundColor:'#857c6b'}} className="px-5 py-2   rounded-3xl text-stone-200/80" value="Subscribe" />
</label>
</form>
     </div>
           </div>
        </div>
    );
};

export default NewsLatter;