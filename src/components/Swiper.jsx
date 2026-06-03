import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import s8 from "../assets/s8.png";

export default function SwiperMain() {
  return (
    <div className="py-7">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img
            src={s8}
            className="w-full rounded-xl"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={s8}
            className="w-full rounded-xl"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={s8}
            className="w-full rounded-xl"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}