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
        <button aria-label='Dark mode button' className={['button', styles.darkModeButton].join(' ')}
                onClick={darkMode.toggle}>
          <span style={{color: 'var(--textNormal)'}}>
          <FaSun /> / <FaMoon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
