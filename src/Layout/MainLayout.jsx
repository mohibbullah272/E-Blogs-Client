import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


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

          </footer>
        </div>
    );
};

export default MainLayout;