import img from '../../../../../assets/home/chef-service.jpg'

const Benar2 = () => {
    
    return (
        <div>
            <div className="hero min-h-screen w-[1220px] h-[572px] mx-auto mt-14" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-[1096px] bg-white h-[333.67px] mt-[140px]">
                        <h1 className="mb-5 text-5xl font-bold mt-[70px] ">Bistro Boss</h1>
                        <p className="mb-5 w-[762px] mt-[30px] ml-6 mr-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        
                    </div>
                </div>
            </div>
            <div className="text-center mt-24 ">
            <h1 className="mt-5 mb-3 text-[#D99904]">---popular item---</h1>
            <h1 className="border border-b-2 w-[424px] mx-auto mb-2"></h1>
            <h1 className='text-[30px] font-bold' >FROM OUR MENU</h1>
            <h1 className="border border-b-2 w-[424px] mx-auto mt-4"></h1>
            </div>
        </div>
    );
};

export default Benar2;