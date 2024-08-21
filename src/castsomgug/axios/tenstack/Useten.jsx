import {  useQuery } from "@tanstack/react-query";
import Axios from "../axios";
import { useContext } from "react";
import { Athcontes } from "../../../Provadar/AthoProvadar";


const Useten = () => {

    
    const ax = Axios()
    const {user}=useContext(Athcontes)

    

    const {refetch,  data: crids=[]  } = useQuery({

        queryKey: ['crid', user?.email],

        queryFn: async() =>{

            const res = await ax.get(`/crids?email=${user.email}`)
            
      
            return res.data

        }
        

        
    })
    
    return [crids,refetch]
};

export default Useten;