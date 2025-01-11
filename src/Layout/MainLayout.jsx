import { Outlet,  } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";

const MainLayout = () => {
 
    return (
        <div  >
          <header className="w-full">
          <Navbar></Navbar>
          </header>
          <main className="max-w-7xl mx-auto relative top-[75px]">
            <Outlet></Outlet>
          </main>
          <footer className="mt-24">
<Footer></Footer>
          </footer>
        </div>
    );
};

export default MainLayout;