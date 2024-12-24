import { Outlet,  } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "motion/react"

const MainLayout = () => {
 
    return (
        <motion.div  className="max-w-7xl mx-auto">
          <header>
          <Navbar></Navbar>
          </header>
          <main>
            <Outlet></Outlet>
          </main>
          <footer className="mt-24">
<Footer></Footer>
          </footer>
        </motion.div>
    );
};

export default MainLayout;