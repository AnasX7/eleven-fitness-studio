import { navigation, ui } from '../data/studio';
import Brand from './Brand';
import Icon from './Icon';

export default function Header({ language }) {
  const copy = ui[language];
  const otherLanguage = language === 'ar' ? 'en' : 'ar';
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand language={language} />
        <nav className="desktop-nav" aria-label={copy.navigationLabel}>
          <ul className="nav-links">
            {navigation.map((link) => (
              <li key={link.id}><a href={`#${link.id}`}>{link.label[language]}</a></li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <a className="language-link" href={language === 'ar' ? 'index.html' : 'ar.html'} lang={otherLanguage} dir={otherLanguage === 'ar' ? 'rtl' : 'ltr'} hrefLang={otherLanguage} aria-label={copy.languageAriaLabel}>
            <Icon name="translation" />
            <span>{copy.languageLabel}</span>
          </a>
          <details className="mobile-menu">
            <summary aria-label={copy.menuLabel}>
              <Icon name="menu-01" className="icon menu-open-icon" />
              <Icon name="cancel-01" className="icon menu-close-icon" />
            </summary>
            <nav aria-label={copy.navigationLabel}>
              <ul className="nav-links">
                {navigation.map((link) => (
                  <li key={link.id}><a href={`#${link.id}`}>{link.label[language]}</a></li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
