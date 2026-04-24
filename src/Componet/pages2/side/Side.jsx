
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Useten from "../../../castsomgug/axios/tenstack/Useten";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import Axios from "../../../castsomgug/axios/axios";
import AxiosPublis from "../../../castsomgug/axios/AxiosPublis/AxiosPublis";
import { Link } from "react-router-dom";


const Side = () => {
  const [crids, refetch] = Useten()
 
    const totolardiscount = crids.reduce((total, item) => total + Number(item.discount || 0), 0)

  const totalprich = crids.reduce((total, item) => total + Number(item.price), 0)
  const totarAmaont = totalprich-totolardiscount

  const ax = AxiosPublis()

  const hendelDilet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {


        ax.delete(`/crids/${id}`)
          .then((data) => {

                
            if (data.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch()
            }
          })
      }
    });
  }
  return (
    <div>
      <div className= " mx-[3px]">

        <h1 className="text-[#D99904] text-[20px] font-medium  grid justify-center mt-3 mb-3">---My Cart---</h1>
        <div className="border h-[2px] "></div>
        <h1 className="text-[30px] font-medium  grid justify-center  text-black mt-4 mb-3">WANNA ADD MORE?</h1>
        <div className="border  mb-5 "></div>
      </div>
      <div className="w-[100%] mx-auto shadow-xl  text-black">
        <div className="lg:flex justify-around items-center ">
          <h1 className="text-[32px] font-bold mt-9"> Total orders:  {crids.length} </h1>
          <h1 className="text-[32px] font-bold mt-9">  total price: {totarAmaont} </h1>
         {crids.length> 0 ?  <Link to='/sidebar/PAYMENT'>
          <button className="btn bg-[#D1A054] mt-9  text-white">Pay</button>
          </Link>:    <button disabled className="btn bg-[#D1A054]   mt-9">Pay</button>
          


         }
        </div>
        <div>
          <div className="w-full overflow-x-auto mt-12  " >
            <table className="lg:table ">
              {/* head */}
              <thead className="
    ">
                <tr className=" text-black">
                  <th>#</th>
                  <th>image</th>
                  <th>name</th>
                  <th>PRICE</th>
                  <th>discount</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {
                  crids.map((podak, i) => <tr key={podak._id}>
                    <td>{i}</td>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={podak.image} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>


                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold  text-black">{podak.name}</div>

                    </td>
                    <td className=" text-black">{podak.price}</td>
                    <td className=" text-black">{podak.discount||0}</td>
                    <th>
                      <button onClick={() => hendelDilet(podak._id)} className="btn btn-ghost btn-lg bg-red-500 rounded-{14px} h-12 "><FontAwesomeIcon className="text-white" icon={faTrashCan} /></button>


                    </th>
                  </tr>)
                }
               


              </tbody>


            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;