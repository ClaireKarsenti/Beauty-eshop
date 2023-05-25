import React from 'react';
import css from '../testimonials/Testimonials.module.css';
import TestimonialHero from '../../assets/testimonialHero.png';

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
    </div>
  );
};

export default Testimonials;
