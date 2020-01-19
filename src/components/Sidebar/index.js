import React from 'react';
import DevForm from '../DevForm';
import { withTranslation } from 'react-i18next';

const Sidebar = ({ handleAddDev, formError, t }) => (
  <aside>
    <strong>{t('form.title')}</strong>
    <DevForm onSubmit={handleAddDev} />
  </aside>
);

export default withTranslation()(Sidebar);
