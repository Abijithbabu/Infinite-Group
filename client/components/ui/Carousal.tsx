"use client";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface CarousalProps {
  breakpoints?: { sm: number; md: number; lg: number };
  children: React.ReactNode;
}
const Carousel: React.FC<CarousalProps> = ({ breakpoints, children }) => {
  const sm = breakpoints?.sm ?? 1;
  const md = breakpoints?.md ?? 2;
  const lg = breakpoints?.lg ?? 3;
  return (
    <div className="relative w-full">
      <div className="absolute top-4 lg:top-0 right-12 lg:right-20 z-10 flex gap-2">
        <button className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-white border-opacity-10 !w-10 !h-10 transition-all duration-500 rounded-full hover:bg-white">
          <svg
            className="h-5 w-5 text-white group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-white border-opacity-10 !w-10 !h-10 transition-all duration-500 rounded-full hover:bg-white">
          <svg
            className="h-5 w-5 text-white group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="pt-16">
        <Swiper
          loop={true}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1920: { slidesPerView: lg, spaceBetween: 30 },
            1028: { slidesPerView: md, spaceBetween: 30 },
            990: { slidesPerView: sm, spaceBetween: 0 },
          }}
          modules={[Navigation]}
          className="multiple-slide-carousel"
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
