import { useContext } from "react";
import { Athcontes } from "../../../Provadar/AthoProvadar";
import { useQuery } from "@tanstack/react-query";

import Axios from "../../../castsomgug/axios/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckMoving,
  faUserGroup,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import img from "../../../assets/icon/chef 1 (1).png";
// barchat
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
import { PieChart, Pie } from "recharts";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const ax = Axios();
  const { user } = useContext(Athcontes);
  const { data: addminHomData = {} } = useQuery({
    queryKey: ["addminHom"],
    queryFn: async () => {
      const res = await ax.get("/addminhom");
    
      return res.data;
    },
  });


  const { data: state = [] } = useQuery({
    queryKey: ["odarstart"],
    queryFn: async () => {
      const res = await ax.get("/odarstart");
      return res.data;
    },
  });

  // barchat



  return (
    <div className="bg-[#f6f6f6]">
      <div className="text-[32px] font-semibold">
        <h1 className="mt-5">
          Hi, Welcome{" "}
          <span>{user?.displayName ? user?.displayName : "Back"}</span>
        </h1>
      </div>

      <div className="grid grid-cols-2 justify-around gap-10 mt-7 ">
        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]  h-[150px] rounded-md text-center items-center flex flex-1 justify-center ">
          <div className="flex items-center gap-5 ">
            <div className="">
              <FontAwesomeIcon
                className=" text-[60px] text-white "
                icon={faWallet}
              ></FontAwesomeIcon>
            </div>
            <div className="    ">
              <span className="text-[40px]  text-white font-medium ">
                {addminHomData.revenue}{" "}
              </span>

              <p className="text-[24px] text-white font-medium ">Revenue</p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]  h-[150px] rounded-md text-center items-center flex flex-1 justify-center ">
          <div className="flex items-center gap-5 ">
            <div className="">
              <FontAwesomeIcon
                className=" text-[60px] text-white  "
                icon={faUserGroup}
              ></FontAwesomeIcon>
            </div>
            <div className="    ">
              <span className="text-[40px]  text-white font-medium ">
                {" "}
                {addminHomData.user}
              </span>

              <p className="text-[24px] text-white font-medium ">Customers</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9]  h-[150px] rounded-md text-center items-center flex flex-1 justify-center ">
          <div className="flex items-center gap-5 ">
            <div className="">
              <img className="w-[70px] text-white  " src={img} alt="" />
            </div>
            <div className="    ">
              <span className="text-[40px]  text-white font-medium ">
                {" "}
                {addminHomData.menuItem}
              </span>

              <p className="text-[24px] text-white font-medium ">Products</p>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]  h-[150px] rounded-md text-center items-center flex flex-1 justify-center ">
          <div className="flex items-center gap-5 ">
            <div className="">
              <FontAwesomeIcon
                className=" text-[60px] text-white  "
                icon={faTruckMoving}
              ></FontAwesomeIcon>
            </div>
            <div className="    ">
              <span className="text-[40px]  text-white font-medium ">
                {" "}
                {addminHomData.Odars}
              </span>

              <p className="text-[24px] text-white font-medium ">Orders</p>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default AdminHome;
