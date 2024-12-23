import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../Page/LoadingPage";


const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
   
    if(loading){
        return <LoadingPage></LoadingPage>
    }
    if(user){
        return children
    }
    return (
    <Navigate to={'/login'}></Navigate>
    );
};

export default PrivetRoute;