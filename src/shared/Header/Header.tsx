import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icon/global/GlobalSvgSelector';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../types/const';
import styles from './Header.module.scss';

type Props = {};

const Header = (props: Props) => {
  const theme = useTheme();

  const options = [
    { value: 'city-1', label: 'Москва' },
    { value: 'city-2', label: 'Санкт-Петербург' },
    { value: 'city-3', label: 'Екатеринбург' }
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.dark ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: '100'
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.dark ? '#fff' : '#000'
    })
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.light ? Theme.dark : Theme.light);
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id='header-logo' />
        </div>
        <div className={styles.title}>Weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id='change-theme' />
        </div>
        <Select
          styles={colorStyles}
          options={options}
          defaultValue={options[0]}
        />
      </div>
    </header>
  );
};

export { Header };
