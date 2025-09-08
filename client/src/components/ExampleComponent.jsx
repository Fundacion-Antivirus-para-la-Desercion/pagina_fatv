import React from 'react';
import { useTranslation } from 'react-i18next';

function ExampleComponent() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('homepage.title')}</h1>
      <p>{t('homepage.description')}</p>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}

export default ExampleComponent;
