import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Shear/Naver/Nav";

const Mainb = () => {
    const lokechon = useLocation()
  
    const nonave= lokechon.pathname.includes('/login')
    return (
        <div>
            
             {nonave|| <Nav></Nav>}
            
            <Outlet></Outlet>
        </div>
    );
};

export default Mainb;