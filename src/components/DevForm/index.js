import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import FormInput from './FormInput';

const DevForm = ({ onSubmit }) => {
  const { t } = useTranslation();

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        console.log(error);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      github_username,
      techs,
      latitude,
      longitude,
    };

    await onSubmit(data);

    setGithubUsername('');
    setTechs('');
  };

  return (
    <form onSubmit={handleSubmit} className="dev-form">
      <FormInput
        id="github_username"
        label={t('form.username')}
        name="github_username"
        required
        value={github_username}
        onChange={setGithubUsername}
      />

      <FormInput
        id="techs"
        label={t('form.techs')}
        name="techs"
        required
        value={techs}
        onChange={setTechs}
      />

      <div className="input-group">
        <FormInput
          type="number"
          id="latitude"
          label={t('form.latitude')}
          name="latitude"
          required
          value={latitude}
          onChange={setLatitude}
        />

        <FormInput
          type="number"
          id="longitude"
          label={t('form.longitude')}
          name="longitude"
          required
          value={longitude}
          onChange={setLongitude}
        />
      </div>

      <button type="submit">
        {t('form.submitButton')}
      </button>
    </form>
  );
}

export default DevForm;
