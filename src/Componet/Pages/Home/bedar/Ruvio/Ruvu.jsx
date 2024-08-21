import Usemenu from '../../../../../castsomgug/Usemenu/Usemenu';
import './Ruvu/Ruvu.css'

const Ruvu = () => {
    const [menu] = Usemenu()
    const filtar = menu.filter(item => item.category === 'popular')
    return (
        <div>



            <div className='grid grid-cols-2 gap-9 justify-center items-center mt-24'>
                {
                    filtar.map(item =>   <div key={item.id} className='space-y-8'>
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
    );
};

export default Ruvu;