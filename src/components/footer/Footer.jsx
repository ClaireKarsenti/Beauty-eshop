import Logo from '../../assets/logo.png';
import { GoLocation } from 'react-icons/go';
import { BsTelephone, BsPeople } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { HiOutlineLogin, HiOutlineLink } from 'react-icons/hi';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="Logo" />
          <span>Beauty shop</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <GoLocation className={css.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className={css.pngLine}>
              <BsTelephone className={css.icon} />
              <a href="tel:322-309-3489">322-309-3489</a>
            </span>
            <span className={css.pngLine}>
              <MdOutlineAlternateEmail className={css.icon} />
              <a href="mailto:support@beautyShop.com">support@beautyShop.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <HiOutlineLogin className={css.icon} />
              <span>Sign In</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <BsPeople className={css.icon} />
              <span>About us</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <HiOutlineLink className={css.icon} />
              <span>Safety Privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright ©2023 by Beauty Shop, Inc.</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
