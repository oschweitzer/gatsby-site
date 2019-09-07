import React from 'react';
import useDarkMode from 'use-dark-mode';
import styles from './theme-toggle.module.scss';

const ThemeToggle = () => {
  const darkMode = useDarkMode(true);

  return (
    <div className={styles.themeToggle}>
      <div className="field">

        <input id="switchRoundedDefault" type="checkbox" name="switchRoundedDefault" className="switch is-rounded is-info"
               checked={darkMode.value} onChange={darkMode.toggle} />
          <label htmlFor="switchRoundedDefault">Dark theme</label>
      </div>
    </div>
);
};

export default ThemeToggle;
