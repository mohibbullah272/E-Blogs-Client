

const Post = ({post}) => {
    const {title,shortDes,photo}= post || {}
    return (
        <div className="max-w-sm space-y-4 rounded-md m-10  p-5 shadow-lg bg-base-100">
           <img className="w-full h-[200px]" src={photo} alt="blogs" />
            <p>{title}</p>
            <p>{shortDes}</p>
        </div>
    );
};

export default Post;