import React from 'react';
import { List, Link } from './Footer.styles';

const Footer = () => (
  <footer>
    <nav>
      <List>
        <li>
          <Link href='https://github.com/juunegreiros/'>github</Link>
        </li>
        <li>
          <Link href='https://www.linkedin.com/in/juliananegreiros/'>linkedin</Link>
        </li>
        <li>
          <Link href='https://twitter.com/juunegreiros'>twitter</Link>
        </li>
        <li>
          <Link href='https://open.spotify.com/user/22lue2jtnvxx4fiwporbtf3dy'>spotify</Link>
        </li>
        <li>
          <Link href='mailto:negreirosjuu@gmail.com'>e-mail</Link>
        </li>
      </List>
    </nav>
  </footer>
);

export default Footer;
