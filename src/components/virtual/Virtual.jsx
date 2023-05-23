import ReactCompareImage from 'react-compare-image';
import css from './Virtual.module.css';
import Shade from '../../assets/shade.png';
import Before from '../../assets/before.png';
import After from '../../assets/after.png';

const Virtual = () => {
  return (
    <div className={css.virtual}>
      <div className={css.left}>
        <span>Virtual try-on</span>
        <span>Never buy the wrong shade again!</span>
        <span>Try Now!</span>
        <img src={Shade} alt="" aria-hidden="true" />
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
