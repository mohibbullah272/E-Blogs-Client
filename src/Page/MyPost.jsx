import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SharedTitle from "../Components/SharedTitle";


const MyPost = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="min-h-screen">
        <h3 className="text-3xl font-semibold">Welcome Back!!</h3>
        <div className="flex p-5 justify-center bg-[#a57c569c] w-1/2 mx-auto flex-col">
<div className="w-[100px] p-2 border-4 mx-auto rounded-full">
    <img className="rounded-full" src={user?.photoURL} alt="" />
</div>
<h4 className="text-xl text-center font-semibold text-white/70">{user?.displayName}</h4>
<p className="text-center">{user?.email}</p>
        </div>
        <div>
           
           
        </div>
        </div>
    );
};

export default MyPost;