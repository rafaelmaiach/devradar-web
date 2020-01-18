import React, { useEffect, useState } from 'react';

import api from '../services/api';

import HomeScreen from './HomeScreen';
import Main from './Main';
import Sidebar from './Sidebar';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    };

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <>
      <HomeScreen />
      <section id="dev-radar-content" className="content">
        <Sidebar handleAddDev={handleAddDev} />
        <Main devs={devs} />
      </section>
    </>
  );
}

export default App;
