import Usemenu from "../../../../castsomgug/Usemenu/Usemenu";

const Offear = () => {
   const [menu] = Usemenu();
     const offered = menu.filter((item) => item.discount );
   const salad = menu.filter((item) => item.category === "salad");
   const dessert = menu.filter((item) => item.category === "dessert");
   const pizza = menu.filter((item) => item.category === "pizza");
  
    
    return (
        <div>
            <div>



                <div className='flex gap-9 justify-center items-center mt-24 '>
                    <div className='space-y-8'>
                        <div className='flex gap-6 justify-center '>
                            <div className=' w-16'>
                                <h1 className="name "></h1>
                            </div>
                            <div>
                                <div className='flex gap-6'>
                                    <h1> ROAST DUCK BREAST ------------------</h1>
                                    <h1 className='text-[#BB8506]'>$14.5</h1>
                                </div>
                                <h1>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce </h1>
                            </div>



                        </div>
                        <div className='flex gap-6 justify-center '>
                            <div className=' w-16'>
                                <h1 className="name "></h1>
                            </div>
                            <div>
                                <div className='flex gap-6'>
                                    <h1>ROAST DUCK BREAST ------------------</h1>
                                    <h1 className='text-[#BB8506]'>$14.5</h1>
                                </div>
                                <h1>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</h1>
                            </div>



                        </div>
                       
                    </div>
                 


                </div>




            </div>
        </div>
    );
};

export default Offear;