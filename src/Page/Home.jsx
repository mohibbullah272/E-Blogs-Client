import { useContext } from "react";
import Banner from "../Components/Banner";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PopularBlog from "../Components/PopularBlog";


const Home = () => {
    const {name}=useContext(AuthContext)
    return (
        <div>
           <div className="p-10">  
            <Banner></Banner>
           </div>
         <div className="my-10 max-w-5xl mx-auto">
            <PopularBlog></PopularBlog>
         </div>
        </div>
    );
};

export default Home;