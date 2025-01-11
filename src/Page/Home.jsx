import { useContext } from "react";
import Banner from "../Components/Banner";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PopularBlog from "../Components/PopularBlog";
import RecentBlog from "../Components/RecentBlog";
import Faqs from "../Components/Faqs";
import NewsLatter from "../Components/NewsLatter";
import SharedTitle from "../Components/SharedTitle";


const Home = () => {
    const {name}=useContext(AuthContext)
    return (
        <div>
         <section>
            <Banner></Banner>
         </section>
         <section className="my-20 ">
            <SharedTitle title={'popular blogs'}></SharedTitle>
            <PopularBlog></PopularBlog>
         </section>
         <section className="my-20">
            <SharedTitle title={'Recent Blogs'}></SharedTitle>
            <RecentBlog></RecentBlog>
         </section>
         <section className="my-20">
            <SharedTitle title={'FAQS'}></SharedTitle>
            <Faqs></Faqs>
         </section>
         <section className="mt-20 p-5">
            <NewsLatter></NewsLatter>
         </section>
        </div>
    );
};

export default Home;