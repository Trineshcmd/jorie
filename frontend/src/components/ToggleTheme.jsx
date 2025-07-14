import React from 'react';

const ToggleTheme = ({ theme, setTheme }) => {
  return (
    <div className="toggle-theme">
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ToggleTheme;
