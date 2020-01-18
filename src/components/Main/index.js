import React from 'react';

import DevItem from '../DevItem';

const Main = ({ devs }) => (
  <main>
    <ul>
      {devs.map(dev => <DevItem key={dev._id} dev={dev} />)}
    </ul>
  </main>
);

export default Main;
