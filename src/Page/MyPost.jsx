import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingPage from "./LoadingPage";



const MyPost = () => {
    const {user}=useContext(AuthContext)
const {data:post,isLoading,refetch}=useQuery({
    queryKey:["post",user?.email],
    queryFn:async()=>{
        const {data} = axios(`/posts?email=${user?.email}`)
        return data
    }
})
if(isLoading){
    return <LoadingPage></LoadingPage>
}
    return (
        <div className="min-h-screen">

        <div className="flex p-5 justify-center bg-[#a57c5671] w-full  flex-col">
<div className="w-[100px] p-2 border-4 mx-auto rounded-full">
    <img className="rounded-full" src={user?.photoURL} alt="" />
</div>
<h4 className="text-xl text-center font-semibold text-white/70">{user?.displayName}</h4>
<p className="text-center">{user?.email}</p>
        </div>
        <div className="p-5">
    <h4 className="text-2xl italic">Activity Details,,,</h4>       
           
        </div>
        </div>
    );
};

export default MyPost;