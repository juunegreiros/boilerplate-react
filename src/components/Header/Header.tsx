import React from 'react';
import { HeaderContainer, Checkbox, Toggle } from './Header.styles';

const Header: React.FC<{ theme: string; setTheme: (theme: string) => void }> = ({
  theme,
  setTheme,
}) => {
  const handleChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <HeaderContainer>
      <Checkbox id='toggle-theme' type='checkbox' onChange={handleChange} />
      <Toggle htmlFor='toggle-theme' />
    </HeaderContainer>
  );
};

export default Header;
