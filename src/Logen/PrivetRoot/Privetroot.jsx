import { useContext } from "react";
import { Athcontes } from "../../Provadar/AthoProvadar";
import { Navigate } from "react-router-dom";


const Privetroot = ({children}) => {
    const {user}=useContext(Athcontes)
    if(user){
        return children
    }
    return  <Navigate to={'/login'}>  </Navigate >
};

export default Privetroot;