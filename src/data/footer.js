import { GoLocation } from 'react-icons/go';
import { BsTelephone, BsPeople } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { HiOutlineLogin, HiOutlineLink } from 'react-icons/hi';
import css from '../components/footerSection/Footer.module.css';

export const FooterData = [
  {
    title: 'Contact Us',
    firstIcon: <GoLocation className={css.icon} />,
    firstContent: '111 north avenue Orlando, FL 32801',
    secondIcon: <BsTelephone className={css.icon} />,
    secondContent: <a href="tel:322-309-3489">322-309-3489</a>,
    thirdIcon: <MdOutlineAlternateEmail className={css.icon} />,
    thirdContent: (
      <a href="mailto:support@beautyShop.com">support@beautyShop.com</a>
    ),
  },
  {
    title: 'Account',
    firstIcon: <HiOutlineLogin className={css.icon} />,
    firstContent: 'Sing In',
  },
  {
    title: 'Company',
    firstIcon: <BsPeople className={css.icon} />,
    firstContent: 'About us',
  },
  {
    title: 'Resources',
    firstIcon: <HiOutlineLink className={css.icon} />,
    firstContent: 'Safety Privacy & Terms',
  },
];
