import Cover from "../../../Shear/menucovar/Cover";
import img1 from '../../../../assets/menu/banner3.jpg'
import img2 from '../../../../assets/home/chef-service.jpg'
import Usemenu from "../../../../castsomgug/Usemenu/Usemenu";
const Menu = () => {
    const [menu] = Usemenu()
    const offered = menu.filter(item => item.category === 'offered')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <Cover
            img={img1}
            title={'OUR MENU'}
            p={'Would you like to try a dish?'}
            
            ></Cover>
                 <div className="text-center mt-24 ">
            <h1 className="mt-5 mb-3 text-[#D99904]">---Don't miss----</h1>
            <h1 className="border border-b-2 w-[424px] mx-auto mb-2"></h1>
            <h1 className='text-[30px] font-bold' >TODAY'S OFFERU</h1>
            <h1 className="border border-b-2 w-[424px] mx-auto mt-4"></h1>
            </div>
            <div>

            <div>
         


            <div className='grid grid-cols-2 gap-9 justify-center items-center mt-24'>
                {
                    offered.map(item =>   <div key={item.id} className='space-y-8'>
                    <div className='flex gap-10 justify-center '>
                        <div className='  w-16'>
                            <h1 className="  w-[94px] " > <img className='name' src={item.image} alt="" /></h1>
                           
                        </div>
                        <div>
                            <div className='flex gap-6'>
                                <h1>{item.name} ------------------</h1>
                                <h1 className='text-[#BB8506]'>${item.price}</h1>
                            </div>
                            <h1>{item.recipe}</h1>
                        </div>



                    </div>
                </div>)
                }
             

            </div>
         
         
         
         
                 </div>
            </div>
            <div>

            <Cover
            img={img2}
            title={'DESSERTS'}
            p={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            
            ></Cover>
            </div>


            <div className='grid grid-cols-2 gap-9 justify-center items-center mt-24'>
                {
                    dessert.map(item =>   <div key={item.id} className='space-y-8'>
                    <div className='flex gap-10 items-center '>
                        <div className='  w-16'>
                            <h1 className="  w-[94px] " > <img className='name' src={item.image} alt="" /></h1>
                           
                        </div>
                        <div>
                            <div className='flex gap-6'>
                                <h1>{item.name} ------------------</h1>
                                <h1 className='text-[#BB8506]'>${item.price}</h1>
                            </div>
                            <h1>{item.recipe}</h1>
                        </div>



                    </div>
                </div>)
                }
         </div>
            <div>

            <Cover
            img={img2}
            title={'PIZZA'}
            p={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            
            ></Cover>
            </div>


            <div className='grid grid-cols-2 gap-9 justify-center items-center mt-24'>
                {
                    pizza.map(item =>   <div key={item.id} className='space-y-8'>
                    <div className='flex gap-10 items-center '>
                        <div className='  w-16'>
                            <h1 className="  w-[94px] " > <img className='name' src={item.image} alt="" /></h1>
                           
                        </div>
                        <div>
                            <div className='flex gap-6'>
                                <h1>{item.name} ------------------</h1>
                                <h1 className='text-[#BB8506]'>${item.price}</h1>
                            </div>
                            <h1>{item.recipe}</h1>
                        </div>



                    </div>
                </div>)
                }
         </div>
            <div>

            <Cover
            img={img2}
            title={'SALADS'}
            p={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            
            ></Cover>
            </div>


            <div className='grid grid-cols-2 gap-9 justify-center items-center mt-24'>
                {
                    salad.map(item =>   <div key={item.id} className='space-y-8'>
                    <div className='flex gap-10 items-center '>
                        <div className='  w-16'>
                            <h1 className="  w-[94px] " > <img className='name' src={item.image} alt="" /></h1>
                           
                        </div>
                        <div>
                            <div className='flex gap-6'>
                                <h1>{item.name} ------------------</h1>
                                <h1 className='text-[#BB8506]'>${item.price}</h1>
                            </div>
                            <h1>{item.recipe}</h1>
                        </div>



                    </div>
                </div>)
                }
         </div>
         
         
         
         
                 </div>
          
        
    );
};

export default Menu;