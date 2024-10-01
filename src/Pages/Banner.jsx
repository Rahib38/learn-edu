import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[650px]"
      >
        <SwiperSlide>
          <div
            className="hero"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/CKKxN6S/course-5.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <img
                  className="mx-auto container w-48"
                  src="../../public/images/logo.png"
                  alt=""
                />
                <h1 className="mb-5 text-5xl font-bold">
                  Complete Online Courses
                </h1>
                <p className="mb-5">
                  Maecenas rutrum viverra sapien sed fermentum. Morbi tempor
                  odio eget lacus tempus pulvinar. Praesent vel nisl fermentum,
                  gravida augue ut, fermentum ipsum.
                </p>

                <div className="flex justify-center gap-10">
                  <button className="btn bg-orange-500 text-white">
                    Learn More
                  </button>
                  <button className="btn bg-orange-500 text-white">
                    See all Courses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/CKKxN6S/course-5.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <img
                  className="mx-auto container w-48"
                  src="../../public/images/logo.png"
                  alt=""
                />
                <h1 className="mb-5 text-5xl font-bold">
                  Complete Online Courses
                </h1>
                <p className="mb-5">
                  Maecenas rutrum viverra sapien sed fermentum. Morbi tempor
                  odio eget lacus tempus pulvinar. Praesent vel nisl fermentum,
                  gravida augue ut, fermentum ipsum.
                </p>

                <div className="flex justify-center gap-10">
                  <button className="btn bg-orange-500 text-white">
                    Learn More
                  </button>
                  <button className="btn bg-orange-500 text-white">
                    See all Courses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};
export default Banner;
