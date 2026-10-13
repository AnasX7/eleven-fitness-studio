export default function Header({ language }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={language === 'ar' ? "إليفن استوديو اللياقة، الصفحة الرئيسية" : "ELEVEN Fitness Studio home"}>
          <span className="brand-mark" aria-hidden="true"></span>
          <span>
            {language === 'ar' ? "إليفن" : "ELEVEN"}
            <span className="brand-caption">
              {language === 'ar' ? "استوديو اللياقة" : "FITNESS STUDIO"}
            </span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label={language === 'ar' ? "التنقل الرئيسي" : "Main navigation"}>
          <ul className="nav-links">
            <li>
              <a href="#schedule">
                {language === 'ar' ? "الجدول" : "Schedule"}
              </a>
            </li>
            <li>
              <a href="#trainers">
                {language === 'ar' ? "المدربون" : "Trainers"}
              </a>
            </li>
            <li>
              <a href="#membership">
                {language === 'ar' ? "العضويات" : "Membership"}
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <a className="language-link" href={language === 'ar' ? "index.html" : "ar.html"} lang={language === 'ar' ? "en" : "ar"} dir={language === 'ar' ? "ltr" : "rtl"} hreflang={language === 'ar' ? "en" : "ar"} aria-label={language === 'ar' ? "View the site in English" : "عرض الموقع بالعربية"}>
            <span className="icon" aria-hidden="true">
              <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5.96552H8.15M12 5.96552H10.25M8.15 5.96552H10.25M8.15 5.96552V5M10.25 5.96552C9.88076 7.28593 9.10754 8.53411 8.225 9.63103M5.975 12C6.68843 11.344 7.4942 10.5394 8.225 9.63103M8.225 9.63103C7.775 9.10345 7.145 8.24984 6.965 7.86364M8.225 9.63103L9.575 11.0345" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M7.02231 16.9777C7.07674 18.6978 7.26397 19.7529 7.90796 20.5376C8.07418 20.7401 8.25989 20.9258 8.46243 21.092C9.56878 22 11.2125 22 14.5 22C17.7875 22 19.4312 22 20.5376 21.092C20.7401 20.9258 20.9258 20.7401 21.092 20.5376C22 19.4312 22 17.7875 22 14.5C22 11.2125 22 9.56878 21.092 8.46243C20.9258 8.25989 20.7401 8.07418 20.5376 7.90796C19.7563 7.26676 18.707 7.07837 17 7.02303M7.02231 16.9777C5.30217 16.9233 4.24713 16.736 3.46243 16.092C3.25989 15.9258 3.07418 15.7401 2.90796 15.5376C2 14.4312 2 12.7875 2 9.5C2 6.21252 2 4.56878 2.90796 3.46243C3.07418 3.25989 3.25989 3.07418 3.46243 2.90796C4.56878 2 6.21252 2 9.5 2C12.7875 2 14.4312 2 15.5376 2.90796C15.7401 3.07418 15.9258 3.25989 16.092 3.46243C16.736 4.24713 16.9233 5.30217 16.9777 7.02231C16.9777 7.02231 16.9777 7.02231 17 7.02303M7.02231 16.9777L17 7.02303" stroke="currentColor" strokeWidth="1.5"></path>
                <path d="M13 19L13.8333 17M18 19L17.1667 17M13.8333 17L15.5 13L17.1667 17M13.8333 17H17.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
            <span>
              {language === 'ar' ? "English" : "العربية"}
            </span>
          </a>
          <details className="mobile-menu">
            <summary aria-label={language === 'ar' ? "قائمة التنقل" : "Navigation menu"}>
              <span className="icon menu-open-icon" aria-hidden="true">
                <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
              <span className="icon menu-close-icon" aria-hidden="true">
                <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </summary>
            <nav aria-label={language === 'ar' ? "التنقل الرئيسي" : "Main navigation"}>
              <ul className="nav-links">
                <li>
                  <a href="#schedule">
                    {language === 'ar' ? "الجدول" : "Schedule"}
                  </a>
                </li>
                <li>
                  <a href="#trainers">
                    {language === 'ar' ? "المدربون" : "Trainers"}
                  </a>
                </li>
                <li>
                  <a href="#membership">
                    {language === 'ar' ? "العضويات" : "Membership"}
                  </a>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
