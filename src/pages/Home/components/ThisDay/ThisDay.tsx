import { GlobalSvgSelector } from '../../../../assets/icon/global/GlobalSvgSelector';
import styles from './ThisDay.module.scss';

type Props = {};

const ThisDay = (props: Props) => {
  return (
    <div className={styles.this__day}>
      <div className={styles.top__block}>
        <div className={styles.top__block_wrapper}>
          <div className={styles.this__temp}>20°</div>
          <div className={styles.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id='sunny' />
      </div>
      <div className={styles.bottom__block}>
        <div className={styles.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={styles.this__city}>
          Город: <span>Москва</span>
        </div>
      </div>
    </div>
  );
};

export { ThisDay };
