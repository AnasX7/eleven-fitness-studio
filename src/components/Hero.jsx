export default function Hero({ language }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src="/assets/images/hero.webp" alt={language === 'ar' ? "رياضية تتدرب بحبال المقاومة في صالة رياضية" : "An athlete training with battle ropes in a gym"} width="1536" height="1024" fetchPriority="high" />
      <div className="container hero-content">
        <h1 id="hero-title">
          {language === 'ar' ? "ابدأ اليوم." : "SHOW UP."}
          <span>
            {language === 'ar' ? "كن أقوى." : "GET STRONG."}
          </span>
        </h1>
        <p className="hero-description">
          {language === 'ar' ? "تدريب مدروس، وتشجيع مستمر. خطوة صغيرة في كل حصة نحو نسخة أقوى منك." : "Good coaching. A little encouragement. A stronger you, one class at a time."}
        </p>
        <div className="hero-actions">
          <a className="button" href="#schedule">
            {language === 'ar' ? "اختر حصتك" : "Find your class"}
            <span className="icon icon-diagonal" aria-hidden="true">
              <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={language === 'ar' ? "M15 6.65032C15 6.65032 8.06166 6.10759 7.08461 7.08463C6.10755 8.06167 6.65037 15 6.65037 15M7.5 7.5L17.5 17.5" : "M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
          </a>
          <a className="button button-outline" href="#trainers">
            {language === 'ar' ? "تعرّف على المدربين" : "Meet the trainers"}
            <span className="icon icon-diagonal" aria-hidden="true">
              <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={language === 'ar' ? "M15 6.65032C15 6.65032 8.06166 6.10759 7.08461 7.08463C6.10755 8.06167 6.65037 15 6.65037 15M7.5 7.5L17.5 17.5" : "M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
