import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/slide-1.jpg";
import slide2 from "../assets/slide-2.jpg";
import slide3 from "../assets/slide-3.jpg";
import slide4 from "../assets/slide-4.jpg";
import slide5 from "../assets/slide-5.jpeg";

export default function Banner() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: false }}
    >
      <SwiperSlide>
        <div
          className="hero h-[600px]"
          style={{
            backgroundImage: `url(${slide1})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold">Welcome to Adventurea</h1>
              <p className="mb-5">
                Explore the beauty of nature with our exclusive mountain treks
                and eco-adventures.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero h-[600px]"
          style={{
            backgroundImage: `url(${slide2})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold">Welcome to Adventurea</h1>
              <p className="mb-5">
                Explore the beauty of nature with our exclusive mountain treks
                and eco-adventures.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero h-[600px]"
          style={{
            backgroundImage: `url(${slide3})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold">Welcome to Adventurea</h1>
              <p className="mb-5">
                Explore the beauty of nature with our exclusive mountain treks
                and eco-adventures.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero h-[600px]"
          style={{
            backgroundImage: `url(${slide4})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold">Welcome to Adventurea</h1>
              <p className="mb-5">
                Explore the beauty of nature with our exclusive mountain treks
                and eco-adventures.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero h-[600px]"
          style={{
            backgroundImage: `url(${slide5})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold">Welcome to Adventurea</h1>
              <p className="mb-5">
                Explore the beauty of nature with our exclusive mountain treks
                and eco-adventures.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
