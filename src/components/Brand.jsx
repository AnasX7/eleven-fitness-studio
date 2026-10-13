import { ui } from '../data/studio';

export default function Brand({ language }) {
  const copy = ui[language];
  return (
    <a className="brand" href="#top" aria-label={copy.homeLabel}>
      <span className="brand-mark" aria-hidden="true"></span>
      <span>
        {copy.brand}
        <span className="brand-caption">{copy.brandCaption}</span>
      </span>
    </a>
  );
}
