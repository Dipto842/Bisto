import Cover from "../../../Shear/menucovar/Cover";
import img from '../../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import Usemenu from "../../../../castsomgug/Usemenu/Usemenu";
import Foot from "./Foot/Foot";
const Lastpart = () => {
    const [menu] = Usemenu()
    const [tapindex,setapindex]=useState()
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
  
    return (
        <div>
        
            <Cover
            img={img}
            title={'OUR SHOP'}
            p={'Would you like to try a dish?'}
            ></Cover>

            <div>

            <Tabs defaultIndex={tapindex} onSelect={(index) => setapindex(index)}>
<div className="mx-auto grid justify-center mt-32 text-[25px] mb-9"> 
<TabList>
    <Tab>Salad</Tab>
    <Tab>pizza</Tab>
    <Tab>soups</Tab>
    <Tab>desserts</Tab>
    <Tab>drinks</Tab>
  </TabList>
</div>
  <TabPanel ><div className="grid grid-cols-3 w-[1069px] items-center justify-center mx-auto gap-7">
  {salad.map(item=> <Foot key={item._id} item={item}></Foot>)}
    </div></TabPanel>

  <TabPanel><div className="grid grid-cols-3 w-[1069px] items-center justify-center mx-auto gap-7">
  {pizza.map(item=> <Foot key={item._id} item={item}></Foot>)}
    </div></TabPanel>

  <TabPanel><div className="grid grid-cols-3 w-[1069px] items-center justify-center mx-auto gap-7">
  {soup.map(item=> <Foot key={item._id} item={item}></Foot>)}
    </div></TabPanel>

  <TabPanel><div className="grid grid-cols-3 w-[1069px] items-center justify-center mx-auto gap-7">
  {dessert.map(item=> <Foot key={item._id} item={item}></Foot>)}
    </div></TabPanel>

  <TabPanel><div className="grid grid-cols-3 w-[1069px] items-center justify-center mx-auto gap-7">
  {drinks.map(item=> <Foot key={item._id} item={item}></Foot>)}
    </div></TabPanel>
</Tabs>







          
        </div>
        </div>
    );
};

export default Lastpart;