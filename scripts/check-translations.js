import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { LocaleContext } from '../src/context/LocaleContext.js';
import { useTranslations } from '../src/i18n/useTranslations.js';
import { messages } from '../src/messages/index.js';

function TranslationCheck({ locale, namespace }) {
  const t = useTranslations(namespace);
  const tRoot = useTranslations();

  for (const [key, expected] of Object.entries(messages[locale][namespace])) {
    assert.equal(t(key), expected, `${locale}: ${namespace} scoped lookup`);
    assert.equal(tRoot(`${namespace}.${key}`), expected, `${locale}: ${namespace} root lookup`);
  }

  return null;
}

for (const locale of Object.keys(messages)) {
  for (const namespace of Object.keys(messages[locale])) {
    renderToStaticMarkup(
      createElement(LocaleContext, { value: locale },
        createElement(TranslationCheck, { locale, namespace }),
      ),
    );
  }
}

console.log('Scoped and root translation checks passed for both locales.');
