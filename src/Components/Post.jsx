import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {_id,title,shortDes,photo}= post || {}
    return (
        <div className=" space-y-4 rounded-md   p-5 shadow-lg bg-base-100">
           <img className="w-full object-cover h-[200px]" src={photo} alt="blogs" />
            <p>{title}</p>
            <p>{shortDes}</p>
          <div className="flex justify-end">
      <Link to={`/details/${_id}`}>
      <button className="btn bg-[#a57c56] border-none  text-white"> 
                view blog
            </button>
      </Link>
          </div>
        </div>
    );
};

export default Post;