export interface MatchItem {
  id: number;
  date: string; // e.g., "الخميس, 11/06/2026"
  league: string; // e.g., "كأس العالم", "مباراة ودية", etc.
  team1: {
    name: string;
    flag: string; // flag emoji or logo abbreviation
  };
  team2: {
    name: string;
    flag: string;
  };
  time: string; // e.g., "08:00 م"
  isVip: boolean;
  isCanceled?: boolean;
  prediction?: string; // a default mock prediction description
  predictionDetails?: string; // Analysis
  
  // التفاصيل الرياضية الإضافية للـ VIP المطلوبة من العميل:
  vipDetails?: {
    goalsFirstHalf: string;       // أهداف الشوط الأول
    goalsSecondHalf: string;      // أهداف الشوط الثاني
    scoreFirstHalf: string;       // نتيجة الشوط الأول
    scoreSecondHalf: string;      // نتيجة الشوط الثاني
    scoreFullTime: string;        // نتيجة المباراة كاملة
    cardsFirstHalf: string;       // بطاقات الشوط الأول
    cardsSecondHalf: string;      // بطاقات الشوط الثاني
    cardsFullTime: string;        // إجمالي بطاقات اللقاء
    cornersFirstHalf: string;     // ركنيات الشوط الأول
    cornersSecondHalf: string;    // ركنيات الشوط الثاني
    cornersFullTime: string;      // إجمالي ركنيات اللقاء
    firstToScore: string;         // شكون يمركي اللول (الفريق صاحب الهدف الأول)
    winner: string;               // شكون يربح (من يفوز)
    doubleChance: string;         // فرصة مزدوجة (تعادل أو فوز أحد الفريقين)
  };
}

export const matchesData: MatchItem[] = [
  // الخميس, 11/06/2026
  {
    id: 1,
    date: "الخميس, 11/06/2026",
    league: "كأس العالم",
    team1: { name: "المكسيك", flag: "🇲🇽" },
    team2: { name: "جنوب أفريقيا", flag: "🇿🇦" },
    time: "08:00 م",
    isVip: true,
    prediction: "فوز المكسيك 2-1",
    predictionDetails: "المنتخب المكسيكي يتمتع بأفضلية الأرض والتحضيرات القوية. نتوقع فوزاً صعباً بنتيجة هدفين مقابل هدف.",
    vipDetails: {
      goalsFirstHalf: "هدَف واحد (1)",
      goalsSecondHalf: "هدفين (2)",
      scoreFirstHalf: "1-0 لصالح المكسيك",
      scoreSecondHalf: "1-1 (2-1 النتيجة النهائية للمكسيك)",
      scoreFullTime: "2-1 لصالح المكسيك",
      cardsFirstHalf: "بطاقة واحدة (1)",
      cardsSecondHalf: "3 بطاقات صفراء",
      cardsFullTime: "4 بطاقات صفراء في اللقاء",
      cornersFirstHalf: "4 ركنيات",
      cornersSecondHalf: "5 ركنيات",
      cornersFullTime: "9 ركنيات إجمالية",
      firstToScore: "المكسيك 🇲🇽",
      winner: "المكسيك 🇲🇽",
      doubleChance: "فوز المكسيك أو التعادل (1X)"
    }
  },
  {
    id: 2,
    date: "الخميس, 11/06/2026",
    league: "مباراة ودية",
    team1: { name: "بوليفيا", flag: "🇧🇴" },
    team2: { name: "الجزائر", flag: "🇩🇿" },
    time: "01:00 ص",
    isVip: true,
    prediction: "فوز الجزائر 3-1",
    predictionDetails: "المنتخب الجزائري بكامل قوته الضاربة في مواجهة ودية هامة. الهجوم الجزائري جاهز لصنع الفارق وحسم اللقاء.",
    vipDetails: {
      goalsFirstHalf: "هدفين (2)",
      goalsSecondHalf: "هدفين (2)",
      scoreFirstHalf: "2-0 للجزائر",
      scoreSecondHalf: "1-1 (3-1 للجزائر في المجموع الحاسم)",
      scoreFullTime: "3-1 لصالح الجزائر 🇩🇿",
      cardsFirstHalf: "لا توجد بطاقات",
      cardsSecondHalf: "بطاقتين (2) صفراء",
      cardsFullTime: "بطاقتين في اللقاء",
      cornersFirstHalf: "3 ركنيات للجزائر",
      cornersSecondHalf: "4 ركنيات",
      cornersFullTime: "7 ركنيات إجمالية",
      firstToScore: "الجزائر 🇩🇿",
      winner: "الجزائر 🇩🇿",
      doubleChance: "فوز الجزائر مباشرة (2)"
    }
  },
  {
    id: 3,
    date: "الخميس, 11/06/2026",
    league: "مباراة ودية",
    team1: { name: "النمسا", flag: "🇦🇹" },
    team2: { name: "جواتيمالا", flag: "🇬🇹" },
    time: "05:00 ص",
    isVip: false,
    isCanceled: true,
    prediction: "ملغاة",
    predictionDetails: "المباراة تم إلغاؤها بقرار من المنظمين بسبب ظروف تقنية."
  },
  {
    id: 4,
    date: "الخميس, 11/06/2026",
    league: "دورة تولون الدولية",
    team1: { name: "فنزويلا", flag: "🇻🇪" },
    team2: { name: "اليابان", flag: "🇯🇵" },
    time: "12:30 م",
    isVip: false,
    prediction: "تعادل إيجابي 1-1",
    predictionDetails: "دورة تولون تشهد مستويات متقاربة للمنتخبات الشابة. نتوقع تعادلاً تكتيكياً بين الفريقين."
  },
  {
    id: 5,
    date: "الخميس, 11/06/2026",
    league: "دورة تولون الدولية",
    team1: { name: "البرتغال", flag: "🇵🇹" },
    team2: { name: "كندا", flag: "🇨🇦" },
    time: "06:00 م",
    isVip: false,
    prediction: "فوز البرتغال 2-0",
    predictionDetails: "البرتغال تمتلك تنظيماً دفاعياً قوياً ومهارات فردية عالية كفيلة بتحقيق النقاط الثلاث."
  },

  // الجمعة, 12/06/2026
  {
    id: 6,
    date: "الجمعة, 12/06/2026",
    league: "كأس العالم",
    team1: { name: "كوريا الجنوبية", flag: "🇰🇷" },
    team2: { name: "التشيك", flag: "🇨🇿" },
    time: "03:00 ص",
    isVip: false,
    prediction: "فوز كوريا الجنوبية 1-0",
    predictionDetails: "السرعة العالية في المرتدات الكورية ستشكل الكابوس الأكبر للدفاع التشيكي المترنح."
  },
  {
    id: 7,
    date: "الجمعة, 12/06/2026",
    league: "كأس العالم",
    team1: { name: "كندا", flag: "🇨🇦" },
    team2: { name: "البوسنة", flag: "🇧🇦" },
    time: "08:00 م",
    isVip: false,
    prediction: "تعادل 1-1",
    predictionDetails: "مباراة بدنية قوية من الطرفين، يغلب عليها التحفظ التكتيكي وصعوبة التسجيل."
  },
  {
    id: 8,
    date: "الجمعة, 12/06/2026",
    league: "البطولة الوطنية المغربية",
    team1: { name: "الفتح الرباطي", flag: "🇲🇦" },
    team2: { name: "المغرب الفاسي", flag: "🇲🇦" },
    time: "04:00 م",
    isVip: false,
    prediction: "فوز الفتح الرباطي 1-0",
    predictionDetails: "أفضلية دفاعية ممتازة للفتح الرباطي على ملعبه وبين جماهيره العريضة."
  },
  {
    id: 9,
    date: "الجمعة, 12/06/2026",
    league: "البطولة الوطنية المغربية",
    team1: { name: "أولمبيك آسفي", flag: "🇲🇦" },
    team2: { name: "الكوكب المراكشي", flag: "🇲🇦" },
    time: "04:00 م",
    isVip: false,
    prediction: "فوز أولمبيك آسفي 2-1",
    predictionDetails: "ديربي حاسم ومثير، دوافع آسفي في التقدم بالترتيب ستمنحهم أفضلية هجومية طفيفة."
  },
  {
    id: 10,
    date: "الجمعة, 12/06/2026",
    league: "البطولة الوطنية المغربية",
    team1: { name: "الدفاع الجديدي", flag: "🇲🇦" },
    team2: { name: "أولمبيك الدشيرة", flag: "🇲🇦" },
    time: "06:00 م",
    isVip: false,
    prediction: "تعادل سلبي 0-0",
    predictionDetails: "مباراة مغلقة تكتيكياً بشكل كبير مع انحسار اللعب في وسط الميدان دون خطورة محققة."
  },
  {
    id: 11,
    date: "الجمعة, 12/06/2026",
    league: "البطولة الوطنية المغربية",
    team1: { name: "النادي المكناسي", flag: "🇲🇦" },
    team2: { name: "نهضة الزمامرة", flag: "🇲🇦" },
    time: "06:00 م",
    isVip: false,
    prediction: "فوز نهضة الزمامرة 1-0",
    predictionDetails: "المرونة التكتيكية والهجمات المرتدة السريعة لنهضة الزمامرة تضمن لهم حصد النقاط."
  },

  // السبت, 13/06/2026
  {
    id: 12,
    date: "السبت, 13/06/2026",
    league: "كأس العالم",
    team1: { name: "أمريكا", flag: "🇺🇸" },
    team2: { name: "باراغواي", flag: "🇵🇾" },
    time: "02:00 ص",
    isVip: false,
    prediction: "فوز أمريكا 2-1",
    predictionDetails: "سرعة الأجنحة واللعب الجماعي للمنتخب الأمريكي سيتفوق على صلابة دفاع باراغواي."
  },
  {
    id: 13,
    date: "السبت, 13/06/2026",
    league: "كأس العالم",
    team1: { name: "قطر", flag: "🇶🇦" },
    team2: { name: "سويسرا", flag: "🇨🇭" },
    time: "08:00 م",
    isVip: false,
    prediction: "فوز سويسرا 2-0",
    predictionDetails: "الخبرة والانضباط السويسري في البطولات الكبرى يصنع الفارق في الدقائق الحاسمة من اللقاء."
  },
  {
    id: 14,
    date: "السبت, 13/06/2026",
    league: "كأس العالم",
    team1: { name: "البرازيل", flag: "🇧🇷" },
    team2: { name: "المغرب", flag: "🇲🇦" },
    time: "11:00 م",
    isVip: true,
    prediction: "فوز المغرب 2-1 (مفاجأة!)",
    predictionDetails: "منتخب أسود الأطلس يمتلك تشكيلة متماسكة وثقة عالية وقدرة فريدة على تحييد هجوم السامبا وضربهم بالمرتدات.",
    vipDetails: {
      goalsFirstHalf: "هدَف واحد (1)",
      goalsSecondHalf: "هدفين (2)",
      scoreFirstHalf: "1-0 للمغرب",
      scoreSecondHalf: "1-1 (2-1 للمغرب إجمالي)",
      scoreFullTime: "2-1 المغرب 🇲🇦",
      cardsFirstHalf: "بطاقتين (2) صفراء",
      cardsSecondHalf: "4 بطاقات صفراء وبطاقة حمراء للبرازيل",
      cardsFullTime: "6 بطاقات صفراء، 1 حمراء",
      cornersFirstHalf: "3 ركنيات للمغرب",
      cornersSecondHalf: "5 ركنيات للبرازيل",
      cornersFullTime: "8 ركنيات في اللقاء",
      firstToScore: "المغرب 🇲🇦 (يوسف النصيري د 38)",
      winner: "المغرب 🇲🇦",
      doubleChance: "فوز المغرب أو تعادل (1X)"
    }
  },
  {
    id: 15,
    date: "السبت, 13/06/2026",
    league: "دوري نجوم العراق",
    team1: { name: "كربلاء", flag: "🇮🇶" },
    team2: { name: "أمانة بغداد", flag: "🇮🇶" },
    time: "04:30 م",
    isVip: false,
    prediction: "تعادل إيجابي 1-1",
    predictionDetails: "مباراة متوازنة في الدوري العراقي الممتاز، رغبة تفادي الخسارة ستطغى على تكتيكات المدربين."
  },

  // الأحد, 14/06/2026
  {
    id: 16,
    date: "الأحد, 14/06/2026",
    league: "كأس العالم",
    team1: { name: "هايتي", flag: "🇭🇹" },
    team2: { name: "إسكتلندا", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
    time: "02:00 ص",
    isVip: false,
    prediction: "فوز إسكتلندا 3-0",
    predictionDetails: "الفوارق الفنية والبدنية هائلة لصالح المنتخب الإسكتلندي وخاصة في الكرات الهوائية والعرضيات."
  },
  {
    id: 17,
    date: "الأحد, 14/06/2026",
    league: "كأس العالم",
    team1: { name: "أستراليا", flag: "🇦🇺" },
    team2: { name: "تركيا", flag: "🇹🇷" },
    time: "05:00 ص",
    isVip: false,
    prediction: "فوز تركيا 2-1",
    predictionDetails: "الحماس الجماهيري والمهارات التركية الفردية ستتفوق على التنظيم البدني القوي للمنتخب الأسترالي."
  },
  {
    id: 18,
    date: "الأحد, 14/06/2026",
    league: "كأس العالم",
    team1: { name: "ألمانيا", flag: "🇩🇪" },
    team2: { name: "كوراساو", flag: "🇨🇼" },
    time: "06:00 م",
    isVip: true,
    prediction: "فوز ألمانيا 4-0",
    predictionDetails: "مباراة من طرف واحد، يتوقع فيها غزارة تهديفية لصالح الماكينات الألمانية لحسم العبور للدور المقبل.",
    vipDetails: {
      goalsFirstHalf: "هدفين (2)",
      goalsSecondHalf: "هدفين (2)",
      scoreFirstHalf: "2-0 لصالح ألمانيا",
      scoreSecondHalf: "2-0 (4-0 النتيجة النهائية)",
      scoreFullTime: "4-0 ألمانيا 🇩🇪",
      cardsFirstHalf: "لا توجد بطاقات",
      cardsSecondHalf: "بطاقة واحدة لكوراساو",
      cardsFullTime: "بطاقة واحدة في اللقاء كامل",
      cornersFirstHalf: "6 ركنيات لألمانيا",
      cornersSecondHalf: "7 ركنيات لألمانيا",
      cornersFullTime: "13 ركنية إجمالية",
      firstToScore: "ألمانيا 🇩🇪",
      winner: "ألمانيا 🇩🇪",
      doubleChance: "فوز ألمانيا مباشرة وبغزارة أهداف (أكثر من 3.5 أهداف)"
    }
  },
  {
    id: 19,
    date: "الأحد, 14/06/2026",
    league: "كأس العالم",
    team1: { name: "هولندا", flag: "🇳🇱" },
    team2: { name: "اليابان", flag: "🇯🇵" },
    time: "09:00 م",
    isVip: false,
    prediction: "تعادل مثير 2-2",
    predictionDetails: "مواجهة فنية من الطراز الرفيع، السرعة اليابانية والشراسة الهولندية سينتجان مباراة هجومية وممتعة."
  },
  {
    id: 20,
    date: "الأحد, 14/06/2026",
    league: "البطولة الوطنية المغربية",
    team1: { name: "إتحاد طنجة", flag: "🇲🇦" },
    team2: { name: "يعقوب المنصور", flag: "🇲🇦" },
    time: "04:00 م",
    isVip: false,
    prediction: "فوز إتحاد طنجة 2-0",
    predictionDetails: "دعم جماهير طنجة في ملعبهم سيكون الدافع الأساسي لإحراز النقاط وضمان استقرار الفريق بجدول الترتيب."
  },
  {
    id: 21,
    date: "الأحد, 14/06/2026",
    league: "البطولة الوطنية المغربية",
    team1: { name: "الرجاء الرياضي", flag: "🇲🇦" },
    team2: { name: "إتحاد تواركة", flag: "🇲🇦" },
    time: "04:00 م",
    isVip: false,
    prediction: "فوز الرجاء الرياضي 2-1",
    predictionDetails: "النسر الرجاوي يسعى لمواصلة التنافس على الصدارة. القوة الهجومية للرجاء ستصنع الفارق في الشوط الثاني."
  },
  {
    id: 22,
    date: "الأحد, 14/06/2026",
    league: "البطولة الوطنية المغربية",
    team1: { name: "حسنية أكادير", flag: "🇲🇦" },
    team2: { name: "نهضة بركان", flag: "🇲🇦" },
    time: "04:00 م",
    isVip: false,
    prediction: "فوز نهضة بركان 1-0",
    predictionDetails: "نهضة بركان بتنظيم دفاعي حديدي لا يقهر وخبرتها الطويلة تلتقط هدفاً ثميناً من خطأ دفاعي للبلدية."
  },
  {
    id: 23,
    date: "الأحد, 14/06/2026",
    league: "البطولة الوطنية المغربية",
    team1: { name: "الجيش الملكي", flag: "🇲🇦" },
    team2: { name: "الوداد الرياضي", flag: "🇲🇦" },
    time: "04:00 م",
    isVip: true,
    prediction: "تعادل الكلاسيكو 1-1",
    predictionDetails: "كلاسيكو المغرب الكبير ناري كالعادة. التحفظ الدفاعي من الفريقين لتجنب الهزيمة سينهي القمة بالتعادل.",
    vipDetails: {
      goalsFirstHalf: "لا توجد أهداف (0)",
      goalsSecondHalf: "هدفين (2)",
      scoreFirstHalf: "0-0 تعادل سلبي تكتيكي",
      scoreSecondHalf: "1-1 (كول كول في الشوط الثاني)",
      scoreFullTime: "1-1 تعادل إيجابي مثير",
      cardsFirstHalf: "3 بطاقات صفراء",
      cardsSecondHalf: "4 بطاقات صفراء وبطاقة حمراء",
      cardsFullTime: "7 بطاقات، 1 حمراء",
      cornersFirstHalf: "2 ركنيات",
      cornersSecondHalf: "4 ركنيات للوداد",
      cornersFullTime: "6 ركنيات إجمالية",
      firstToScore: "الجيش الملكي 🇲🇦 (من ركلة جزاء)",
      winner: "تعادل الكلاسيكو 🤝",
      doubleChance: "تعادل أو فوز أحد الطرفين (فرصة كاملة)"
    }
  },

  // الاثنين, 15/06/2026
  {
    id: 24,
    date: "الاثنين, 15/06/2026",
    league: "كأس العالم",
    team1: { name: "ساحل العاج", flag: "🇨🇮" },
    team2: { name: "الإكوادور", flag: "🇪🇨" },
    time: "12:00 ص",
    isVip: false,
    prediction: "فوز ساحل العاج 2-1",
    predictionDetails: "السرعة الأفريقية والصلابة التكتيكية للأفيال ستعوق تقدم المنتخب الإكوادوري العنيد."
  },
  {
    id: 25,
    date: "الاثنين, 15/06/2026",
    league: "كأس العالم",
    team1: { name: "السويد", flag: "🇸🇪" },
    team2: { name: "تونس", flag: "🇹🇳" },
    time: "03:00 ص",
    isVip: false,
    prediction: "تعادل سلبي 0-0",
    predictionDetails: "النسور التونسية سيعتمدون على إحكام الدفاع المنظم، مما يصعب المهمة على الطول والكرات العالية للسويديين."
  },
  {
    id: 26,
    date: "الاثنين, 15/06/2026",
    league: "كأس العالم",
    team1: { name: "إسبانيا", flag: "🇪🇸" },
    team2: { name: "الرأس الأخضر", flag: "🇨🇻" },
    time: "05:00 م",
    isVip: false,
    prediction: "فوز إسبانيا 3-1",
    predictionDetails: "الاستحواذ التام لـ 'لاروخا' والكرات القصيرة المكررة سيفكك الخطوط الدفاعية للرأس الأخضر."
  },
  {
    id: 27,
    date: "الاثنين, 15/06/2026",
    league: "كأس العالم",
    team1: { name: "بلجيكا", flag: "🇧🇪" },
    team2: { name: "مصر", flag: "🇪🇬" },
    time: "08:00 م",
    isVip: true,
    prediction: "فوز مصر 2-1",
    predictionDetails: "الملك المصري محمد صلاح ورفاقه سينقضون على الدفاع البلجيكي البطيء بفضل التحولات الهجومية الصاعقة.",
    vipDetails: {
      goalsFirstHalf: "هدَف واحد (1)",
      goalsSecondHalf: "هدفين (2)",
      scoreFirstHalf: "1-0 لمصر",
      scoreSecondHalf: "1-1 (النتيجة النهائية 2-1 لمصر)",
      scoreFullTime: "2-1 لصالح الفراعنة 🇪🇬",
      cardsFirstHalf: "بطاقة صفراء لبلجيكا",
      cardsSecondHalf: "3 بطاقات صفراء",
      cardsFullTime: "4 بطاقات صفراء في اللقاء",
      cornersFirstHalf: "2 ركنيات لبلجيكا",
      cornersSecondHalf: "4 ركنيات لمصر",
      cornersFullTime: "6 ركنيات إجمالية",
      firstToScore: "مصر 🇪🇬 (تمريرة حاسمة لمحمد صلاح)",
      winner: "مصر 🇪🇬",
      doubleChance: "فوز مصر أو التعادل لضمان الأمان (X2)"
    }
  },
  {
    id: 28,
    date: "الاثنين, 15/06/2026",
    league: "كأس العالم",
    team1: { name: "السعودية", flag: "🇸🇦" },
    team2: { name: "أوروغواي", flag: "🇺🇾" },
    time: "11:00 م",
    isVip: true,
    prediction: "تعادل بطعم الفوز 1-1",
    predictionDetails: "المنتخب السعودي بجرينتا قوية وتنظيم رائع يخطف نقطة ثمينة من مخالب المنتخب اللاتيني الشرس.",
    vipDetails: {
      goalsFirstHalf: "لا توجد أهداف (0)",
      goalsSecondHalf: "هدفين (2)",
      scoreFirstHalf: "0-0 تعادل سلبي وحذر",
      scoreSecondHalf: "1-1 (الدقائق الأخيرة نارية)",
      scoreFullTime: "1-1 تعادل عادل",
      cardsFirstHalf: "بطاقتين (2)",
      cardsSecondHalf: "3 بطاقات صفراء",
      cardsFullTime: "5 بطاقات صفراء في المجموع",
      cornersFirstHalf: "3 ركنيات لأوروغواي",
      cornersSecondHalf: "4 ركنيات",
      cornersFullTime: "7 ركنيات إجمالية",
      firstToScore: "الأوروغواي 🇺🇾",
      winner: "تعادل إيجابي 🤝",
      doubleChance: "تعادل أو فوز أوروغواي (فرصة مزدوجة)"
    }
  },

  // الثلاثاء, 16/06/2026
  {
    id: 29,
    date: "الثلاثاء, 16/06/2026",
    league: "كأس العالم",
    team1: { name: "إيران", flag: "🇮🇷" },
    team2: { name: "نيوزيلندا", flag: "🇳🇿" },
    time: "02:00 ص",
    isVip: false,
    prediction: "فوز إيران 2-0",
    predictionDetails: "الصلابة الإيرانية والانضباط العالي بمثابة مفتاح الفوز مع استغلال الثغرات الدفاعية لنيوزيلندا."
  },
  {
    id: 30,
    date: "الثلاثاء, 16/06/2026",
    league: "كأس العالم",
    team1: { name: "فرنسا", flag: "🇫🇷" },
    team2: { name: "السنغال", flag: "🇸🇳" },
    time: "08:00 م",
    isVip: true,
    prediction: "فوز فرنسا 2-1",
    predictionDetails: "صدام العملاقيين، الخبرة والمهارات الاستثنائية لفرنسا ستحسم اللقاء الصعب بأقل الفوارق.",
    vipDetails: {
      goalsFirstHalf: "هدَف واحد (1)",
      goalsSecondHalf: "هدفين (2)",
      scoreFirstHalf: "1-0 لصالح فرنسا",
      scoreSecondHalf: "1-1 (مجموع اللقاء 2-1 لفرنسا)",
      scoreFullTime: "2-1 فرنسا 🇫🇷",
      cardsFirstHalf: "بطاقة واحدة للسنغال",
      cardsSecondHalf: "3 بطاقات صفراء",
      cardsFullTime: "4 بطاقات صفراء",
      cornersFirstHalf: "4 ركنيات",
      cornersSecondHalf: "4 ركنيات",
      cornersFullTime: "8 ركنيات إجمالية",
      firstToScore: "فرنسا 🇫🇷 (مبابي د 21)",
      winner: "فرنسا 🇫🇷",
      doubleChance: "فوز فرنسا أو التعادل (1X)"
    }
  },
  {
    id: 31,
    date: "الثلاثاء, 16/06/2026",
    league: "كأس العالم",
    team1: { name: "العراق", flag: "🇮🇶" },
    team2: { name: "النرويج", flag: "🇳🇴" },
    time: "11:00 م",
    isVip: false,
    prediction: "تعادل 2-2",
    predictionDetails: "أسود الرافدين يواجهون قوة هالاند وزملائه ولديهم العزيمة لخطف التعادل في ملحمة تهديفية مثيرة."
  }
];
