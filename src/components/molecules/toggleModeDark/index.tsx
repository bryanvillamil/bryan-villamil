// Toggle.js
import React from 'react'
// import { ReactComponent as MoonIcon } from 'icons/moon.svg';
// import { ReactComponent as SunIcon } from 'icons/sun.svg';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <button onClick={toggleTheme} >
      {/* <SunIcon />
      <MoonIcon /> */}
      toggle
    </button>
  );
};

export default Toggle;