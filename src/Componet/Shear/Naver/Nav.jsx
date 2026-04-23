import { Link, NavLink, useNavigate } from "react-router-dom";

import Useten from "../../../castsomgug/axios/tenstack/Useten";

import { useContext } from "react";
import { Athcontes } from "../../../Provadar/AthoProvadar";
import UseAdmin from "../../../castsomgug/UseAdmin/UseAdmin";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/Firebase.config";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const [isAdmin] = UseAdmin();
  
  const { user, updateProfil } = useContext(Athcontes);

  const navegate = useNavigate();

  const hedellogout = () => {
    signOut(auth)
      .then(() => {
       
        localStorage.removeItem("access-token");
        navegate("/login");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const link = (
    <>
      <div className="lg:flex lg:gap-5 lg:mr-[149px] lg:items-center ">
        <Link>
          <li>Home</li>
        </Link>

        {user && isAdmin && (
          <li>
            <Link to={"/sidebar/AdminHome"}>DASHBOARD-admin</Link>
          </li>
        )}
        {user && !isAdmin && (
          <li>
            <Link to={"/sidebar/UserHome"}>DASHBOARD-user</Link>
          </li>
        )}

        <Link to={"/men"}>
          <li className="w-[91px]">OurMen</li>
        </Link>
        <Link to={"/our"}>
          {" "}
          <li className="w-[91px]">Our Shop</li>
        </Link>
        <Link to={"/contact"}>
          <li className="w-[91px]">CONTACT us</li>
        </Link>

        {user?.email ? (
          <button onClick={hedellogout}>Logout</button>
        ) : (
          <Link to="/login">
            <li>Login</li>
          </Link>
        )}
      </div>
    </>
  );
  const [crids] = Useten();
 
  // useEffect(() => {

  //     fetch('http://localhost:5000/crids')

  //         .then(res => res.json()  )
  //         .then(data => {
  //             setdata(data)
  //             data
  //         })

  // }, [])

  // updateProfil
  const hendelupdate = () => {
    Swal.fire({
      title: "Update Data",
      html: `
      <input type="text" id="name" class="swal2-input" placeholder="Enter name">
      <input type="file" id="imgUrl" class="swal2-input" placeholder="Enter Imge Url">
    `,
      confirmButtonText: "Submit",
      focusConfirm: false,
      preConfirm: async () => {
        const name = document.getElementById("name").value;
        const file = document.getElementById("imgUrl").files[0];

        if (!name || !file) {
          Swal.showValidationMessage("Please fill all fields");
        }
        const apikey = import.meta.env.VITE_IMG_HOSTIG;

        const fomData = new FormData();
        fomData.append("image", file);
        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${apikey}`,
          {
            method: "POST",
            body: fomData,
          },
        );
        const data = await res.json();
        const imageUrl = data.data.url;

        return { name, imageUrl };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { name, imageUrl } = result.value;
        window.location.reload();
        updateProfil(name, imageUrl)
          .then(() => {
            Swal.fire("Success", "Profile Updated ✅", "success");
            window.location.reload(); // UI refresh
          })
          .catch((err) => {
            Swal.fire("Error", err.message, "error");
          });
      }
    });
  };
  return (
    <div className="w-[stretch] fixed z-20 bg-base-100  opacity-65 text-white ">
      <div className="navbar">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <div>
            <a className=" text-3xl itali "> bisto-bos</a>
          </div>
        </div>
        <div className="navbar-end hidden gap-6 lg:flex items-center ">
          <ul className="menu px-1 flex gap-7">{link}</ul>
        </div>

        
 <Link to={'/Booking'}>
  <button  className="btn m-1 text-[18px] text-white"><i className="fa-solid fa-heart-circle-plus"></i></button>
 </Link>
  


        <NavLink to={"/sidebar/side"}>
          <div className="navbar-end">
            <div>
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">
                        {crids.length}
                      </span>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body text-black">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
            </div>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-100 text-white rounded-box w-80 opacity-100 space-y-5"
          >
            <img
              className="w-full h-[150px]"
              src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt=""
            />
            <h1>email: {user?.email}</h1>
            <h1>Name: {user?.displayName}</h1>
            <h1>roule: admin</h1>

            <button
              onClick={hendelupdate}
              className="btn btn-active btn-primary text-white  "
            >
              update profile
            </button>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Nav;
