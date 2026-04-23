import img from '../../../../../assets/home/chef-service.jpg'

const Benar2 = () => {
    
    return (
        <div>
            <div className="hero min-h-screen w-[90%] h-[572px] mx-auto mt-14" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" bg-white mt-auto text-black font1">
                        <h1 className="mb-5 text-[45px]  font-normal mt-[30px] ">Bistro Boss</h1>
                        <p className="mb-8 lg:w-[762px] mt-[30px] font-normal ml-6 mr-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Benar2;