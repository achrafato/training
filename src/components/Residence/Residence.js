import "./residence.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import SwiperCore, { Navigation, Autoplay, Pagination, Parallax } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";

import { useRef } from "react";

const Configs = {
  autoplay: { delay: 3000, disableOnInteraction: false },
  navigation: true, //arow navigation
  pagination: { clickable: true }, //click on round pagination
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: "auto"
};

const Residence = () => {
  const swiperRef = useRef();

  const onInit = (Swiper) => {
    swiperRef.current = Swiper;
  };

  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };
  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  SwiperCore.use([Navigation, Autoplay, Parallax, Pagination]);
  return (
    <div className="residence" id="residence">
      <span>Best Choise</span>
      <p>
        Populare Residences<span>.</span>
      </p>

      <div
        className="residences-bunch"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <Swiper
          tag="section"
          wrapperTag="ul"
          onInit={onInit}
          {...Configs}
          className="mySwiper"
        >
          <SwiperSlide className="single-resident">
            <div>
              <img
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5"
                alt="pic"
              />

              <div className="resident-details">
                <h2 className="price">
                  <span>$</span> 43,520
                </h2>
                <h3>Alivia Private gardin</h3>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-resident">
            <div>
              <img
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5"
                alt="pic"
              />

              <div className="resident-details">
                <h2 className="price">
                  <span>$</span> 43,520
                </h2>
                <h3>Alivia Private gardin</h3>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-resident">
            <div>
              <img
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5"
                alt="pic"
              />

              <div className="resident-details">
                <h2 className="price">
                  <span>$</span> 43,520
                </h2>
                <h3>Alivia Private gardin</h3>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-resident">
            <div>
              <img
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5"
                alt="pic"
              />

              <div className="resident-details">
                <h2 className="price">
                  <span>$</span> 43,520
                </h2>
                <h3>Alivia Private gardin</h3>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-resident">
            <div>
              <img
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5"
                alt="pic"
              />

              <div className="resident-details">
                <h2 className="price">
                  <span>$</span> 43,520
                </h2>
                <h3>Alivia Private gardin</h3>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-resident">
            <div>
              <img
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5"
                alt="pic"
              />

              <div className="resident-details">
                <h2 className="price">
                  <span>$</span> 43,520
                </h2>
                <h3>Alivia Private gardin</h3>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-resident">
            <div>
              <img
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5"
                alt="pic"
              />

              <div className="resident-details">
                <h2 className="price">
                  <span>$</span> 43,520
                </h2>
                <h3>Alivia Private gardin</h3>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-resident">
            <div>
              <img
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5"
                alt="pic"
              />

              <div className="resident-details">
                <h2 className="price">
                  <span>$</span> 43,520
                </h2>
                <h3>Alivia Private gardin</h3>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Residence;
