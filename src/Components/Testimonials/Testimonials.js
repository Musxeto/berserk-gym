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
    img: "/noel.jpg",
    name: "Noel Deyzel",
    review:
      "I joined the gym for its welcoming community, and I wasn't disappointed. The group classes are fun, and I've made great friends along my fitness journey.",
  },
  {
    img: "/lassi.jpg",
    name: "Abdullah Lassi",
    review:
      "I had an amazing experience at the gym. The trainers are highly skilled, and the atmosphere is motivating. I've seen incredible results in just a few weeks!",
  },
  {
    img: "/moiz.jpg",
    name: "Moiz Mogger",
    review:
      "The gym is fantastic! The variety of equipment and classes cater to all fitness levels. The staff is friendly, and the facilities are always clean. Highly recommended!",
  },

  {
    img: "/mus.jpg",
    name: "Mustafa (me)",
    review:
      "The trainers here are dedicated to helping you achieve your goals. They provide personalized workout plans and nutritional advice. It's a game-changer!",
  },
  {
    img: "/michael.jpg",
    name: "Michael Johnson",
    review:
      "I love the positive energy at this gym! The instructors are enthusiastic, and the diverse range of classes keeps things interesting. It's a great place to stay fit and have fun.",
  },
  {
    img: "/braun.jpeg",
    name: "Braun Anderson",
    review:
      "The gym's modern equipment and clean environment make it a top-notch fitness facility. The staff is always ready to assist, creating a comfortable workout experience.",
  },
  {
    img: "/laid.jpg",
    name: "David Laid",
    review:
      "This gym has everything I need for a complete workout. The atmosphere is motivating, and the trainers are knowledgeable. I'm impressed with my fitness progress!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className="heading-big">TESTIMONIALS</div>
      <div className="heading-small">REVIEW FROM CLIENTS</div>
      <div className="blur blur-test"></div>
      <Swiper
        className="container testimonials__container"
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {data.map((dat, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={dat.img} alt="avatar" />
              </div>

              <h5 className="clients__name">{dat.name}</h5>
              <small className="clients__review">{dat.review}</small>
              <br />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
