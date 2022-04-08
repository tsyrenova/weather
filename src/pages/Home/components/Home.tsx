import styles from './Home.module.scss';
import { ThisDay } from './ThisDay/ThisDay';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <ThisDay />
    </div>
  );
};

export { Home };
