import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
          <header>
          <Navbar></Navbar>
          </header>
          <main>
            <Outlet></Outlet>
          </main>
          <footer>
<Footer></Footer>
          </footer>
        </div>
    );
};

export default MainLayout;