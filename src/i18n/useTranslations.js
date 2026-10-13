import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import { messages } from '../messages';

export function useTranslations(namespace) {
  const locale = useContext(LocaleContext);
  const namespaceMessages = messages[locale][namespace];

  return (key) => namespaceMessages[key];
}
