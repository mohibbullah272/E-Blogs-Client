import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import AddBlog from "../Page/AddBlog";
import AllBlog from "../Page/AllBlog";
import FeatureBlog from "../Page/FeatureBlog";
import WishList from "../Page/WishList";
import Login from "../Page/Login";
import Register from "../Page/Register";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Page/ErrorPage";
import Details from "../Page/Details";
import axios from "axios";
import UpdateBlog from "../Page/UpdateBlog";



const router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
               path:'addBlog' ,
               element:<PrivetRoute>
                <AddBlog></AddBlog>
               </PrivetRoute>
            },
            {
                path:'allBlog',
                element:<AllBlog></AllBlog>
            },
            {
                path:'featureBlog',
                element:<FeatureBlog></FeatureBlog>
            },
            {
                path:'wishList',
                element:<PrivetRoute>
                    <WishList></WishList>
                </PrivetRoute>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'details/:id',
                element:<PrivetRoute>
                    <Details></Details>
                </PrivetRoute>,
                loader:({params})=>axios.get(`https://e-blogs-server.vercel.app/details/${params.id}`,{withCredentials:true})
            },
            {
                path:'updateBlog/:id',
                element:<PrivetRoute>
                <UpdateBlog></UpdateBlog>
                </PrivetRoute>,
                loader:({params})=>axios.get(`https://e-blogs-server.vercel.app/details/${params.id}`,{withCredentials:true})
            }
        ]
    }
])
 

export default router;