import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL:'https://e-blogs-server.vercel.app',
    withCredentials:true
})

const useAxiosSecure = () => {
    const {logout}=useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
    const  interceptorId= axiosInstance.interceptors.response.use(res=>{
            return res;
        },
    (error)=>{
        if(error.status === 401 || error.status === 403){
            logout()
            .then(()=>{
                navigate('/login')
                toast.error('Unauthorized access')
            })
        }
        return Promise.reject(error)
    }
    )
    return () => {
        axiosInstance.interceptors.response.eject(interceptorId);
    };
    },[logout,logout])
return axiosInstance
};

export default useAxiosSecure;