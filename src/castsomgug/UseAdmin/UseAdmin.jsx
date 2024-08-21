import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Athcontes } from "../../Provadar/AthoProvadar";
import Axios from "../axios/axios";


const UseAdmin = () => {
    const {user}=useContext(Athcontes)
  const axios = Axios()
    const {data:isAdmin=[]}=useQuery({

        queryKey:['isAdmin', user.email],
        queryFn:async()=>{
            const res=await  axios.get(`/users/addmin/${user.email}`)
          
            return res.data?.admin
        }
    })
    return [isAdmin]
};

export default UseAdmin;