export const categories = [
  { id: 'all', label: { en: 'All', ar: 'الكل' } },
  { id: 'strength', label: { en: 'Strength', ar: 'قوة' } },
  { id: 'conditioning', label: { en: 'Conditioning', ar: 'لياقة' } },
  { id: 'mobility', label: { en: 'Mobility', ar: 'مرونة' } },
  { id: 'mixed', label: { en: 'Mixed training', ar: 'تمارين متنوعة' } },
];

export const classes = [
  {
    "id": "mon-strength",
    "category": "strength",
    "icon": "dumbbell-01",
    "trainerId": "maya",
    "timeValue": "07:00",
    "day": {
      "en": "MON",
      "ar": "الاثنين"
    },
    "time": {
      "en": "7:00 AM",
      "ar": "٧:٠٠ صباحًا"
    },
    "title": {
      "en": "Strength foundations",
      "ar": "أساسيات القوة"
    },
    "description": {
      "en": "Learn the lifts. Build your confidence.",
      "ar": "تعلّم الحركات الأساسية وابنِ ثقتك."
    },
    "details": {
      "en": "Strength · 50 min",
      "ar": "قوة · ٥٠ دقيقة"
    }
  },
  {
    "id": "tue-conditioning",
    "category": "conditioning",
    "icon": "workout-run",
    "trainerId": "leo",
    "timeValue": "18:00",
    "day": {
      "en": "TUE",
      "ar": "الثلاثاء"
    },
    "time": {
      "en": "6:00 PM",
      "ar": "٦:٠٠ مساءً"
    },
    "title": {
      "en": "Full-body circuit",
      "ar": "تمارين الجسم الكامل"
    },
    "description": {
      "en": "Move through a mix of strength and cardio.",
      "ar": "محطات تجمع بين القوة واللياقة القلبية."
    },
    "details": {
      "en": "Conditioning · 45 min",
      "ar": "لياقة · ٤٥ دقيقة"
    }
  },
  {
    "id": "wed-mobility",
    "category": "mobility",
    "icon": "yoga-01",
    "trainerId": "nina",
    "timeValue": "07:00",
    "day": {
      "en": "WED",
      "ar": "الأربعاء"
    },
    "time": {
      "en": "7:00 AM",
      "ar": "٧:٠٠ صباحًا"
    },
    "title": {
      "en": "Move & restore",
      "ar": "حركة واستشفاء"
    },
    "description": {
      "en": "Slow down. Stretch out. Move with ease.",
      "ar": "خفف الإيقاع، وتمدّد، وتحرك براحة."
    },
    "details": {
      "en": "Mobility · 45 min",
      "ar": "مرونة · ٤٥ دقيقة"
    }
  },
  {
    "id": "thu-strength",
    "category": "strength",
    "icon": "dumbbell-01",
    "trainerId": "maya",
    "timeValue": "18:00",
    "day": {
      "en": "THU",
      "ar": "الخميس"
    },
    "time": {
      "en": "6:00 PM",
      "ar": "٦:٠٠ مساءً"
    },
    "title": {
      "en": "Strength foundations",
      "ar": "أساسيات القوة"
    },
    "description": {
      "en": "A steady session for your next small win.",
      "ar": "تدريب متدرج لخطوتك القادمة."
    },
    "details": {
      "en": "Strength · 50 min",
      "ar": "قوة · ٥٠ دقيقة"
    }
  },
  {
    "id": "sat-mixed",
    "category": "mixed",
    "icon": "user-group",
    "trainerId": "leo",
    "timeValue": "09:00",
    "day": {
      "en": "SAT",
      "ar": "السبت"
    },
    "time": {
      "en": "9:00 AM",
      "ar": "٩:٠٠ صباحًا"
    },
    "title": {
      "en": "Weekend team workout",
      "ar": "تحدي نهاية الأسبوع"
    },
    "description": {
      "en": "A shared challenge to start your weekend.",
      "ar": "تحدٍ جماعي لبداية نشيطة لعطلتك."
    },
    "details": {
      "en": "Mixed training · 60 min",
      "ar": "تمارين متنوعة · ٦٠ دقيقة"
    }
  }
];

export const trainers = [
  {
    "id": "maya",
    "image": "/assets/images/trainer-maya.webp",
    "imageAlt": {
      "en": "Trainer Maya Rao, smiling in a gym",
      "ar": "المدربة مايا راو تبتسم في الصالة الرياضية"
    },
    "name": {
      "en": "Maya Rao",
      "ar": "مايا راو"
    },
    "specialty": {
      "en": "Strength & technique",
      "ar": "القوة وتقنيات التمرين"
    },
    "description": {
      "en": "Maya breaks big movements into small steps, helping you feel comfortable with your first lift and confident with your next.",
      "ar": "تقسّم مايا الحركات الكبيرة إلى خطوات بسيطة، لتشعر بالراحة مع تمرينك الأول وبالثقة مع كل تمرين جديد."
    }
  },
  {
    "id": "leo",
    "image": "/assets/images/trainer-leo.webp",
    "imageAlt": {
      "en": "Trainer Leo Brooks, smiling in a gym",
      "ar": "المدرب ليو بروكس يبتسم في الصالة الرياضية"
    },
    "name": {
      "en": "Leo Brooks",
      "ar": "ليو بروكس"
    },
    "specialty": {
      "en": "Conditioning & endurance",
      "ar": "اللياقة والتحمّل"
    },
    "description": {
      "en": "Leo brings upbeat energy and adaptable workouts. Expect a challenge, plenty of encouragement, and room to go at your own pace.",
      "ar": "يقدم ليو تمارين مرنة بروح إيجابية. ستجد التحدي والتشجيع، مع مساحة للتقدم بالإيقاع الذي يناسبك."
    }
  },
  {
    "id": "nina",
    "image": "/assets/images/trainer-nina.webp",
    "imageAlt": {
      "en": "Trainer Nina Ellis, smiling in a gym",
      "ar": "المدربة نينا إليس تبتسم في الصالة الرياضية"
    },
    "name": {
      "en": "Nina Ellis",
      "ar": "نينا إليس"
    },
    "specialty": {
      "en": "Mobility & recovery",
      "ar": "المرونة والاستشفاء"
    },
    "description": {
      "en": "Nina makes space for slower sessions, guiding you through controlled movement and stretches that complement your strength training.",
      "ar": "تخصص نينا مساحة للحصص الهادئة، وترافقك في تمارين الحركة والتمدد التي تكمل تدريبات القوة."
    }
  }
];

export const memberships = [
  {
    "id": "starter",
    "icon": "plant-01",
    "featured": false,
    "name": {
      "en": "Starter",
      "ar": "البداية"
    },
    "description": {
      "en": "Build a habit, one session at a time.",
      "ar": "ابنِ عادة جديدة، حصة بعد حصة."
    },
    "price": 199,
    "features": [
      {
        "id": "classes",
        "text": {
          "en": "4 group classes per month",
          "ar": "٤ حصص جماعية شهريًا"
        }
      },
      {
        "id": "schedule",
        "text": {
          "en": "Choose any scheduled class",
          "ar": "اختر أي حصة في الجدول"
        }
      },
      {
        "id": "equipment",
        "text": {
          "en": "Equipment included",
          "ar": "معدات التدريب متوفرة"
        }
      }
    ]
  },
  {
    "id": "regular",
    "icon": "target-01",
    "featured": true,
    "name": {
      "en": "Regular",
      "ar": "الاستمرار"
    },
    "description": {
      "en": "A little more time for your progress.",
      "ar": "وقت إضافي لتقدمك."
    },
    "price": 349,
    "features": [
      {
        "id": "classes",
        "text": {
          "en": "8 group classes per month",
          "ar": "٨ حصص جماعية شهريًا"
        }
      },
      {
        "id": "schedule",
        "text": {
          "en": "Choose any scheduled class",
          "ar": "اختر أي حصة في الجدول"
        }
      },
      {
        "id": "equipment",
        "text": {
          "en": "Equipment included",
          "ar": "معدات التدريب متوفرة"
        }
      },
      {
        "id": "goal-check-in",
        "text": {
          "en": "A monthly goal check-in",
          "ar": "متابعة شهرية للأهداف"
        }
      }
    ]
  },
  {
    "id": "all-in",
    "icon": "infinity-01",
    "featured": false,
    "name": {
      "en": "All In",
      "ar": "بلا حدود"
    },
    "description": {
      "en": "Make movement part of your everyday.",
      "ar": "اجعل الحركة جزءًا من يومك."
    },
    "price": 499,
    "features": [
      {
        "id": "classes",
        "text": {
          "en": "Unlimited scheduled group classes",
          "ar": "حصص جماعية غير محدودة من الجدول"
        }
      },
      {
        "id": "equipment",
        "text": {
          "en": "Equipment included",
          "ar": "معدات التدريب متوفرة"
        }
      },
      {
        "id": "goal-check-in",
        "text": {
          "en": "A monthly goal check-in",
          "ar": "متابعة شهرية للأهداف"
        }
      },
      {
        "id": "guest-pass",
        "text": {
          "en": "One guest class pass per month",
          "ar": "حصة واحدة لضيف كل شهر"
        }
      }
    ]
  }
];

export const navigation = [
  {
    "id": "schedule",
    "label": {
      "en": "Schedule",
      "ar": "الجدول"
    }
  },
  {
    "id": "trainers",
    "label": {
      "en": "Trainers",
      "ar": "المدربون"
    }
  },
  {
    "id": "membership",
    "label": {
      "en": "Membership",
      "ar": "العضويات"
    }
  }
];

export const ui = {
  "en": {
    "brand": "ELEVEN",
    "brandCaption": "FITNESS STUDIO",
    "homeLabel": "ELEVEN Fitness Studio home",
    "navigationLabel": "Main navigation",
    "menuLabel": "Navigation menu",
    "languageLabel": "العربية",
    "languageAriaLabel": "عرض الموقع بالعربية",
    "heroTitle": "SHOW UP.",
    "heroAccent": "GET STRONG.",
    "heroDescription": "Good coaching. A little encouragement. A stronger you, one class at a time.",
    "heroImageAlt": "An athlete training with battle ropes in a gym",
    "findClass": "Find your class",
    "meetTrainers": "Meet the trainers",
    "weeklySchedule": "Weekly schedule",
    "weeklyClasses": "Weekly classes",
    "filterLabel": "Filter classes by category",
    "footerDescription": "Strength, conditioning and mobility. Coaching for every level, progress at your pace.",
    "explore": "Explore ELEVEN",
    "approach": "Our approach",
    "approachDescription": "Good coaching. Consistent movement. Progress at your pace.",
    "copyright": "© 2026 ELEVEN. All rights reserved.",
    "currency": "AED",
    "pricePeriod": "/ month",
    "aboutPlan": "About this plan",
    "planLabel": "For a steady routine",
    "withCoach": "With",
    "scheduleTitle": "Class Schedule",
    "scheduleDescription": "Strength, cardio and recovery. Find your next class.",
    "trainersTitle": "Trainer Bios",
    "trainersDescription": "Thoughtful coaching. Support at every step.",
    "membershipTitle": "Membership Tiers",
    "membershipDescription": "Choose the plan that fits your routine."
  },
  "ar": {
    "brand": "إليفن",
    "brandCaption": "استوديو اللياقة",
    "homeLabel": "إليفن استوديو اللياقة، الصفحة الرئيسية",
    "navigationLabel": "التنقل الرئيسي",
    "menuLabel": "قائمة التنقل",
    "languageLabel": "English",
    "languageAriaLabel": "View the site in English",
    "heroTitle": "ابدأ اليوم.",
    "heroAccent": "كن أقوى.",
    "heroDescription": "تدريب مدروس، وتشجيع مستمر. خطوة صغيرة في كل حصة نحو نسخة أقوى منك.",
    "heroImageAlt": "رياضية تتدرب بحبال المقاومة في صالة رياضية",
    "findClass": "اختر حصتك",
    "meetTrainers": "تعرّف على المدربين",
    "weeklySchedule": "الجدول الأسبوعي",
    "weeklyClasses": "الحصص الأسبوعية",
    "filterLabel": "تصفية الحصص حسب النوع",
    "footerDescription": "قوة، لياقة وحركة. تدريب يناسب مستواك وتقدّم على إيقاعك.",
    "explore": "اكتشف إليفن",
    "approach": "طريقتنا",
    "approachDescription": "تدريب باهتمام. حركة باستمرار. تقدّم يناسبك.",
    "copyright": "© ٢٠٢٦ إليفن. جميع الحقوق محفوظة.",
    "currency": "درهم",
    "pricePeriod": "/ شهريًا",
    "aboutPlan": "عن هذه العضوية",
    "planLabel": "لروتين منتظم",
    "withCoach": "مع",
    "scheduleTitle": "جدول الحصص",
    "scheduleDescription": "قوة، لياقة واستشفاء. اختر حصتك القادمة.",
    "trainersTitle": "نبذة عن المدربين",
    "trainersDescription": "تدريب باهتمام، ودعم في كل خطوة.",
    "membershipTitle": "باقات العضوية",
    "membershipDescription": "اختر العضوية التي تناسب روتينك."
  }
};
