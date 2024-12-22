import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div 
                style={{
                    background: `url(https://img.freepik.com/free-photo/smiley-man-working-laptop-from-home_23-2148306647.jpg?t=st=1734890880~exp=1734894480~hmac=da30bfee23e0e6db4dcb6d4af85edcf78e4a531f4d004c52d8fc4f03137a61bd&w=740)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                className="relative h-[600px] rounded-3xl bg-center"
            >
               
                <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

               
                <div className="relative flex flex-col items-center">
                    <h3 className="text-2xl text-center mt-64 text-white">
                        Post, comment, and engage with content on your favorite topics
                    </h3>
                    <p className="text-center text-white/70">
                        Stay connected with live updates and notifications
                    </p>
                 <Link to={'/allBlog'}>
                 <button className="btn border-none bg-[#857c6b] text-gray-100/60 mt-5">Explore more</button>
                 </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
