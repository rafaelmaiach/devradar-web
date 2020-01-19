import React from 'react';

import DevItem from '../DevItem';
import Loading from '../Loading';

const Main = ({ devs, isLoading }) => (
  <main>
    {
      isLoading ? (
        <Loading width={150} height={150} />
      ) : (
        <ul>
          {devs.map(dev => <DevItem key={dev._id} dev={dev} />)}
        </ul>
      )
    }
  </main>
);

export default Main;
