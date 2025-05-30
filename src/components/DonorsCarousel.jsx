import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import DonorsSlide from './DonorsSlide';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const DonorsCarousel = () => {
    return (
        <Swiper
        modules={[Pagination,Autoplay,Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={false}
        autoplay={{
            delay:5000,
            disableOnInteraction:false,
        }}
        navigation={true}
        className='mySwiper'
        >
            <SwiperSlide>
                <DonorsSlide></DonorsSlide>
            </SwiperSlide>
            <SwiperSlide>
                <DonorsSlide></DonorsSlide>
            </SwiperSlide>
            <SwiperSlide>
                <DonorsSlide></DonorsSlide>
            </SwiperSlide>
            <SwiperSlide>
                <DonorsSlide></DonorsSlide>
            </SwiperSlide>
        </Swiper>
    );
};

export default DonorsCarousel;