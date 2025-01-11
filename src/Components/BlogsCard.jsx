import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { motion} from "motion/react";

const BlogsCard = ({blog}) => {
    const {_id,title,category,photo,owner,shortDes}=blog || {}
  
    const {user}=useContext(AuthContext)
    const navigate = useNavigate()
    const handleWishList=()=>{
    const wishListData = {
      blogId:_id,title,category,photo,email:user?.email,shortDes
    }
    axios.post('https://e-blogs-server.vercel.app/add-wishList',wishListData)
    .then(res => toast.success('blog successfully added to wishlist'))
    }
    return (
        <motion.div      initial={{ opacity: 0 }} // 
        animate={{ opacity: 1 }} 
        transition={{
          duration: 1, 
          ease: "easeOut", 
        }}  className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
    className="w-full h-[300px]"
      src={photo}
      alt={title} />
  </figure>
  <div className="card-body">
    <div className="flex gap-2 items-center py-3">
<div>
    <img data-reference='no-reference' className="w-14 rounded-full bg-cover h-12" src={owner?.photo} alt="" />
</div>
<div>
    <p>{owner?.name}</p>
    <p>{owner?.email}</p>
</div>
    </div>
    <h2 className="card-title">{title}</h2>
   
    <p >Category: <span className="font-semibold">{category}</span></p>
    <div className="card-actions justify-between">
     <Link to={`/details/${_id}`}>
     <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }} className="btn bg-[#a57c56] text-gray-200">details <FaArrowRight></FaArrowRight></motion.button>
     </Link>
      <button onClick={()=>user?handleWishList():navigate('/login')} className="btn btn-outline">Add to wishList</button>
    </div>
  </div>
</motion.div>
    );
};

export default BlogsCard;