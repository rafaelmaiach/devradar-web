import React from 'react';
import DevForm from '../DevForm';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Sidebar = ({ handleAddDev, formError, t }) => {
  const { language } = i18n;

  const setLanguage = (lang) => () => i18n.changeLanguage(lang);

  const setEnLanguage = setLanguage('en');
  const setPtLanguage = setLanguage('pt');

  const languageSelected = language === 'en' ? 'en-selected' : 'pt-selected';

  return (
    <aside>
      <div className="sidebar-header">
        <strong className="sidebar-title">
          {t('form.title')}
        </strong>
        <div className={`sidebar-language ${languageSelected}`}>
          <button onClick={setEnLanguage} >EN</button>
          <span> / </span>
          <button onClick={setPtLanguage}>PT</button>
        </div>
      </div>
      <DevForm onSubmit={handleAddDev} />
    </aside>
  );
};

export default withTranslation()(Sidebar);
