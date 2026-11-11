import './banner.scss';
import BannerHome from '../../../img/Featured Recipe.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';

export default function Banner() {
  return (
    <section className='container'>
      <Swiper 
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper">
        <SwiperSlide>
        <img src={BannerHome} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={BannerHome} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={BannerHome} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={BannerHome} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={BannerHome} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
