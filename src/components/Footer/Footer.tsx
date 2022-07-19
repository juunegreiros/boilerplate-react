import React from 'react';
import { List, Link, IconWrapper, Item } from './Footer.styles';
import { ReactComponent as EmailLogo } from '../../assets/email.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/linkedin.svg';
import { ReactComponent as GithubLogo } from '../../assets/github.svg';
import { ReactComponent as SpotifyLogo } from '../../assets/spotify.svg';
import { ReactComponent as TwitterLogo } from '../../assets/twitter.svg';

const Footer = () => (
  <footer>
    <nav>
      <List>
        <Item>
          <Link href='https://github.com/juunegreiros/' aria-label='github'>
            <IconWrapper>
              <GithubLogo />
            </IconWrapper>
          </Link>
        </Item>
        <Item>
          <Link href='https://www.linkedin.com/in/juliananegreiros/' aria-label='linkedin'>
            <IconWrapper>
              <LinkedinLogo />
            </IconWrapper>
          </Link>
        </Item>
        <Item>
          <Link href='https://twitter.com/juunegreiros' aria-label='twitter'>
            <IconWrapper>
              <TwitterLogo />
            </IconWrapper>
          </Link>
        </Item>
        <Item>
          <Link href='https://open.spotify.com/user/22lue2jtnvxx4fiwporbtf3dy' aria-label='spotify'>
            <IconWrapper>
              <SpotifyLogo />
            </IconWrapper>
          </Link>
        </Item>
        <Item>
          <Link href='mailto:negreirosjuu@gmail.com' aria-label='e-mail'>
            <IconWrapper>
              <EmailLogo />
            </IconWrapper>
          </Link>
        </Item>
      </List>
    </nav>
  </footer>
);

export default Footer;
