import css from './FooterElement.module.css';

const FooterElement = ({
  title,
  firstIcon,
  secondIcon,
  thirdIcon,
  firstContent,
  secondContent,
  thirdContent,
}) => {
  return (
    <div className={css.block}>
      <div className={css.detail}>
        <span>{title}</span>
        <span className={css.pngLine}>
          {firstIcon}
          <span>{firstContent}</span>
        </span>
        <span className={css.pngLine}>
          {secondIcon}
          <span>{secondContent}</span>
        </span>
        <span className={css.pngLine}>
          {thirdIcon}
          <span>{thirdContent}</span>
        </span>
      </div>
    </div>
  );
};

export default FooterElement;
