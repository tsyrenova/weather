import { GlobalSvgSelector } from '../../../assets/icon/global/GlobalSvgSelector';
import { Day } from './Days';
import styles from './Days.module.scss';

type Props = {
  day: Day;
};

const Card = ({ day }: Props) => {
  const { day_name, day_info, icon_id, temp_day, temp_night, info } = day;

  return (
    <div className={styles.card}>
      <div className={styles.day__name}>{day_name}</div>
      <div className={styles.day__info}>{day_info}</div>
      <div className={styles.img}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={styles.temp__day}>{temp_day}</div>
      <div className={styles.temp__night}>{temp_night}</div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

export { Card };
