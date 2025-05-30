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
            ></Slide>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
        <Slide 
        image={bgImg2}
        text={"Volunteering beyond all borders"}
        ></Slide>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
        <Slide 
        image={bgImg3} 
        text={"Uniting communities with care"}
        ></Slide>
        </SwiperSlide>
        {/* slide 4 */}
        <SwiperSlide>
        <Slide 
        image={bgImg4}
        text={"Empowering lives through service"}
        ></Slide>
        </SwiperSlide>
        {/* slide 5 */}
        <SwiperSlide>
        <Slide 
        image={bgImg5}
        text={"Inspiring hope through action"}
        ></Slide>
        </SwiperSlide>
       </Swiper>
    );
};

export default Carousel;