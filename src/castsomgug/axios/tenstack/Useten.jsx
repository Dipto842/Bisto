import {  useQuery } from "@tanstack/react-query";
import Axios from "../axios";
import { useContext } from "react";
import { Athcontes } from "../../../Provadar/AthoProvadar";
import axios from "axios";


const Useten = () => {

    
    const ax = Axios()
    const {user}=useContext(Athcontes)

    

    const {refetch,  data: crids=[]  } = useQuery({

        queryKey: ['Mycrids', user?.email],
 enabled: !!user?.email,
        queryFn: async() =>{

            const res = await ax.post("/Mycrids", { email: user?.email }); 
            
      
            return res.data  

        }
        

        
    })
    
    return [crids,refetch]
};

export default Useten;