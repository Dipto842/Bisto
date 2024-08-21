import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Athcontes } from "../../../../Provadar/AthoProvadar";
import Axios from "../../../../castsomgug/axios/axios";



const Histori = () => {
  const {user}=useContext(Athcontes)
  const ax = Axios()
    const {data :paymentshis=[] }=useQuery({
        queryKey: ['payments',user.email],
        enabled:!!user?.email,
        queryFn:async ()=>{
const res =await ax.get(`/payment/${user.email}`)
 return res.data       

}
})
console.log(paymentshis);

    return (
        <div>
            <form>
            <div className="overflow-x-auto mt-32 ml-28">
                <div><h1>total payment </h1></div>
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054]"> 
      <tr>
        <th></th>
        <th>EMAIL</th>
        <th>CATEGORY</th>
        <th>TOTAL PRICE</th>
        <th>PAYENT DATE</th>
      
      </tr>
    </thead>
    {
      paymentshis.map((item,sum)=>{
        <tbody>

      <tr>
        <th>{sum}</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>Red</td>
      </tr>
    </tbody>
      })
    }
    
  </table>
</div>
            </form>
        </div>
    );
};

export default Histori;