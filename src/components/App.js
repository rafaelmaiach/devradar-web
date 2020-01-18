import React, { useEffect, useState } from 'react';

import api from '../services/api';

import HomeScreen from './HomeScreen';
import Main from './Main';
import Sidebar from './Sidebar';

function App() {
  const [devs, setDevs] = useState([]);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    };

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    const devAlreadyRegistered = devs.find(dev => dev._id === response.data._id);

    if (devAlreadyRegistered) {
      setFormError(true);
      return;
    }

    setDevs([...devs, response.data]);
    setFormError(false);
  }

  return (
    <>
      <HomeScreen />
      <section id="dev-radar-content" className="content">
        <Sidebar handleAddDev={handleAddDev} formError={formError} />
        <Main devs={devs} />
      </section>
    </>
  );
}

export default App;
