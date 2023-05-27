import FooterElement from '../footerElement/FooterElement';
import { FooterData } from '../../data/footer';
import Logo from '../../assets/logo.png';
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

        {FooterData.map((data, index) => (
          <FooterElement
            key={index}
            className={css.block}
            title={data.title}
            firstIcon={data.firstIcon}
            firstContent={data.firstContent}
            secondIcon={data.secondIcon}
            secondContent={data.secondContent}
            thirdIcon={data.thirdIcon}
            thirdContent={data.thirdContent}
          />
        ))}
      </div>

      <div className={css.copyRight}>
        <span>Copyright ©2023 by Beauty Shop, Inc.</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
