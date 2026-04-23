import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Shear/Naver/Nav";
import Footer from "./Shear/Footer/Footer";

const Mainb = () => {
    const lokechon = useLocation()
  
    const nonave= lokechon.pathname.includes('/login')
    return (
        <div>
            
             {nonave|| <Nav></Nav>}
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainb;