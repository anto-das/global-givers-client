import React from 'react';
import bgImg1 from '../assets/image 1.jpg'
import bgImg2 from '../assets/image 2.jpg'
import bgImg3 from '../assets/image 3.webp'
import bgImg4 from '../assets/image 4.avif'
import bgImg5 from '../assets/image 5.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination,} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slide';

const Carousel = () => {
    return (
       <Swiper
         // install Swiper modules
         modules={[Pagination,Autoplay,Navigation]}
         spaceBetween={30}
         centeredSlides={true}
         loop={true}
         pagination={{
            clickable:true,
         }}
         autoplay={{
            delay:5000,
            disableOnInteraction:false,
         }}
         navigation={true}
       className='mySwiper'
       >
        {/* slide 1 */}
        <SwiperSlide>
            <Slide 
            image={bgImg1}
            text={"Compassionate global change-makers"}
            title={"Join GlobalGivers and become part of a powerful community creating positive change in lives around the world."}
            ></Slide>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
        <Slide 
        image={bgImg2}
        text={"Volunteering beyond all borders"}
        title={"Your small act of kindness today can bring hope, strength, and opportunity to someone in need tomorrow."}
        ></Slide>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
        <Slide 
        image={bgImg3} 
        text={"Uniting communities with care"}
        title={"Together we rise — volunteers, donors, and dreamers building a brighter future for every soul we reach."}
        ></Slide>
        </SwiperSlide>
        {/* slide 4 */}
        <SwiperSlide>
        <Slide 
        image={bgImg4}
        text={"Empowering lives through service"}
        title={"Be the light in someone’s darkness. Give your time, love, or support through GlobalGivers today."}
        ></Slide>
        </SwiperSlide>
        {/* slide 5 */}
        <SwiperSlide>
        <Slide 
        image={bgImg5}
        text={"Inspiring hope through action"}
        title={"Real change begins with you. Join hands with GlobalGivers and help create a world that cares."}
        ></Slide>
        </SwiperSlide>
       </Swiper>
    );
};

export default Carousel;