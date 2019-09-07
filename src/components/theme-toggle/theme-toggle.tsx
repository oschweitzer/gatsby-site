import React from 'react';
import {FaMoon, FaSun} from 'react-icons/all';
import useDarkMode from 'use-dark-mode';
import styles from './theme-toggle.module.scss';

const ThemeToggle = () => {
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark-mode',
    classNameLight: 'light-mode',
    storageKey: "darkMode"}
  );
  const icon = darkMode.value ? <FaMoon color={'#F5F3CE'}/> : <FaSun color={'#F28C38'}/>;

  return (
    <div className={styles.themeToggle}>
      <div className='field' title={"Activate/deactivate Dark mode"}>
        <input aria-label='Dark mode switch' id='switchRoundedDefault' type='checkbox'
               name='switchRoundedDefault' className='switch is-rounded is-info'
               checked={darkMode.value} onChange={darkMode.toggle} />
        <label htmlFor='switchRoundedDefault'>{icon}</label>
      </div>
    </div>
  );
};

export default ThemeToggle;
