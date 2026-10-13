import { navigation, ui } from '../data/studio';
import Brand from './Brand';

export default function Footer({ language }) {
  const copy = ui[language];
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-details">
          <div className="footer-about">
            <Brand language={language} />
            <p>{copy.footerDescription}</p>
          </div>
          <nav aria-labelledby="footer-links-title">
            <h3 className="footer-heading" id="footer-links-title">{copy.explore}</h3>
            <ul className="footer-links">
              {navigation.map((link) => (
                <li key={link.id}><a className="text-link" href={`#${link.id}`}>{link.label[language]}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="footer-heading">{copy.approach}</h3>
            <p>{copy.approachDescription}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-wordmark" aria-hidden="true">{copy.brand}</p>
          <p className="footer-note">{copy.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
