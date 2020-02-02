import React from 'react';
import { ReactComponent as ScrollIcon } from '../../assets/scroll-icon.svg';

import Loading from '../Loading';

import scrollToContent from '../../utils/scrollToContent';

const scroll = () => scrollToContent('#dev-radar-content');

const HomeScreen = () => (
  <section className="home-screen">
    <div className="home-screen__content">
      <div className="home-screen__radar">
        <Loading width="100%" height="100%" />
      </div>
      <h1>
        <span>DEV</span>
        <span>RADAR</span>
      </h1>
      <ScrollIcon className="bounce" onClick={scroll} />
    </div>
  </section>
);

export default HomeScreen;
