import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { Athcontes } from "../../../../Provadar/AthoProvadar";
import Axios from "../../../../castsomgug/axios/axios";
import Usemenu from "../../../../castsomgug/Usemenu/Usemenu";
import { useState } from "react";



const Histori = () => {
  const {user}=useContext(Athcontes)

  const ax = Axios()
    const {data :paymentshis=[] }=useQuery({
        queryKey: ['payments',user?.email],
        
        queryFn:async ()=>{
const res =await ax.get(`/payment/${user.email}`)


 return res.data       

}
})



console.log(paymentshis,'dddd');



    return (
        <div>

            <form>
            <div className="overflow-x-auto mt-32 ml-10">
                <div><h1>total payment </h1></div>
  <table className="table">
    {/* head */}
    <thead className="bg-base-200"> 
      <tr>
       
        <th>EMAIL</th>
        
        <th>Price</th>
        
        <th>PAYENT DATE</th>
      
      </tr>
    </thead>
  {
    paymentshis.map(item=>  <tbody key={item._id}>
  
    

      <tr>
        
        <th className="text-black font-bold">{item.email}</th>
        <td className="text-black font-bold">{item.print}</td>
        
       
        <td className="text-black font-bold">{item.data}</td>
        
      </tr>
    
    </tbody>)
  }
    
  </table>
</div>
            </form>
            

        
        </div>
    );
};

export default Histori;