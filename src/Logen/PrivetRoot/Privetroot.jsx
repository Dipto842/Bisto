import { useContext } from "react";
import { Athcontes } from "../../Provadar/AthoProvadar";
import { Navigate } from "react-router-dom";


const Privetroot = ({children}) => {
    const {user,Loding}=useContext(Athcontes)

    if(Loding){
     return   <h1>Lofing</h1>
    }

    if(user){
        return children
    }
    return  <Navigate to={'/login'}>  </Navigate >
};

export default Privetroot;