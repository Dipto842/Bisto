
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
import img5 from '../../../../assets/home/slide5.jpg'

const Benar = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-[#D99904] text-[20px] mb-12">---From 11:00am to 10:00pm---</h1>
                <h1 className="text-[30px] mb-7">ORDER ONLINE</h1>
            </div>

            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper w-[47.25rem]"
                >
                    <SwiperSlide>

                        <img src={img1} alt="" />
                        <h1 className=''>Salads</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                    </SwiperSlide>
                  

                </Swiper>
            </div>


        </div>

    );
};

export default Benar;