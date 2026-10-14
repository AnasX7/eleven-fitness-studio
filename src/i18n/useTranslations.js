import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext.js';
import { messages } from '../messages/index.js';

export function useTranslations(namespace) {
  const { locale } = useContext(LocaleContext);
  const localeMessages = messages[locale];

  return (key) => {
    const path = namespace ? `${namespace}.${key}` : key;

    return path.split('.').reduce((value, part) => value[part], localeMessages);
  };
}
