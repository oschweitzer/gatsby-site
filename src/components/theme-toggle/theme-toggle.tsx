import React, { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import * as themeToggleStyles from './theme-toggle.module.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  useEffect(() => {
    if (darkMode) {
      document.getElementsByTagName('body')[0].className = 'dark-mode';
    } else {
      document.getElementsByTagName('body')[0].className = 'light-mode';
    }
  }, [darkMode]);

  return (
    <div className={themeToggleStyles.themeToggle}>
      <div className="field" title={'Activate/deactivate Dark mode'}>
        <button
          aria-label="Dark mode button"
          className={`button ${themeToggleStyles.darkModeButton}`}
          onClick={() => setDarkMode(!darkMode)}>
          <span style={{ color: 'var(--textNormal)' }}>{darkMode ? <FaSun /> : <FaMoon />}</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
