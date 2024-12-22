import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";


const BlogsCard = ({blog}) => {
    const {_id,title,category,photo,owner,shortDes}=blog || {}
    const {user}=useContext(AuthContext)
    const handleWishList=()=>{
    const wishListData = {
      blogId:_id,title,category,photo,email:user?.email,shortDes
    }
    axios.post('http://localhost:6500/add-wishList',wishListData)
    .then(res => toast.success('blog successfully added to wishlist'))
    }
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
    className="w-full h-[300px]"
      src={photo}
      alt={title} />
  </figure>
  <div className="card-body">
    <div className="flex gap-2 items-center py-3">
<div>
    <img className="w-14 rounded-full h-12" src={owner?.photo} alt="" />
</div>
<div>
    <p>{owner?.name}</p>
    <p>{owner?.email}</p>
</div>
    </div>
    <h2 className="card-title">{title}</h2>
    <p>{shortDes}</p>
    <p >Category: <span className="font-semibold">{category}</span></p>
    <div className="card-actions justify-between">
      <button className="btn bg-[#a57c56] text-gray-200">details <FaArrowRight></FaArrowRight></button>
      <button onClick={handleWishList} className="btn btn-outline">Add to wishList</button>
    </div>
  </div>
</div>
    );
};

export default BlogsCard;