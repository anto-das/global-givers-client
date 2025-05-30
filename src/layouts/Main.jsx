import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <section className="relative top-0 z-0">
            {/* navbar */}
            <div className="sticky top-0 z-10">
        <Navbar></Navbar>
            </div>
{/* outlet */}
<div>
    <Outlet></Outlet>
</div>
{/* footer */}
 <Footer></Footer>
        </section>
       
    );
};

export default Main;