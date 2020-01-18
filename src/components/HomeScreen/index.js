import React from 'react';
import { ReactComponent as ScrollIcon } from '../../assets/scroll-icon.svg';

import scrollToContent from '../../utils/scrollToContent';

const scroll = () => scrollToContent('#dev-radar-content');

const HomeScreen = () => (
  <section className="home-screen">
    <div className="home-screen__content">
      <h1>
        <span>DEV</span>
        <span>RADAR</span>
      </h1>
      <ScrollIcon className="bounce" onClick={scroll} />
    </div>
  </section>
);

export default HomeScreen;
