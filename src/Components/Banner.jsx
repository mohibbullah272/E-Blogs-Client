import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
const Banner = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut", 
        }}>
            <div 
                style={{
                    background: `url(https://img.freepik.com/free-photo/smiley-man-working-laptop-from-home_23-2148306647.jpg?t=st=1734890880~exp=1734894480~hmac=da30bfee23e0e6db4dcb6d4af85edcf78e4a531f4d004c52d8fc4f03137a61bd&w=740)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                className="relative h-[600px]  bg-center"
            >
               
                <div className="absolute inset-0 bg-black/50 "></div>

               
                <div className="relative flex flex-col items-center">
                    <h3 className="text-2xl text-center mt-64 text-white">
                    <Typewriter
          words={["Your Thoughts, Your Voice, Your Blog", "Inspiring Stories, One Post at a Time.", "Where Ideas Meet the World."]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
                        
                    </h3>
                    <p className="text-center text-white/90">
                        Stay connected with live updates and notifications
                    </p>
                 <Link to={'/allBlog'}>
                 <button className="btn border-none bg-[#a57c56] text-gray-100/50 mt-5">Explore more</button>
                 </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Banner;
