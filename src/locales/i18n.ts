import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ns1 from './en/ns1.json';

const resources = {
  en: {
    auth: ns1,
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
export default i18next;
