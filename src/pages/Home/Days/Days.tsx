import { Card } from './Card';
import styles from './Days.module.scss';
import { Tabs } from './Tabs';

type Props = {};

export type Day = {
  id: number;
  day_name: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
};

const Days = (props: Props) => {
  const days: Day[] = [
    {
      id: 0,
      day_name: 'Сегодня',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно'
    },
    {
      id: 1,
      day_name: 'Завтра',
      day_info: '29 авг',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'небольшой дождь и солнце'
    },
    {
      id: 2,
      day_name: 'Ср',
      day_info: '30 авг',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'небольшой дождь'
    },
    {
      id: 3,
      day_name: 'Чт',
      day_info: '28 авг',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно'
    },
    {
      id: 4,
      day_name: 'Пт',
      day_info: '28 авг',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно'
    },
    {
      id: 5,
      day_name: 'Сб',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно'
    },
    {
      id: 6,
      day_name: 'Вс',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно'
    }
  ];
  return (
    <>
      <Tabs />
      <div className={styles.days}>
        {days.map((day: Day) => (
          <Card key={day.id} day={day} />
        ))}
      </div>
    </>
  );
};

export { Days };
