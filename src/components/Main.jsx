import Hero from './Hero';

export default function Main({ language }) {
  return (
    <main className="main-frame">
      <Hero language={language} />
      <section className="section schedule-section" id="schedule" aria-labelledby="schedule-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="schedule-title">
              {language === 'ar' ? "جدول الحصص" : "Class Schedule"}
            </h2>
            <p>
              {language === 'ar' ? "قوة، لياقة واستشفاء. اختر حصتك القادمة." : "Strength, cardio and recovery. Find your next class."}
            </p>
          </div>
          <div className="schedule-intro">
            <p className="schedule-label">
              <span className="icon" aria-hidden="true">
                <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2V6M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12.1258 14H12.0008M12.1258 18H12.0008M7.625 14H7.5M7.625 18H7.5M16.625 14H16.5M12.2508 14C12.2508 14.1381 12.1389 14.25 12.0008 14.25C11.8628 14.25 11.7508 14.1381 11.7508 14C11.7508 13.8619 11.8628 13.75 12.0008 13.75C12.1389 13.75 12.2508 13.8619 12.2508 14ZM12.2508 18C12.2508 18.1381 12.1389 18.25 12.0008 18.25C11.8628 18.25 11.7508 18.1381 11.7508 18C11.7508 17.8619 11.8628 17.75 12.0008 17.75C12.1389 17.75 12.2508 17.8619 12.2508 18ZM7.75 14C7.75 14.1381 7.63807 14.25 7.5 14.25C7.36193 14.25 7.25 14.1381 7.25 14C7.25 13.8619 7.36193 13.75 7.5 13.75C7.63807 13.75 7.75 13.8619 7.75 14ZM7.75 18C7.75 18.1381 7.63807 18.25 7.5 18.25C7.36193 18.25 7.25 18.1381 7.25 18C7.25 17.8619 7.36193 17.75 7.5 17.75C7.63807 17.75 7.75 17.8619 7.75 18ZM16.75 14C16.75 14.1381 16.6381 14.25 16.5 14.25C16.3619 14.25 16.25 14.1381 16.25 14C16.25 13.8619 16.3619 13.75 16.5 13.75C16.6381 13.75 16.75 13.8619 16.75 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
              <span>
                {language === 'ar' ? "الجدول الأسبوعي" : "Weekly schedule"}
              </span>
            </p>
          </div>
          <ul className="schedule-list" aria-label={language === 'ar' ? "الحصص الأسبوعية" : "Weekly classes"}>
            <li className="class-row">
              <div className="class-time">
                <span className="day">
                  {language === 'ar' ? "الاثنين" : "MON"}
                </span>
                <time dateTime="07:00">
                  {language === 'ar' ? "٧:٠٠ صباحًا" : "7:00 AM"}
                </time>
              </div>
              <div className="class-description">
                <span className="icon class-icon" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.73438 13.7323C7.73438 13.7323 8.63984 12.5102 9.23438 12.2319C11.0292 11.3915 11.3943 11.0263 12.2344 9.23091C12.5127 8.63618 13.7344 7.73044 13.7344 7.73044M10.2344 16.2331C10.2344 16.2331 11.4561 15.3273 11.7344 14.7326C12.5745 12.9373 12.9396 12.5721 14.7344 11.7317C15.3289 11.4533 16.2344 10.2312 16.2344 10.2312" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M14.4311 2.89207C14.938 2.38343 15.7611 2.38212 16.2696 2.88916L21.0814 7.68726C21.5899 8.1943 21.5912 9.01767 21.0843 9.52632L19.5557 11.0603C19.0488 11.5689 18.2257 11.5702 17.7172 11.0632L12.9054 6.26507C12.397 5.75803 12.3957 4.93466 12.9025 4.42601L14.4311 2.89207Z" stroke="currentColor" strokeWidth="1.5"></path>
                    <path d="M4.41377 12.9022C4.92065 12.3936 5.74376 12.3923 6.25225 12.8993L11.0641 17.6974C11.5725 18.2045 11.5738 19.0278 11.067 19.5365L9.53836 21.0704C9.03148 21.5791 8.20837 21.5804 7.69988 21.0733L2.88808 16.2752C2.37959 15.7682 2.37829 14.9448 2.88517 14.4362L4.41377 12.9022Z" stroke="currentColor" strokeWidth="1.5"></path>
                    <path d="M17.9377 3.45254C19.8201 0.985467 23.14 3.8401 20.5431 6.02872M3.37811 17.9773C0.998473 19.9687 3.99782 23.1586 6.06742 20.4657" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <div className="class-copy">
                  <h3>
                    {language === 'ar' ? "أساسيات القوة" : "Strength foundations"}
                  </h3>
                  <p>
                    {language === 'ar' ? "تعلّم الحركات الأساسية وابنِ ثقتك." : "Learn the lifts. Build your confidence."}
                  </p>
                </div>
              </div>
              <div className="class-meta">
                <span className="class-type">
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                      <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "قوة · ٥٠ دقيقة" : "Strength · 50 min"}
                  </span>
                </span>
                <p className="class-coach">
                  <img className="coach-avatar" src="/assets/images/trainer-maya.webp" alt="" aria-hidden="true" width="32" height="32" loading="lazy" />
                  <span>
                    {language === 'ar' ? "مع مايا راو" : "With Maya Rao"}
                  </span>
                </p>
              </div>
            </li>
            <li className="class-row">
              <div className="class-time">
                <span className="day">
                  {language === 'ar' ? "الثلاثاء" : "TUE"}
                </span>
                <time dateTime="18:00">
                  {language === 'ar' ? "٦:٠٠ مساءً" : "6:00 PM"}
                </time>
              </div>
              <div className="class-description">
                <span className="icon class-icon" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3C16.3284 3 17 3.67157 17 4.5Z" stroke="currentColor" strokeWidth="1.5"></path>
                    <path d="M15 21.0008L14.3359 18.3848C14.1161 17.5191 13.6615 16.7284 13.0207 16.0974L11.5 14.5998M20 8.19913C17.9627 10.4921 16.1547 10.1433 15 9.27743C14.8878 9.19326 14.7664 9.06672 14.6482 8.92548C14.2356 8.43256 14.0293 8.18609 13.8282 8.09214C13.6271 7.99818 13.3747 7.99813 12.8698 7.99805C12.5444 7.99799 12.2186 7.99877 12 8.00136C8.53767 8.0423 7 9.18366 6 11.1534M12 8.00136L10.7309 9.95956C10.0332 11.0362 9.68429 11.5745 9.67069 12.1397C9.66463 12.3914 9.70617 12.642 9.79313 12.8784C9.98834 13.409 10.4922 13.8059 11.5 14.5998M15 9.27743L11.5 14.5998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M4 17.7303L4.67822 17.8916C6.40663 18.3028 8.20324 17.5164 9 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <div className="class-copy">
                  <h3>
                    {language === 'ar' ? "تمارين الجسم الكامل" : "Full-body circuit"}
                  </h3>
                  <p>
                    {language === 'ar' ? "محطات تجمع بين القوة واللياقة القلبية." : "Move through a mix of strength and cardio."}
                  </p>
                </div>
              </div>
              <div className="class-meta">
                <span className="class-type">
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                      <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "لياقة · ٤٥ دقيقة" : "Conditioning · 45 min"}
                  </span>
                </span>
                <p className="class-coach">
                  <img className="coach-avatar" src="/assets/images/trainer-leo.webp" alt="" aria-hidden="true" width="32" height="32" loading="lazy" />
                  <span>
                    {language === 'ar' ? "مع ليو بروكس" : "With Leo Brooks"}
                  </span>
                </p>
              </div>
            </li>
            <li className="class-row">
              <div className="class-time">
                <span className="day">
                  {language === 'ar' ? "الأربعاء" : "WED"}
                </span>
                <time dateTime="07:00">
                  {language === 'ar' ? "٧:٠٠ صباحًا" : "7:00 AM"}
                </time>
              </div>
              <div className="class-description">
                <span className="icon class-icon" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.0923 16C8.78292 16.6819 8.0701 16.986 7.43887 17.3162L3.79262 19.2233C2.32845 19.9891 3.05949 22 4.62985 22C8.12204 22 10.8836 20.3064 14.0404 19C14.835 18.6711 15.2201 18.7415 16 19.0912" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9 19.0912C9.77995 18.7415 10.165 18.6711 10.9596 19C14.1164 20.3064 16.878 22 20.3702 22C21.9405 22 22.6715 19.9891 21.2074 19.2233L17.5611 17.3162C16.9299 16.986 16.2171 16.6819 15.9077 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4Z" stroke="currentColor" strokeWidth="1.5"></path>
                    <path d="M12 8C8.68629 8 6 10.6863 6 14C9.31371 14 12 11.3137 12 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                    <path d="M12 8C15.3137 8 18 10.6863 18 14C14.6863 14 12 11.3137 12 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <div className="class-copy">
                  <h3>
                    {language === 'ar' ? "حركة واستشفاء" : "Move & restore"}
                  </h3>
                  <p>
                    {language === 'ar' ? "خفف الإيقاع، وتمدّد، وتحرك براحة." : "Slow down. Stretch out. Move with ease."}
                  </p>
                </div>
              </div>
              <div className="class-meta">
                <span className="class-type">
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                      <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "مرونة · ٤٥ دقيقة" : "Mobility · 45 min"}
                  </span>
                </span>
                <p className="class-coach">
                  <img className="coach-avatar" src="/assets/images/trainer-nina.webp" alt="" aria-hidden="true" width="32" height="32" loading="lazy" />
                  <span>
                    {language === 'ar' ? "مع نينا إليس" : "With Nina Ellis"}
                  </span>
                </p>
              </div>
            </li>
            <li className="class-row">
              <div className="class-time">
                <span className="day">
                  {language === 'ar' ? "الخميس" : "THU"}
                </span>
                <time dateTime="18:00">
                  {language === 'ar' ? "٦:٠٠ مساءً" : "6:00 PM"}
                </time>
              </div>
              <div className="class-description">
                <span className="icon class-icon" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.73438 13.7323C7.73438 13.7323 8.63984 12.5102 9.23438 12.2319C11.0292 11.3915 11.3943 11.0263 12.2344 9.23091C12.5127 8.63618 13.7344 7.73044 13.7344 7.73044M10.2344 16.2331C10.2344 16.2331 11.4561 15.3273 11.7344 14.7326C12.5745 12.9373 12.9396 12.5721 14.7344 11.7317C15.3289 11.4533 16.2344 10.2312 16.2344 10.2312" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M14.4311 2.89207C14.938 2.38343 15.7611 2.38212 16.2696 2.88916L21.0814 7.68726C21.5899 8.1943 21.5912 9.01767 21.0843 9.52632L19.5557 11.0603C19.0488 11.5689 18.2257 11.5702 17.7172 11.0632L12.9054 6.26507C12.397 5.75803 12.3957 4.93466 12.9025 4.42601L14.4311 2.89207Z" stroke="currentColor" strokeWidth="1.5"></path>
                    <path d="M4.41377 12.9022C4.92065 12.3936 5.74376 12.3923 6.25225 12.8993L11.0641 17.6974C11.5725 18.2045 11.5738 19.0278 11.067 19.5365L9.53836 21.0704C9.03148 21.5791 8.20837 21.5804 7.69988 21.0733L2.88808 16.2752C2.37959 15.7682 2.37829 14.9448 2.88517 14.4362L4.41377 12.9022Z" stroke="currentColor" strokeWidth="1.5"></path>
                    <path d="M17.9377 3.45254C19.8201 0.985467 23.14 3.8401 20.5431 6.02872M3.37811 17.9773C0.998473 19.9687 3.99782 23.1586 6.06742 20.4657" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <div className="class-copy">
                  <h3>
                    {language === 'ar' ? "أساسيات القوة" : "Strength foundations"}
                  </h3>
                  <p>
                    {language === 'ar' ? "تدريب متدرج لخطوتك القادمة." : "A steady session for your next small win."}
                  </p>
                </div>
              </div>
              <div className="class-meta">
                <span className="class-type">
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                      <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "قوة · ٥٠ دقيقة" : "Strength · 50 min"}
                  </span>
                </span>
                <p className="class-coach">
                  <img className="coach-avatar" src="/assets/images/trainer-maya.webp" alt="" aria-hidden="true" width="32" height="32" loading="lazy" />
                  <span>
                    {language === 'ar' ? "مع مايا راو" : "With Maya Rao"}
                  </span>
                </p>
              </div>
            </li>
            <li className="class-row">
              <div className="class-time">
                <span className="day">
                  {language === 'ar' ? "السبت" : "SAT"}
                </span>
                <time dateTime="09:00">
                  {language === 'ar' ? "٩:٠٠ صباحًا" : "9:00 AM"}
                </time>
              </div>
              <div className="class-description">
                <span className="icon class-icon" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.4995 20.5C18.2663 17.5685 15.8417 15.2477 12.808 15.0521L11.9995 15C11.7107 15.0076 11.4416 15.0178 11.1877 15.0298C8.18075 15.1723 5.7304 17.5974 5.49951 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M15.2495 9.25C15.2495 11.0449 13.7944 12.5 11.9995 12.5C10.2046 12.5 8.74952 11.0449 8.74952 9.25C8.74952 7.45507 10.2046 6 11.9995 6C13.7944 6 15.2495 7.45507 15.2495 9.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M5.50249 8.5C5.17908 7.99485 4.99158 7.39432 4.99158 6.75C4.99158 4.95507 6.44665 3.5 8.24157 3.5C8.68752 3.5 9.1125 3.58982 9.49939 3.75235" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M18.4963 8.5C18.8197 7.99485 19.0072 7.39432 19.0072 6.75C19.0072 4.95507 17.5521 3.5 15.7572 3.5C15.3113 3.5 14.8863 3.58982 14.4994 3.75235" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M22.0007 17.9996C21.8208 15.7374 19.9995 13.5 17.9995 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1.99927 17.9996C2.17923 15.7374 4.00049 13.5 6.00049 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <div className="class-copy">
                  <h3>
                    {language === 'ar' ? "تحدي نهاية الأسبوع" : "Weekend team workout"}
                  </h3>
                  <p>
                    {language === 'ar' ? "تحدٍ جماعي لبداية نشيطة لعطلتك." : "A shared challenge to start your weekend."}
                  </p>
                </div>
              </div>
              <div className="class-meta">
                <span className="class-type">
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                      <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "تمارين متنوعة · ٦٠ دقيقة" : "Mixed training · 60 min"}
                  </span>
                </span>
                <p className="class-coach">
                  <img className="coach-avatar" src="/assets/images/trainer-leo.webp" alt="" aria-hidden="true" width="32" height="32" loading="lazy" />
                  <span>
                    {language === 'ar' ? "مع ليو بروكس" : "With Leo Brooks"}
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="section trainers-section" id="trainers" aria-labelledby="trainers-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="trainers-title">
              {language === 'ar' ? "نبذة عن المدربين" : "Trainer Bios"}
            </h2>
            <p>
              {language === 'ar' ? "تدريب باهتمام، ودعم في كل خطوة." : "Thoughtful coaching. Support at every step."}
            </p>
          </div>
          <div className="card-grid trainer-grid">
            <article className="trainer-card" aria-labelledby="maya-name">
              <img src="/assets/images/trainer-maya.webp" alt={language === 'ar' ? "المدربة مايا راو تبتسم في الصالة الرياضية" : "Trainer Maya Rao, smiling in a gym"} width="1024" height="1536" loading="lazy" />
              <div className="trainer-content">
                <p className="trainer-specialty">
                  {language === 'ar' ? "القوة وتقنيات التمرين" : "Strength & technique"}
                </p>
                <h3 id="maya-name">
                  {language === 'ar' ? "مايا راو" : "Maya Rao"}
                </h3>
                <p>
                  {language === 'ar' ? "تقسّم مايا الحركات الكبيرة إلى خطوات بسيطة، لتشعر بالراحة مع تمرينك الأول وبالثقة مع كل تمرين جديد." : "Maya breaks big movements into small steps, helping you feel comfortable with your first lift and confident with your next."}
                </p>
                <a className="text-link" href="#schedule">
                  {language === 'ar' ? "اختر حصتك" : "Find your class"}
                  <span className="icon icon-diagonal" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d={language === 'ar' ? "M15 6.65032C15 6.65032 8.06166 6.10759 7.08461 7.08463C6.10755 8.06167 6.65037 15 6.65037 15M7.5 7.5L17.5 17.5" : "M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </article>
            <article className="trainer-card" aria-labelledby="leo-name">
              <img src="/assets/images/trainer-leo.webp" alt={language === 'ar' ? "المدرب ليو بروكس يبتسم في الصالة الرياضية" : "Trainer Leo Brooks, smiling in a gym"} width="1024" height="1536" loading="lazy" />
              <div className="trainer-content">
                <p className="trainer-specialty">
                  {language === 'ar' ? "اللياقة والتحمّل" : "Conditioning & endurance"}
                </p>
                <h3 id="leo-name">
                  {language === 'ar' ? "ليو بروكس" : "Leo Brooks"}
                </h3>
                <p>
                  {language === 'ar' ? "يقدم ليو تمارين مرنة بروح إيجابية. ستجد التحدي والتشجيع، مع مساحة للتقدم بالإيقاع الذي يناسبك." : "Leo brings upbeat energy and adaptable workouts. Expect a challenge, plenty of encouragement, and room to go at your own pace."}
                </p>
                <a className="text-link" href="#schedule">
                  {language === 'ar' ? "اختر حصتك" : "Find your class"}
                  <span className="icon icon-diagonal" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d={language === 'ar' ? "M15 6.65032C15 6.65032 8.06166 6.10759 7.08461 7.08463C6.10755 8.06167 6.65037 15 6.65037 15M7.5 7.5L17.5 17.5" : "M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </article>
            <article className="trainer-card" aria-labelledby="nina-name">
              <img src="/assets/images/trainer-nina.webp" alt={language === 'ar' ? "المدربة نينا إليس تبتسم في الصالة الرياضية" : "Trainer Nina Ellis, smiling in a gym"} width="1024" height="1536" loading="lazy" />
              <div className="trainer-content">
                <p className="trainer-specialty">
                  {language === 'ar' ? "المرونة والاستشفاء" : "Mobility & recovery"}
                </p>
                <h3 id="nina-name">
                  {language === 'ar' ? "نينا إليس" : "Nina Ellis"}
                </h3>
                <p>
                  {language === 'ar' ? "تخصص نينا مساحة للحصص الهادئة، وترافقك في تمارين الحركة والتمدد التي تكمل تدريبات القوة." : "Nina makes space for slower sessions, guiding you through controlled movement and stretches that complement your strength training."}
                </p>
                <a className="text-link" href="#schedule">
                  {language === 'ar' ? "اختر حصتك" : "Find your class"}
                  <span className="icon icon-diagonal" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d={language === 'ar' ? "M15 6.65032C15 6.65032 8.06166 6.10759 7.08461 7.08463C6.10755 8.06167 6.65037 15 6.65037 15M7.5 7.5L17.5 17.5" : "M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section membership-section" id="membership" aria-labelledby="membership-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="membership-title">
              {language === 'ar' ? "باقات العضوية" : "Membership Tiers"}
            </h2>
            <p>
              {language === 'ar' ? "اختر العضوية التي تناسب روتينك." : "Choose the plan that fits your routine."}
            </p>
          </div>
          <div className="card-grid pricing-grid">
            <article className="pricing-card" aria-labelledby="starter-title">
              <div className="plan-heading">
                <span className="icon plan-icon" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 10C18 10 12 14 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9.34882 11.1825C7.73784 12.3891 5.44323 12.26 3.9785 10.7953C1.55484 8.37164 2.03957 3.03957 2.03957 3.03957C2.03957 3.03957 7.37164 2.55484 9.7953 4.9785C10.7548 5.93803 11.1412 7.25369 10.9543 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M14.9638 12.8175C13.644 11.3832 13.6797 9.14983 15.0708 7.75867C17.2252 5.6043 21.9648 6.03517 21.9648 6.03517C21.9648 6.03517 22.3957 10.7748 20.2413 12.9292C19.4877 13.6828 18.487 14.0386 17.5 13.9967" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6 7C6 7 12 12 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <h3 id="starter-title">
                  {language === 'ar' ? "البداية" : "Starter"}
                </h3>
              </div>
              <p className="plan-description">
                {language === 'ar' ? "ابنِ عادة جديدة، حصة بعد حصة." : "Build a habit, one session at a time."}
              </p>
              <p className="price">
                <span className="currency">
                  {language === 'ar' ? "درهم" : "AED"}
                </span>
                <bdi className="price-amount">
                  {language === 'ar' ? "١٩٩" : "199"}
                </bdi>
                <span className="price-period">
                  {language === 'ar' ? "/ شهريًا" : "/ month"}
                </span>
              </p>
              <ul role="list" className="plan-features" id="starter-details" tabIndex="-1">
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "٤ حصص جماعية شهريًا" : "4 group classes per month"}
                  </span>
                </li>
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "اختر أي حصة في الجدول" : "Choose any scheduled class"}
                  </span>
                </li>
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "معدات التدريب متوفرة" : "Equipment included"}
                  </span>
                </li>
              </ul>
              <a className="button button-outline" href="#starter-details" aria-label={language === 'ar' ? "عن هذه العضوية: عضوية البداية" : "About this plan: Starter membership"}>
                {language === 'ar' ? "عن هذه العضوية" : "About this plan"}
                <span className="icon icon-diagonal" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={language === 'ar' ? "M15 6.65032C15 6.65032 8.06166 6.10759 7.08461 7.08463C6.10755 8.06167 6.65037 15 6.65037 15M7.5 7.5L17.5 17.5" : "M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </a>
            </article>
            <article className="pricing-card pricing-featured" aria-labelledby="regular-title">
              <p className="plan-label">
                {language === 'ar' ? "لروتين منتظم" : "For a steady routine"}
              </p>
              <div className="plan-heading">
                <span className="icon plan-icon" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1312 2.5C14.1462 2.17555 13.0936 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M19.5 4.5L12 12M19.5 4.5V2M19.5 4.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                </span>
                <h3 id="regular-title">
                  {language === 'ar' ? "الاستمرار" : "Regular"}
                </h3>
              </div>
              <p className="plan-description">
                {language === 'ar' ? "وقت إضافي لتقدمك." : "A little more time for your progress."}
              </p>
              <p className="price">
                <span className="currency">
                  {language === 'ar' ? "درهم" : "AED"}
                </span>
                <bdi className="price-amount">
                  {language === 'ar' ? "٣٤٩" : "349"}
                </bdi>
                <span className="price-period">
                  {language === 'ar' ? "/ شهريًا" : "/ month"}
                </span>
              </p>
              <ul role="list" className="plan-features" id="regular-details" tabIndex="-1">
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "٨ حصص جماعية شهريًا" : "8 group classes per month"}
                  </span>
                </li>
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "اختر أي حصة في الجدول" : "Choose any scheduled class"}
                  </span>
                </li>
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "معدات التدريب متوفرة" : "Equipment included"}
                  </span>
                </li>
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "متابعة شهرية للأهداف" : "A monthly goal check-in"}
                  </span>
                </li>
              </ul>
              <a className="button" href="#regular-details" aria-label={language === 'ar' ? "عن هذه العضوية: عضوية الاستمرار" : "About this plan: Regular membership"}>
                {language === 'ar' ? "عن هذه العضوية" : "About this plan"}
                <span className="icon icon-diagonal" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={language === 'ar' ? "M15 6.65032C15 6.65032 8.06166 6.10759 7.08461 7.08463C6.10755 8.06167 6.65037 15 6.65037 15M7.5 7.5L17.5 17.5" : "M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </a>
            </article>
            <article className="pricing-card" aria-labelledby="all-in-title">
              <div className="plan-heading">
                <span className="icon plan-icon" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C12 12 9.26142 17 6.5 17C3.73858 17 2 14.7614 2 12C2 9.23858 3.73858 7 6.5 7C9.26142 7 12 12 12 12ZM12 12C12 12 14.7386 17 17.5 17C20.2614 17 22 14.7614 22 12C22 9.23858 20.2614 7 17.5 7C14.7386 7 12 12 12 12Z" stroke="currentColor" strokeWidth="1.5"></path>
                  </svg>
                </span>
                <h3 id="all-in-title">
                  {language === 'ar' ? "بلا حدود" : "All In"}
                </h3>
              </div>
              <p className="plan-description">
                {language === 'ar' ? "اجعل الحركة جزءًا من يومك." : "Make movement part of your everyday."}
              </p>
              <p className="price">
                <span className="currency">
                  {language === 'ar' ? "درهم" : "AED"}
                </span>
                <bdi className="price-amount">
                  {language === 'ar' ? "٤٩٩" : "499"}
                </bdi>
                <span className="price-period">
                  {language === 'ar' ? "/ شهريًا" : "/ month"}
                </span>
              </p>
              <ul role="list" className="plan-features" id="all-in-details" tabIndex="-1">
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "حصص جماعية غير محدودة من الجدول" : "Unlimited scheduled group classes"}
                  </span>
                </li>
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "معدات التدريب متوفرة" : "Equipment included"}
                  </span>
                </li>
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "متابعة شهرية للأهداف" : "A monthly goal check-in"}
                  </span>
                </li>
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    {language === 'ar' ? "حصة واحدة لضيف كل شهر" : "One guest class pass per month"}
                  </span>
                </li>
              </ul>
              <a className="button button-outline" href="#all-in-details" aria-label={language === 'ar' ? "عن هذه العضوية: عضوية بلا حدود" : "About this plan: All In membership"}>
                {language === 'ar' ? "عن هذه العضوية" : "About this plan"}
                <span className="icon icon-diagonal" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={language === 'ar' ? "M15 6.65032C15 6.65032 8.06166 6.10759 7.08461 7.08463C6.10755 8.06167 6.65037 15 6.65037 15M7.5 7.5L17.5 17.5" : "M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
