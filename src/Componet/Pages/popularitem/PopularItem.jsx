import './PopularItem.css'

import '../../GoogleFont/Font.css'
import { useContext, useState } from 'react';
import Usemenu from '../../../castsomgug/Usemenu/Usemenu';
import Swal from 'sweetalert2';
import Axios from '../../../castsomgug/axios/axios';
import Useten from '../../../castsomgug/axios/tenstack/Useten';
import { Athcontes } from '../../../Provadar/AthoProvadar';

const PopularItem = () => {
  const [menu] = Usemenu();

  
   const [, refetch] = Useten();
     const { user } = useContext(Athcontes);
    const axiospat = Axios();
  const filtar = menu.filter((item) => item.category === "popular");
    const [show,setsho]=useState(4);

   const hendelShow = () => {
     setsho(add => add +4);
   }
  
   const hedelAdd = (data) => {
 

        if (user && user.email) {
     
      const Data = {
        menuid: data._id,
        category: data.category,
        email: user.email,
        name: data.name,
        price: data.price,
        image: data.image,
      };
     
      
      axiospat.post("/crids", Data).then((res) => {
        
        if (res.data.insertedId) {
         Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Add the  crid",
  showConfirmButton: false,
  timer: 1500
});
        }

        refetch();
      });
    }


 
   }
const hendelData = (id)=>{
    const data = filtar.find(item => item._id === id);
    Swal.fire({
        imageUrl: data.image,
  title: data.name + ' - ' + '$' + data.price,
  text: data.recipe,
  imageWidth: 510,
  imageHeight: 300,
  imageAlt: {id},
  confirmButtonText:"Add to cart"
  
  
}).then(result=>{
    if(result.isConfirmed){
       hedelAdd(data)
    } })
}
    return (
        <div className='w-[90%] mx-auto'>
                <div className="text-center mt-24  font1 text-black">
            <h1 className="mt-5 mb-3 text-[#D99904]">---popular item---</h1>
            <h1 className="border border-b-2 lg:w-[424px] mx-auto mb-2"></h1>
            <h1 className='text-[30px] font-bold' >FROM OUR MENU</h1>
            <h1 className="border border-b-2 lg:w-[424px] mx-auto mt-4"></h1>
            </div>


            <div className="grid grid-cols-2 gap-10 items-center justify-between">

{
    
     filtar.slice(0,show).map((item) => (
        
    
<div onClick={()=>hendelData(item._id)} key={item.id} className='flex gap-6 items-center cursor-pointer' >
{/* img */}
<div className="  PopularItem " >
<img className='PopularItem' src={item.image} alt="" />

</div>
{/* text */}
<div>
    {/* hedar */}
    <div className='flex gap-20 items-center '>
        <h1 className="font1 text-[20px] text-black">{item.name} --------------</h1>
        <p className="font-sans text-[20px] text-[#BB8506]">{item.price}</p>
    </div>

    {/* peragirap */}

    <p className='text-black  font-sans text-[16px]'>{item.recipe}</p>

</div>
</div>
     ))
}







            </div>

            <div className='text-center mx-auto w-[100%] mt-20 '>
    <button onClick={hendelShow} className='hover:text-white btn bg-white text-black  shadow  border-b-2 border-t-white border-l-white border-r-white text-center mx-auto'>
        View Full  Menu
    </button>
</div>


        </div>
    );
};

export default PopularItem;