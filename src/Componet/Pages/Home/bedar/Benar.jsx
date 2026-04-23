
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

// import required modules
import img1 from '../../../../assets/home/slide1.jpg'
import img2 from '../../../../assets/home/slide2.jpg'
import img3 from '../../../../assets/home/slide3.jpg'
import img4 from '../../../../assets/home/slide4.jpg'


// css

import '../../../GoogleFont/Font.css'

const Benar = () => {
    const navigate  = useNavigate()
    const henderlink=(category)=>{
        navigate(`/our?category=${category}`)
    }
    return (
        <div>
            <div className="text-center ">
                <h1 className="text-[#D99904] text-[20px] mb-12">---From 11:00am to 10:00pm---</h1>
                 <h1 className="border border-b-2 lg:w-[424px] mx-auto mb-2"></h1>
                <h1 className="text-[30px] mb-4 mt-4 text-black font-sans ">ORDER ONLINE</h1>
                 <h1 className="border border-b-2 lg:w-[424px] mx-auto mb-2"></h1>
            </div>

            <div className=' w-[100%] m-auto'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0:{slidesPerView:2},
                      982:{slidesPerView:4},
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper  w-[90%]"
                >
                    <SwiperSlide className='z-0 sticky cursor-pointer'>

                        <img className='w-full lg:h-[404px] ' onClick={henderlink} src={img1} alt="" />
                        <h1 className='z-10  lg:text-[32px] absolute bottom-[4%] lg:right-[35%] right-3 font1 text-white'>Salads</h1>

                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                        <img className='w-full lg:h-[404px] ' onClick={()=>henderlink('pizza')} src={img2} alt="" />
                         <h1 className='z-10  lg:text-[32px] absolute bottom-[4%] lg:right-[35%] right-3 font1 text-white'>pizza</h1>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                        <img className='w-full lg:h-[404px] ' src={img3} alt="" />
                         <h1 className='z-10  lg:text-[32px] absolute bottom-[4%] lg:right-[35%] right-3 font1 text-white'>soups</h1>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                        <img className='w-full lg:h-[404px] ' src={img4} alt="" />
                         <h1 className='z-10  lg:text-[32px] absolute bottom-[4%] lg:right-[35%] right-3 font1 text-white'>desserts</h1>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer '>
                      <img    className='w-full lg:h-[404px] ' src="https://i.ibb.co.com/chnhg894/download-8.jpg" alt="" />
                         <h1 className='z-10  lg:text-[32px] absolute bottom-[4%] lg:right-[35%] right-3 font1 text-white'>drinks</h1>
                    </SwiperSlide>
                  

                </Swiper>
            </div>


        </div>

    );
};

export default Benar;