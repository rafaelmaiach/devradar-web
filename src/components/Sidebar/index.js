import React from 'react';
import DevForm from '../DevForm';

const Sidebar = ({ handleAddDev }) => (
  <aside>
    <strong>Cadastrar</strong>
    <DevForm onSubmit={handleAddDev} />
  </aside>
);

export default Sidebar;
