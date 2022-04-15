import { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunk/fetchCurrentWeather';
import { Days } from '../Days/Days';
import { ThisDay } from '../ThisDay/ThisDay';
import { ThisDayInfo } from '../ThisDayInfo/ThisDayInfo';
import styles from './Home.module.scss';

type Props = {};

const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather('paris'));
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export { Home };
