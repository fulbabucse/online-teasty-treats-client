import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Slider1 from "../../assets/carousel/1.jpg";
import Slider2 from "../../assets/carousel/2.jpg";
import Slider3 from "../../assets/carousel/3.jpg";
import Slider4 from "../../assets/carousel/4.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slider1} alt="Carousel 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Slider2} alt="Carousel 2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Slider3} alt="Carousel 3" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Slider4} alt="Carousel 4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeCarousel;
