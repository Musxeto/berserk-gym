import React from "react";
import "./Testimonials.css";

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    img: "/pic1.png",
    name: "Erenrst Wing",
    review:
      "amet consectetur adipisicing elit. Odit maiores, facilis corporis officiis adipisicing elit. Odit maiores, facilis corporis officiis.adipisicing elit. Odit ",
  },
  {
    img: "/pic1.png",
    name: "Hilray Wing",
    review:
      "amet consectetur adipisicing elit. Odit maiores, facilis corporis officiis.adipisicing elit. Odit maiores, facilis corporis officiis corporis officiis",
  },
  {
    img: "/pic1.png",
    name: "Erenrst Double",
    review:
      "amet consectetur adipisicing elit. Odit maiores, facilis corporis officiis adipisicing elit. Odit maiores, facilis corporis officiis.adipisicing elit. Odit ",
  },
  {
    img: "/pic1.png",
    name: "Dribnksd Rring",
    review:
      "amet consectetur adipisicing elit. Odit maiores,adipisicing elit. Odit maiores, facilis corporis officiis facilis corporis officiis corporis officiis",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {data.map((dat, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src="/pic1.png" alt="avatar" />
              </div>

              <h5 className="clients__name">{dat.name}</h5>
              <small className="clients__review">{dat.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
