import { useContext } from "react";
import { Athcontes } from "../../../Provadar/AthoProvadar";


const UserHome = () => {
    const {user}=useContext(Athcontes)
    return (
        <div>
           <div>
            <h1>Hi, Welcome <span>
                {
user?.displayName ? user?.displayName :'Back'
                }
                </span></h1>
           </div>
        </div>
    );
};

export default UserHome;