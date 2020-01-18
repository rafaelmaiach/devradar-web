import React from 'react';
import DevForm from '../DevForm';

const Sidebar = ({ handleAddDev, formError }) => (
  <aside>
    <strong>Cadastrar</strong>
    <DevForm onSubmit={handleAddDev} formError={formError} />
  </aside>
);

export default Sidebar;
