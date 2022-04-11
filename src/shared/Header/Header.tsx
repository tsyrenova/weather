import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icon/global/GlobalSvgSelector';
import styles from './Header.module.scss';

type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: 'city-1', label: 'Москва' },
    { value: 'city-2', label: 'Санкт-Петербург' },
    { value: 'city-3', label: 'Екатеринбург' }
  ];

  const [theme, setTheme] = useState('light');

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === 'dark' ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: '100'
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === 'dark' ? '#fff' : '#000'
    })
  };

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;
    const components = [
      'body-background',
      'components-background',
      'card-background',
      'card-shadow',
      'text-color'
    ];

    components.forEach((component) => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme})`
      );
    });
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id='header-logo' />
        </div>
        <div className={styles.title}>React weather</div>
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
