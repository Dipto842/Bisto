import { useContext, useEffect, useState } from "react";
import Axios from "../../../castsomgug/axios/axios";
import { Athcontes } from "../../../Provadar/AthoProvadar";
import Swal from "sweetalert2";
import Useten from "../../../castsomgug/axios/tenstack/Useten";


const Booking = () => {
    const axios =Axios()
    const [Data,setData]=useState([])
     const { user } = useContext(Athcontes);
      const [, refetch] = Useten();
    useEffect(()=>{
        if (!user?.email) return;
        const DataFace=async()=>{
  const res=await axios.get("/booking")
  const Data = res.data
const myBookings = Data.filter(item => item.email === user.email);

  



setData(myBookings)
}

    DataFace()
  },[user])

  const hedelAdd =async (data) => {
  
  if (user && user.email) {
      const Data = {
        menuid: data._id,
        category: data.category,
        email: user.email,
        name: data.name,
        price: data.price,
        image: data.image,
        discount: data.discount,
      };

      axios.post("/crids", Data).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add the  crid",

            showConfirmButton: false,
            timer: 1500,
          });
        }

        refetch();
      });
    }
    

    
  }
    return (

        

        <div>

<div className="relative bg-[url('https://i.ibb.co.com/1dMxd5r/cat4.jpg')] bg-no-repeat bg-cover  bg bg-center h-[500px] w-[50] flex items-center justify-center">

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Book Your Table Now 🍽️
        </h1>

        <p className="max-w-xl mx-auto mb-6 text-sm md:text-lg">
          Enjoy delicious meals with your loved ones. Reserve your table today and skip the wait.
        </p>

     
      </div>
    </div>


              <table className="table text-[20px] h-screen mt-20">
 
            
            {
                
                Data.map(item=> <div key={item._id}>
             <div className="overflow-x-auto pt-4 w-[50%] mx-auto ">

    <tbody >
      {/* row 1 */}
      <tr >
       
        <td className="w-[300px]">
          <div className="flex items-center gap-3 ">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
              
            </div>
          </div>
        </td>
      <td>

      </td>
        <td>{item.price}</td>
        <th>
          <button onClick={()=>hedelAdd(item)} className="btn  hover:border-b-2 hover:bg-inherit hover:border-b-black  border-2 border-black bg-inherit text-black lg:relative left-[50%]    border-b-4 border-b-black   text-center mx-auto w-[128px]
          mt-10 h-[24px]">Add Card</button>
        </th>
      </tr>
     

    </tbody>

</div>
                </div>)
            }
             </table>
        </div>
    );
};

export default Booking;