import React from 'react';
import { PageProps } from './Page.types';

const Page: React.FC<PageProps> = ({ children }) => (
  <div>
    <header> the header</header>
    <main>{children}</main>
    <footer>footer</footer>
  </div>
);

export default Page;
