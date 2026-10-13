export default function Footer({ language }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-details">
          <div className="footer-about">
            <a className="brand" href="#top" aria-label={language === 'ar' ? "إليفن استوديو اللياقة، الصفحة الرئيسية" : "ELEVEN Fitness Studio home"}>
              <span className="brand-mark" aria-hidden="true"></span>
              <span>
                {language === 'ar' ? "إليفن" : "ELEVEN"}
                <span className="brand-caption">
                  {language === 'ar' ? "استوديو اللياقة" : "FITNESS STUDIO"}
                </span>
              </span>
            </a>
            <p>
              {language === 'ar' ? "قوة، لياقة وحركة. تدريب يناسب مستواك وتقدّم على إيقاعك." : "Strength, conditioning and mobility. Coaching for every level, progress at your pace."}
            </p>
          </div>
          <nav aria-labelledby="footer-links-title">
            <h3 className="footer-heading" id="footer-links-title">
              {language === 'ar' ? "اكتشف إليفن" : "Explore ELEVEN"}
            </h3>
            <ul className="footer-links">
              <li>
                <a className="text-link" href="#schedule">
                  {language === 'ar' ? "الجدول" : "Schedule"}
                </a>
              </li>
              <li>
                <a className="text-link" href="#trainers">
                  {language === 'ar' ? "المدربون" : "Trainers"}
                </a>
              </li>
              <li>
                <a className="text-link" href="#membership">
                  {language === 'ar' ? "العضويات" : "Membership"}
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="footer-heading">
              {language === 'ar' ? "طريقتنا" : "Our approach"}
            </h3>
            <p>
              {language === 'ar' ? "تدريب باهتمام. حركة باستمرار. تقدّم يناسبك." : "Good coaching. Consistent movement. Progress at your pace."}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-wordmark" aria-hidden="true">
            {language === 'ar' ? "إليفن" : "ELEVEN"}
          </p>
          <p className="footer-note">
            {language === 'ar' ? "© ٢٠٢٦ إليفن. جميع الحقوق محفوظة." : "© 2026 ELEVEN. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
