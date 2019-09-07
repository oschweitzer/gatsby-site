import React from 'react';
import {FaLightbulb} from 'react-icons/all';
import useDarkMode from 'use-dark-mode';
import styles from './theme-toggle.module.scss';

const ThemeToggle = () => {
  const darkMode = useDarkMode(true);

  return (
    <div className={styles.themeToggle}>
      <div className='field' title={"Activate/deactivate Dark mode"}>

        <input id='switchRoundedDefault' type='checkbox' name='switchRoundedDefault' className='switch is-rounded is-info'
               checked={darkMode.value} onChange={darkMode.toggle} />
          <label htmlFor='switchRoundedDefault'><FaLightbulb /></label>
      </div>
    </div>
);
};

export default ThemeToggle;
