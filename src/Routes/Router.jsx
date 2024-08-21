
import { createBrowserRouter } from "react-router-dom";
import Mainb from "../Componet/Mainb";
import Home from "../Componet/Pages/Home/Home/Home";
import Menu from "../Componet/Pages/secent_pages/men/Menu";
import Lastpart from "../Componet/Pages/secent_pages/lastpath/Lastpart";
import Login from "../Logen/Login";
import Sign from "../Logen/Sign Up/Sign";
import Privetroot from "../Logen/PrivetRoot/Privetroot";
import Sidebar from "../Componet/pages2/sidebar/Sidebar";
import Side from "../Componet/pages2/side/Side";
import UserHome from "../Componet/pages2/userHome/UserHome"
import Allusers from "../Componet/pages2/Addmin/allusers/allusers";
import Additems from "../Componet/pages2/additems/Additems";
import Manageitems from "../Componet/pages2/manageitems/Manageitems";
import Update from "../Componet/pages2/manageitems/UPDATE ITEM/UPDATE";
import Payment from "../Componet/pages2/PAYMENT/Payment";
import AdminHome from "../Componet/pages2/AdminHome/AdminHome";
import Histori from "../Componet/pages2/PAYMENT/Payment_Histori/Histori";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Mainb></Mainb>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/men',
                element: <Menu></Menu>
            },
            {
                path: '/our',
                element: <Privetroot><Lastpart></Lastpart></Privetroot>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Singup',
                element: <Sign></Sign>
            },



        ]
    },
    {
        path: 'sidebar',
        element: <Sidebar></Sidebar>,
        children: [
            {
                path: 'side',
                element: <Side></Side>
            },

            {

                path: 'PAYMENT',
                element: <Payment></Payment>
            },
            {
                path: 'Histori',
                element: <Histori></Histori>,
               
            },
            {
                path: 'UserHome',
                element: <UserHome></UserHome>
            },

            // addmin
            {
                path: 'AdminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'allusers',
                element: <Allusers></Allusers>

            },
            {
                path: 'additems',
                element: <Additems></Additems>
            },
            {
                path: 'manageitems',
                element: <Manageitems></Manageitems>
            },
            {
                path: 'upret/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://bistro-boss-restaurant-resources-sarvar.vercel.app/menu/${params.id}`),


            }

        ]

    }

]);
export default Router