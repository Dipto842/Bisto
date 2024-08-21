
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Usemenu from "../../../castsomgug/Usemenu/Usemenu";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import Axios from "../../../castsomgug/axios/axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Manageitems = () => {
    const [menu,refetch] = Usemenu()
    console.log(menu);
const axs=Axios()
    const henedlDeletItm =(itam)=>{
        console.log(itam);
        
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
          if (result.isConfirmed) {
        const res=  await axs.delete(`/menu/${itam}`)
       console.log(res.data)
       if(res.data.deletedCount > 0){
   refetch()
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
       }
          }
        });
    }
  
  

    return (
        <div>

            <div>
                <div className=" mx-[397px]">

                    <h1 className="text-[#D99904] text-[20px] font-medium  grid justify-center mt-32 mb-3">---Hurry Up!---</h1>
                    <div className="border h-[2px] "></div>
                    <h1 className="text-[30px] font-medium  grid justify-center mt-4 mb-3">MANAGE ALL ITEMS</h1>
                    <div className="border h-[2px] mb-5 "></div>
                </div>
                <div className="">
                    <div className="">
                        <h1 className="text-[32px] font-bold mt-9 ml-16"> Total orders: {menu.length} </h1>

                    </div>
                </div>
            </div>


            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead className="bg-[#D1A054] ">
                        <tr>
                            <th>#</th>

                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                            <th>ACTION</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            menu.map((itam, index) => <tr key={itam._id}>

                                <td>
                                    {index + 1}
                                </td>
                                {/* {console.log(itam)} */}

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">

                                                <img
                                                    src={itam.image}
                                                    alt="Avatar Tailwind CSS Component" />

                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {itam.name}

                                </td>
                                <td className="">{itam.price}</td>
                                <td>
                                    
                                   <Link to={`/sidebar/upret/${itam._id}`}> <button   className=" btn btn-ghost btn-xs h-11 bg-red-500 rounded-[7px] w-[3.2rem] mt-4 ml-3">
                                    <FontAwesomeIcon className="h-4 text-white" icon={faPenToSquare}></FontAwesomeIcon>
                                    </button></Link>
                                
                                </td>


                                <th>
                                    <button onClick={()=>henedlDeletItm(itam._id)} className="btn btn-ghost btn-xs h-11 bg-red-500 rounded-[7px] w-[3.2rem]"><FontAwesomeIcon className="h-4 text-white" icon={faTrash}></FontAwesomeIcon> </button>
                                </th>
                            </tr>)
                        }



                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default Manageitems;