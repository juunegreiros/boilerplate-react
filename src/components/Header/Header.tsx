import React from 'react';
import { Checkbox, Toggle, HeaderLink } from './Header.styles';

const Header: React.FC<{ theme: string; setTheme: (theme: string) => void }> = ({
  theme,
  setTheme,
}) => {
  const handleChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div>
      <ul>
        <li>
          <HeaderLink to='/'>Sobre mim</HeaderLink>
        </li>
      </ul>
      <div>
        <Checkbox id='toggle-theme' type='checkbox' onChange={handleChange} />
        <Toggle htmlFor='toggle-theme' />
      </div>
    </div>
  );
};

export default Header;
