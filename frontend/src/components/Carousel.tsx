import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = () => {
  // This example uses static images, replace them with your fetched products
  return (
    <div>
      <h2>Recommended Products!</h2>
      <Swiper spaceBetween={50} slidesPerView={3}>
        {/* Map through your products here */}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
