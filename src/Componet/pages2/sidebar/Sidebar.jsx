import { NavLink, Outlet } from "react-router-dom";

import {
  
  faBars,
  
  faCartShopping,
  faHome,
  faUsers,
  faUtensils,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UseAdmin from "../../../castsomgug/UseAdmin/UseAdmin";

const Sidebar = () => {
  const [isAdmin] = UseAdmin();


  return (
    <div className="flex min-h-screen w-full gap-4">
      <div className="">
        <ul className="menu w-64 h-[stretch] bg-base-200 gap-4 ">
          {isAdmin ? (
            <>
              <li>
                {" "}
                <NavLink to={"/sidebar/AdminHome"}>
                  {" "}
                  <FontAwesomeIcon className="" icon={faHome} /> Admin Home
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/sidebar/additems"}>
                  {" "}
                  <FontAwesomeIcon icon={faUtensils} />
                  Add items
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/sidebar/manageitems"}>
                  {" "}
                  <FontAwesomeIcon className="" icon={faBars} />
                  manage items
                </NavLink>
              </li>
            
              <li>
                {" "}
                <NavLink to={"/sidebar/allusers"}>
                  {" "}
                  <FontAwesomeIcon className="" icon={faUsers} /> all users
                </NavLink>
              </li>

              <div className="divider "></div>
            </>
          ) : (
            <>
              <li>
                {" "}
                <NavLink to={"/sidebar/userHome"}>
                  {" "}
                  <FontAwesomeIcon className="" icon={faHome} /> User Home
                </NavLink>
              </li>
              <li>
                {" "}
             
              </li>
              <li>
                {" "}
                <NavLink to={"/sidebar/Histori"}>
                  {" "}
                  <FontAwesomeIcon className="" icon={faWallet} /> payment
                  history
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/sidebar/side"}>
                  {" "}
                  <FontAwesomeIcon className="" icon={faCartShopping} /> my cart
                </NavLink>
              </li>
              <li>
                {" "}
              
              </li>
              <li>
                {" "}
               
              </li>
            </>
          )}

          <div className="divider "></div>

          <li>
            {" "}
            <NavLink to={"/"}>
              {" "}
              <FontAwesomeIcon className="" icon={faHome} />
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/our"}>
              {" "}
              <FontAwesomeIcon className="" icon={faBars} />
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="min-h-screen w-[stretch] p-4 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Sidebar;
