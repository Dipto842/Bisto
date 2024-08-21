import { useContext } from "react";
import { Athcontes } from "../../../Provadar/AthoProvadar";
import { useQuery } from "@tanstack/react-query";


import Axios from "../../../castsomgug/axios/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckMoving, faUserGroup, faWallet } from "@fortawesome/free-solid-svg-icons";
import img from '../../../assets/icon/chef 1 (1).png'
// barchat
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
import { PieChart, Pie } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const ax = Axios()
    const {user}=useContext(Athcontes)
    const {data:addminHomData={}}=useQuery({
        queryKey:['addminHom'],
        queryFn:async()=>{
        const res= await ax.get('/addminhom')
      console.log(res);
        return res.data
        }
    })  

    const  {data:state=[]} = useQuery({
        queryKey:['odarstart'],
        queryFn:async()=>{
            const res = await ax.get('/odarstart')
            return res.data
        }
    })
    console.log(state);


    // barchat

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };


    //   2 barchat
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
    
    const pychat = state.map(data=>{
        return {
            name: data._id,
            value: data.revenue
        }
    })

    return (
        <div className="bg-[#f6f6f6]">
             <div className="text-[32px] font-semibold">
            <h1 className="mt-5">Hi, Welcome <span>
                {
user?.displayName ? user?.displayName :'Back'
                }
                </span></h1>
           </div>



<div className="flex gap-[2.5rem] mt-7 ">
    <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] w-[293px] h-[150px] rounded-md text-center items-center flex flex-1 justify-center ">
      
<div className="flex items-center gap-5 ">
<div className=""> 

        <FontAwesomeIcon className=" text-[60px] text-white " icon={faWallet}></FontAwesomeIcon>

        </div>
<div className="    ">  
      <span className="text-[40px]  text-white font-medium ">{addminHomData.revenue} </span>
   
<p className="text-[24px] text-white font-medium ">Revenue</p>

</div>
</div >
    </div>
{/* 2 */}
<div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] w-[293px] h-[150px] rounded-md text-center items-center flex flex-1 justify-center ">
      
      <div className="flex items-center gap-5 ">
      <div className=""> 
      
              <FontAwesomeIcon className=" text-[60px] text-white  " icon={faUserGroup}></FontAwesomeIcon>
      
              </div>
      <div className="    ">  
            <span className="text-[40px]  text-white font-medium "> {addminHomData.user}</span>
         
      <p className="text-[24px] text-white font-medium ">Customers</p>
      
      </div>
      </div >
          </div>
{/* 3 */}
<div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] w-[293px] h-[150px] rounded-md text-center items-center flex flex-1 justify-center ">
      
      <div className="flex items-center gap-5 ">
      <div className=""> 
      
            <img className="w-[70px] text-white  " src={img} alt="" />
      
              </div>
      <div className="    ">  
            <span className="text-[40px]  text-white font-medium "> {addminHomData.menuItem}</span>
         
      <p className="text-[24px] text-white font-medium ">Products</p>
      
      </div>
      </div >
          </div>
    {/* 4 */}
    <div className="bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] w-[293px] h-[150px] rounded-md text-center items-center flex flex-1 justify-center ">
      
      <div className="flex items-center gap-5 ">
      <div className=""> 
      
              <FontAwesomeIcon className=" text-[60px] text-white  " icon={faTruckMoving}></FontAwesomeIcon>
      
              </div>
      <div className="    ">  
            <span className="text-[40px]  text-white font-medium "> {addminHomData.Odars}</span>
         
      <p className="text-[24px] text-white font-medium ">Orders</p>
      
      </div>
      </div >
          </div>
</div>



<div className="flex  mt-24 items-center w-[1247px] bg-white justify-around">
 <div>
 <BarChart
      width={700}
      height={400}
      data={state}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="_id" />
      <YAxis />
      <Bar dataKey="querytity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {state.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
 </div>

 <div>
 
        <PieChart  width={400} height={350}>
        <Legend></Legend>
          <Pie 
            data={pychat}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pychat.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        
        </PieChart>
      
 </div>
</div>


        </div>
    );
};

export default AdminHome;