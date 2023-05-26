import Logo from '../../assets/logo.png';
import { GoLocation } from 'react-icons/go';
import { BsTelephone, BsPeople } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { HiOutlineLogin, HiOutlineLink } from 'react-icons/hi';
import css from './Footer.module.css';

import FooterElement from '../FooterElement/FooterElement';

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="Logo" />
          <span>Beauty shop</span>
        </div>

        <FooterElement
          className={css.block}
          title={'Contact Us'}
          firstIcon={<GoLocation className={css.icon} />}
          firstContent={'111 north avenue Orlando, FL 32801'}
          secondIcon={<BsTelephone className={css.icon} />}
          secondContent={<a href="tel:322-309-3489">322-309-3489</a>}
          thirdIcon={<MdOutlineAlternateEmail className={css.icon} />}
          thirdContent={
            <a href="mailto:support@beautyShop.com">support@beautyShop.com</a>
          }
        />

        <FooterElement
          className={css.block}
          title={'Account'}
          firstIcon={<HiOutlineLogin className={css.icon} />}
          firstContent={'Sing In'}
        />

        <FooterElement
          className={css.block}
          title={'Company'}
          firstIcon={<BsPeople className={css.icon} />}
          firstContent={'About us'}
        />

        <FooterElement
          className={css.block}
          title={'Resources'}
          firstIcon={<HiOutlineLink className={css.icon} />}
          firstContent={'Safety Privacy & Terms'}
        />
      </div>

      <div className={css.copyRight}>
        <span>Copyright ©2023 by Beauty Shop, Inc.</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
