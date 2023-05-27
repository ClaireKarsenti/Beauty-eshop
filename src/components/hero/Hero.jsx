import css from './Hero.module.css';
import HeroImg from '../../assets/hero.png';
import { HiShoppingBag } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Hero = () => {
  const transition = { duration: 3, type: 'spring' };

  return (
    <div className={css.container}>
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>

      <div className={css.wrapper}>
        <motion.div
          initial={{ bottom: '2rem' }}
          whileInView={{ bottom: '0rem' }}
          className={css.blueCircle}
          transition={transition}
        ></motion.div>
        <motion.img
          initial={{ bottom: '-2rem' }}
          whileInView={{ bottom: '0rem' }}
          transition={transition}
          src={HeroImg}
          alt=""
          aria-hidden="true"
          width={600}
        />
        <div className={css.cart2}>
          <HiShoppingBag />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.8m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>200k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
