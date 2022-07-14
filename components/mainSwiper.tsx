import type { NextPage } from 'next'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const mainSwiper: NextPage = () => {
  return (
    <div className="flex overflow-hidden">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="w-screen" src="/images/swiper/swiper1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-screen" src="/images/swiper/swiper2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-screen" src="/images/swiper/swiper3.jpg" alt="" /></SwiperSlide>
    </Swiper>
  </div>

  )
}

export default mainSwiper
