import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import auth from './en/auth.json';
import error from './en/error.json';
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false; // t function can return null, this behaviour is set by default so using this to fix type when pass t as props
  }
}
const resources = {
  en: {
    auth: auth,
    error: error,
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
