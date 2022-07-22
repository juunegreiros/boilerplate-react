import React from 'react';
import {
  HeaderContainer,
  Checkbox,
  Toggle,
  List,
  HeaderLink,
  Navbar,
  ExternalLink,
  IconWrapper,
  RightContainer,
  ImageLink,
} from './Header.styles';
import { ReactComponent as EmailLogo } from '../../assets/email.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/linkedin.svg';
import { ReactComponent as GithubLogo } from '../../assets/github.svg';
import { ReactComponent as BehanceLogo } from '../../assets/behance.svg';
import { ReactComponent as Daruma } from '../../assets/daruma.svg';
import { ReactComponent as DarumaDark } from '../../assets/daruma-dark.svg';

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
      <Navbar>
        <List bigSpace>
          <li>
            <HeaderLink to='/'>Sobre mim</HeaderLink>
          </li>
          <li>
            <HeaderLink to='/projects'>Projetos</HeaderLink>
          </li>
        </List>
      </Navbar>
      <ImageLink to='/'>
        <Daruma />
      </ImageLink>
      <RightContainer>
        <nav>
          <List>
            <li>
              <ExternalLink href='https://github.com/darumarts/' aria-label='github'>
                <IconWrapper>
                  <GithubLogo />
                </IconWrapper>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href='https://www.linkedin.com/in/renansilva/' aria-label='linkedin'>
                <IconWrapper>
                  <LinkedinLogo />
                </IconWrapper>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href='https://open.spotify.com/user/22lue2jtnvxx4fiwporbtf3dy'
                aria-label='spotify'
              >
                <IconWrapper>
                  <BehanceLogo />
                </IconWrapper>
              </ExternalLink>
            </li>
            {/* <li>
              <ExternalLink href='mailto:negreirosjuu@gmail.com' aria-label='e-mail'>
                <IconWrapper>
                  <EmailLogo />
                </IconWrapper>
              </ExternalLink>
            </li> */}
          </List>
        </nav>
        <Checkbox id='toggle-theme' type='checkbox' onChange={handleChange} />
        <Toggle htmlFor='toggle-theme' />
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
