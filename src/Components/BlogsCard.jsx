import { FaArrowRight } from "react-icons/fa";


const BlogsCard = ({blog}) => {
    const {title,category,photo,owner,shortDes}=blog || {}
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
      <button className="btn bg-green-500/30 text-gray-700">details <FaArrowRight></FaArrowRight></button>
      <button className="btn bg-green-500/30 text-gray-700">Add to wishList</button>
    </div>
  </div>
</div>
    );
};

export default BlogsCard;