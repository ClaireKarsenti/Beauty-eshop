import React from 'react';
import css from '../testimonials/Testimonials.module.css';
import TestimonialHero from '../../assets/testimonialHero.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialsData } from '../../data/testimonials';

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            So many amazing brands and products hit shelves that it can feel
            tough to keep track, let alone choose a favorite (or a few).
          </span>
        </div>

        <img src={TestimonialHero} alt="" />

        <div className={css.container}>
          <span>200k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>

      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousel}
        >
          {TestimonialsData.map((testimonial) => (
            <SwiperSlide>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
