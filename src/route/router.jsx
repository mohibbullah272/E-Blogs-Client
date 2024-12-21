import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import AddBlog from "../Page/AddBlog";
import AllBlog from "../Page/AllBlog";
import FeatureBlog from "../Page/FeatureBlog";
import WishList from "../Page/WishList";



const router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
               path:'addBlog' ,
               element:<AddBlog></AddBlog>
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
                element:<WishList></WishList>
            }
        ]
    }
])
 

export default router;