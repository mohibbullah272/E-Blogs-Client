import { useContext } from "react";
import Banner from "../Components/Banner";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Home = () => {
    const {name}=useContext(AuthContext)
    return (
        <div>
           <div className="p-10">  
            <Banner></Banner>
           </div>
           <p>{name}</p>
        </div>
    );
};

export default Home;