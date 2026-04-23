  import Cover from "../../../Shear/menucovar/Cover";
  import img from '../../../../assets/shop/banner2.jpg'
  import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
  import 'react-tabs/style/react-tabs.css';
  import { useContext, useState } from "react";
  import Usemenu from "../../../../castsomgug/Usemenu/Usemenu";
  import Foot from "./Foot/Foot";
import { use } from "react";
import { useLocation } from "react-router-dom";
import Axios from "../../../../castsomgug/axios/axios";
import Useten from "../../../../castsomgug/axios/tenstack/Useten";
import Swal from "sweetalert2";
import { Athcontes } from "../../../../Provadar/AthoProvadar";

  const Lastpart = () => {
    const axios =Axios()
      const [, refetch] = Useten();
      const [menu] = Usemenu()
      const locechon = useLocation()
      const quri = new URLSearchParams(locechon.search)
      const category = quri.get('category')
    const { user } = useContext(Athcontes);
     
      
      const soup = menu.filter(item => item.category === 'soup')
      const salad = menu.filter(item => item.category === 'salad')
      const dessert = menu.filter(item => item.category === 'dessert')
      const pizza = menu.filter(item => item.category === 'pizza')
      const drinks = menu.filter(item => item.category === 'drinks')
  
    
    const [show, setsho] = useState(3);

    const hendelShow = () => {
      setsho((add) => add + 3);
    };


    const mapcategory={
        salad:0,
        pizza:1,
        soup:2,
        dessert:3,
        drinks:4
    }
const [tapindex,setapindex]=useState(mapcategory[category] ?? 0)


// hendelBooking
// hendelBooking
  const hendelBooking = (item) => {
        const Data = {
        menuid: item._id,
        category: item.category,
        email: user.email,
        name: item.name,
        price: item.price,
        image: item.image,
        discount: item.discount,
      };
   
      
   axios.post("/booking",Data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Add the  Booking List",

          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

      return (
          <div>
          
              <Cover
              img={img}
              title={'OUR SHOP'}
              p={'Would you like to try a dish?'}
              ></Cover>

              <div>

              <Tabs selectedIndex={tapindex} onSelect={(index) => setapindex(index)}>
  <div className="mx-auto grid justify-center mt-32 text-[25px] mb-9 font-extrabold"> 
  <TabList>
      <Tab>Salad</Tab>
      <Tab>pizza</Tab>
      <Tab>soups</Tab>
      <Tab>desserts</Tab>
      <Tab>drinks</Tab>
    </TabList>
  </div>
    <TabPanel ><div className="grid grid-cols-3 w-[1069px] items-center justify-center mx-auto gap-7">
    {salad.slice(0, show).map(item=> <Foot hendelBooking={hendelBooking} key={item._id} item={item}></Foot>)}
      </div>
      <button className="hover:border-b-2 hover:bg-inherit hover:border-b-black btn border-0 bg-inherit text-black lg:relative left-[50%]    border-b-4 border-b-black   text-center mx-auto w-[128px]
          mt-10 h-[24px] " onClick={hendelShow}> View More</button>
      </TabPanel>

    <TabPanel><div className="grid grid-cols-3 w-[1069px] items-center justify-center mx-auto gap-7">
    {pizza.slice(0, show).map(item=> <Foot key={item._id} item={item}></Foot>)}
      </div><button className="hover:border-b-2 hover:bg-inherit hover:border-b-black btn border-0 bg-inherit text-black lg:relative left-[50%]    border-b-4 border-b-black   text-center mx-auto w-[128px]
          mt-10 h-[24px] " onClick={hendelShow}> View More</button>
      </TabPanel>

    <TabPanel><div className="grid grid-cols-3 w-[1069px] items-center justify-center mx-auto gap-7">
    {soup.slice(0, show).map(item=> <Foot key={item._id} item={item}></Foot>)}
      </div><button className="hover:border-b-2 hover:bg-inherit hover:border-b-black btn border-0 bg-inherit text-black lg:relative left-[50%]    border-b-4 border-b-black   text-center mx-auto w-[128px]
          mt-10 h-[24px] " onClick={hendelShow}> View More</button>
      </TabPanel>

    <TabPanel><div className="grid grid-cols-3 w-[1069px] items-center justify-center mx-auto gap-7">
    {dessert.slice(0, show).map(item=> <Foot key={item._id} item={item}></Foot>)}
      </div><button className="hover:border-b-2 hover:bg-inherit hover:border-b-black btn border-0 bg-inherit text-black lg:relative left-[50%]    border-b-4 border-b-black   text-center mx-auto w-[128px]
          mt-10 h-[24px] " onClick={hendelShow}> View More</button>
      </TabPanel>

    <TabPanel><div className="grid grid-cols-3 w-[1069px] items-center justify-center mx-auto gap-7">
    {drinks.slice(0, show).map(item=> <Foot key={item._id} item={item}></Foot>)}
      </div><button className="hover:border-b-2 hover:bg-inherit hover:border-b-black btn border-0 bg-inherit text-black lg:relative left-[50%]    border-b-4 border-b-black   text-center mx-auto w-[128px]
          mt-10 h-[24px] " onClick={hendelShow}> View More</button>
      </TabPanel>
  </Tabs>







            
          </div>
          </div>
      );
  };

  export default Lastpart;