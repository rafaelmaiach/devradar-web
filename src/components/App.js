import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import api from '../services/api';

import HomeScreen from './HomeScreen';
import Main from './Main';
import Sidebar from './Sidebar';

toast.configure({
  autoClose: 3000,
  position: toast.POSITION.TOP_LEFT,
});

function App() {
  const { t } = useTranslation();
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

    const devAlreadyRegistered = devs.find(dev => dev._id === response.data._id);

    if (devAlreadyRegistered) {
      toast.error(t('form.usernameInvalid'));
      return;
    }

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
