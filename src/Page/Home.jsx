import { useContext } from "react";
import Banner from "../Components/Banner";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PopularBlog from "../Components/PopularBlog";
import RecentBlog from "../Components/RecentBlog";
import Faqs from "../Components/Faqs";
import NewsLatter from "../Components/NewsLatter";


const Home = () => {
    const {name}=useContext(AuthContext)
    return (
        <div>
           <section className="p-10">  
            <Banner></Banner>
           </section>
         <section className="my-10 max-w-5xl mx-auto">
            <PopularBlog></PopularBlog>
         </section>
         <section className="my-20">
            <RecentBlog></RecentBlog>
         </section>
         <section className="my-20">
            <Faqs></Faqs>
         </section>
         <section className="mt-20 p-5">
            <NewsLatter></NewsLatter>
         </section>
        </div>
    );
};

export default Home;