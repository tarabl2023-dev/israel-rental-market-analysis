// Arabic. Keys are the English text on the page; {placeholders} are filled in by the page.
window.I18N = window.I18N || {};
(function () {
  const R = "https://github.com/tarabl2023-dev/israel-rental-market-analysis/blob/main/";
  window.I18N.ar = {
    // ---- header, search ----
    "Israel Rent Finder": "الإيجار في إسرائيل",
    "@brand": "الإيجار <span>في إسرائيل</span>",
    "What renting really costs, city by city": "كم يكلّف الإيجار فعلًا، مدينة بمدينة",
    "Official CBS data": "بيانات رسمية من دائرة الإحصاء",
    "Where": "أين",
    "Type a city, e.g. Herzliya or הרצליה": "اكتب اسم مدينة، مثل هرتسليا",
    "Rooms": "الغرف",
    "Fewer rooms": "غرف أقل", "More rooms": "غرف أكثر",
    "Area in the city": "منطقة في المدينة",
    "Transport": "المواصلات",
    "Walk to train / light rail": "مشيًا إلى القطار / القطار الخفيف", "Bus is fine": "الحافلة تكفي", "I'll drive": "سأستخدم السيارة",
    "Max budget / month": "الحد الأقصى للميزانية شهريًا",
    "Any": "أي",
    "No budget limit": "بلا حدّ للميزانية",
    "Jan-Mar": "يناير–مارس", "Apr-Jun": "أبريل–يونيو", "Jul-Sep": "يوليو–سبتمبر", "Oct-Dec": "أكتوبر–ديسمبر",
    "{n} room": "غرفة واحدة", "{n} rooms": "{n} غرف",
    "Whole district average": "متوسط اللواء كله", "National average": "المتوسط القطري",
    "{district} · district estimate": "{district} · تقدير حسب اللواء",
    "Israel (national average)": "إسرائيل (المتوسط القطري)",
    "No match. Try the nearest big city or pick its district.": "لا توجد نتيجة. جرّب أقرب مدينة كبيرة أو اختر اللواء.",
    "= {n} bed + living": "= {n} غرف نوم + صالون", "= studio": "= ستوديو",

    // ---- hero ----
    "Budget": "اقتصادي", "Comfortable": "مريح", "Luxury": "فاخر",
    "✓ Selected": "✓ مختار", "Fits budget": "ضمن الميزانية",
    "Older building, often no lift or parking, in a less central area.": "مبنى قديم، غالبًا بلا مصعد أو موقف سيارات، في منطقة أقل مركزية.",
    "The average contract here: a decent, maintained flat.": "العقد المتوسط هنا: شقة جيدة ومعتنى بها.",
    "New tower with lift, parking, safe room and a big balcony.": "برج جديد مع مصعد وموقف وغرفة آمنة وشرفة كبيرة.",
    "Tap a level to use it for your costs and search.": "اضغط على مستوى لاستخدامه في التكاليف والبحث.",
    "Match my budget again": "العودة إلى ما يناسب ميزانيتي",
    "Most expensive": "الأغلى", "Best value": "الأفضل قيمة", "Fastest rising": "الأسرع ارتفاعًا",
    "Estimate": "تقدير", "In budget": "ضمن الميزانية", "Over budget": "فوق الميزانية", "District estimate": "تقدير حسب اللواء",
    "{district} · district figures": "{district} · أرقام اللواء",
    "Nationwide": "كل البلاد", "Whole district": "اللواء كله", "All of Israel": "كل إسرائيل",
    "Photo:": "تصوير:",
    "/ month": "/ شهريًا", "/mo": "/شهريًا", "/yr": " سنويًا", "a month": "شهريًا",
    "Typical {rooms} apartment in {place} · CBS data for {band} rooms, {quarter}": "شقة نموذجية ({rooms}) في {place} · بيانات دائرة الإحصاء لـ {band} غرف، {quarter}",
    "RM": "غرف", "BD": "غرف نوم", "Studio": "ستوديو",
    "vs Israel": "مقارنة بإسرائيل", "in a year": "خلال سنة", "margin": "هامش الخطأ",
    "No rail stations": "لا محطات قطار",
    "train": "قطار", "light rail": "قطار خفيف", "Carmelit": "الكرمليت",
    "usually pricier than the city average": "عادةً أغلى من متوسط المدينة", "around the city average": "قريب من متوسط المدينة",
    "usually cheaper than the city average": "عادةً أرخص من متوسط المدينة",
    "By the beach": "قرب البحر",
    "near a train or light-rail station": "قرب محطة قطار أو قطار خفيف", "further from public transport": "أبعد عن المواصلات العامة",
    "about {price}/month": "حوالي {price} شهريًا",
    "CBS doesn't publish rents for {town}, so these figures use the {district} average. Rents in {town} may differ.":
      "دائرة الإحصاء لا تنشر الإيجارات في {town}، لذا تستخدم هذه الأرقام متوسط {district}. قد تختلف الإيجارات في {town}.",
    "{city} has only one rail station, so fewer homes are within walking distance of one.": "في {city} محطة قطار واحدة فقط، لذا عدد قليل من الشقق قريب منها مشيًا.",
    "{city} has no rail stations, so fewer homes are within walking distance of one.": "لا توجد محطات قطار في {city}، لذا قليل من الشقق قريب من محطة.",
    "{city} has only two rail stations, so fewer homes are within walking distance of one.": "في {city} محطتا قطار فقط، لذا عدد قليل من الشقق قريب منهما مشيًا.",
    "CBS doesn't publish rents for {city} (under 100,000 residents), so these figures use neighbouring {proxy}.":
      "دائرة الإحصاء لا تنشر الإيجارات في {city} (أقل من 100,000 نسمة)، لذا تستخدم الأرقام بيانات {proxy} المجاورة.",
    "CBS doesn't publish a 1-2 room figure for {city}, so this one is estimated from its 2.5-3 room rent.":
      "دائرة الإحصاء لا تنشر رقمًا لشقق 1-2 غرف في {city}، لذا قُدّر من إيجار شقق 2.5-3 غرف.",
    "The 4.5+ band includes everything from 4.5 rooms to large penthouses, so treat it as a rough guide.":
      "فئة 4.5+ غرف تشمل كل شيء من 4.5 غرف إلى البنتهاوس الكبير، لذا هي تقدير تقريبي.",
    "District figures average all towns in the district, including its big cities.": "أرقام اللواء هي متوسط كل البلدات فيه، بما فيها المدن الكبيرة.",
    "<strong>No budget limit.</strong> Here the range runs from about {lo} for a basic flat to {hi} or more for the best homes. The priciest big city for {band} rooms is {top}.":
      "<strong>بلا حدّ للميزانية.</strong> هنا يتراوح السعر من حوالي {lo} لشقة بسيطة إلى {hi} أو أكثر لأفضل الشقق. أغلى مدينة كبيرة لـ {band} غرف هي {top}.",
    "<strong>{b}</strong> covers a <strong>luxury</strong> flat here.": "<strong>{b}</strong> تكفي لشقة <strong>فاخرة</strong> هنا.",
    "<strong>{b}</strong> gets you a <strong>comfortable</strong> flat here. Luxury starts at about {lux}.": "<strong>{b}</strong> تكفي لشقة <strong>مريحة</strong> هنا. الفاخر يبدأ من حوالي {lux}.",
    "<strong>{b}</strong> fits the <strong>budget</strong> level here. A typical flat costs about {avg}.": "<strong>{b}</strong> تناسب المستوى <strong>الاقتصادي</strong> هنا. الشقة النموذجية تكلّف حوالي {avg}.",
    "<strong>{b}</strong> is below the budget level here (about {min}). Try fewer rooms or another city.": "<strong>{b}</strong> أقل من المستوى الاقتصادي هنا (حوالي {min}). جرّب غرفًا أقل أو مدينة أخرى.",
    "It covers the average {band} room rent in <strong>{n} of {total}</strong> big cities (marked In budget below).":
      "تغطي متوسط إيجار {band} غرف في <strong>{n} من {total}</strong> مدن كبيرة (مُعلّمة «ضمن الميزانية» أدناه).",

    // ---- cost of living ----
    "Rent plus everyday living costs for your household": "الإيجار مع تكاليف المعيشة اليومية لأسرتك",
    "What it will really cost in {place}": "كم سيكلّف فعلًا في {place}",
    "Adults": "البالغون", "Children": "الأطفال", "Lifestyle": "نمط الحياة",
    "Fewer adults": "بالغون أقل", "More adults": "بالغون أكثر", "Fewer children": "أطفال أقل", "More children": "أطفال أكثر",
    "Compare with": "قارن مع", "Shabbat": "السبت", "Not included": "غير مشمول", "I keep Shabbat": "أحافظ على السبت",
    "Guests each Shabbat": "الضيوف كل سبت", "Fewer guests": "ضيوف أقل", "More guests": "ضيوف أكثر",
    "Meals you host": "الوجبات التي تستضيفها", "Friday night": "ليلة الجمعة", "Friday + lunch": "ليلة الجمعة + الغداء",
    "Add guests to include hosting": "أضف ضيوفًا لاحتساب الاستضافة",
    "Total per month": "المجموع شهريًا", "Monthly cost": "التكلفة الشهرية", "Difference": "الفرق", "Total": "المجموع",
    "Israel average": "متوسط إسرائيل", "Israel avg": "متوسط إسرائيل",
    "1 person": "شخص واحد", "{n} people": "{n} أشخاص",
    "Budget lifestyle": "نمط اقتصادي", "Comfortable lifestyle": "نمط مريح", "Luxury lifestyle": "نمط فاخر",
    "near a station": "قرب محطة", "public transport": "مواصلات عامة", "with a car": "مع سيارة",
    "vs {place}": "مقارنة بـ {place}", "Same": "متساوٍ", "more a month": "أكثر شهريًا", "less a month": "أقل شهريًا",
    "(both include Shabbat)": "(كلاهما يشمل السبت)",
    "🕯 Shabbat adds +{price} a month": "🕯 السبت يضيف ‎+{price} شهريًا",
    "≈ {price}/mo all-in →": "≈ {price} شهريًا شامل كل شيء ←",
    "Rent": "الإيجار", "Arnona (municipal tax)": "الأرنونا (ضريبة البلدية)", "Bills: electricity, water, gas, phone": "الفواتير: كهرباء، ماء، غاز، هاتف",
    "Groceries": "مشتريات البقالة", "Eating out & takeaway": "الأكل خارج البيت والطلبات", "Education": "التعليم",
    "Sport, fitness & entertainment": "الرياضة واللياقة والترفيه", "Health (private insurance, dental)": "الصحة (تأمين خاص، أسنان)",
    "Clothing & personal care": "الملابس والعناية الشخصية", "Shabbat meals & hosting": "وجبات السبت والاستضافة",
    "Budget level": "المستوى الاقتصادي", "Comfortable level": "المستوى المريح", "Luxury level": "المستوى الفاخر",
    ", +5% near a station": "، ‎+5% قرب محطة", ", −5% further out": "، ‎−5% أبعد", ", {pct} for {area}": "، ‎{pct} لـ {area}",
    "Typical car costs: fuel, insurance, upkeep": "تكاليف السيارة النموذجية: وقود، تأمين، صيانة",
    "{n} × Rav-Kav nationwide monthly pass (₪{price})": "{n} × اشتراك راف-كاف الشهري القطري (₪{price})",
    "Schools, kindergarten, after-school activities": "المدارس والروضات والأنشطة بعد المدرسة",
    "Gym, classes, events, outings": "النادي الرياضي، الدورات، الفعاليات، الخروجات",
    "Supermarket food, fruit & veg": "السوبرماركت والفواكه والخضار",
    "{people} of you + {guests} guests × {meals} festive meals a week (₪{fam} extra per family member, ₪{guest} per guest), about 4.3 Shabbatot a month":
      "{people} من أفراد الأسرة + {guests} ضيوف × {meals} وجبات احتفالية أسبوعيًا (₪{fam} إضافية لكل فرد، ₪{guest} لكل ضيف)، حوالي 4.3 سبت في الشهر",
    "{people} of you × {meals} festive meals a week (₪{fam} extra per family member), about 4.3 Shabbatot a month":
      "{people} من أفراد الأسرة × {meals} وجبات احتفالية أسبوعيًا (₪{fam} إضافية لكل فرد)، حوالي 4.3 سبت في الشهر",
    "≈ same": "≈ متساوٍ",
    "Everyday costs: typical spending in the {region} (CBS Household Expenditure Survey 2021, at 2026 prices), scaled to your household. Estimates, not price quotes. See “How the estimates work”.":
      "التكاليف اليومية: الإنفاق النموذجي في {region} (مسح إنفاق الأسر لدائرة الإحصاء 2021، بأسعار 2026)، معدّلة حسب أسرتك. هذه تقديرات وليست عروض أسعار. انظر «كيف تُحسب التقديرات».",

    // ---- search guide ----
    "Copy-and-paste searches and filters for Israeli rental sites": "عمليات بحث وفلاتر جاهزة للنسخ لمواقع الإيجار الإسرائيلية",
    "How to search for {rooms} in {place}": "كيف تبحث عن {rooms} في {place}",
    "your town": "بلدتك", "Your town": "بلدتك",
    "Go straight to the listings": "مباشرة إلى الإعلانات", "Go straight to the listings in {place}": "مباشرة إلى الإعلانات في {place}",
    "All my filters": "كل الفلاتر", "Rooms & budget only": "الغرف والميزانية فقط", "Just the city": "المدينة فقط",
    "How strict the links are": "مدى دقة الروابط",
    "Then narrow it down: search for": "ثم ضيّق البحث: ابحث عن",
    "Set these filters": "اضبط هذه الفلاتر",
    "Add keywords for your level": "أضف كلمات مفتاحية لمستواك",
    "Hebrew": "العبرية", "English": "الإنجليزية", "Facebook": "فيسبوك", "Copy": "نسخ",
    "City": "المدينة", "Neighbourhood": "الحيّ", "Price per month": "السعر شهريًا", "Property type": "نوع العقار",
    "Leave empty": "اتركه فارغًا", "No budget limit, so don't cap the price.": "بلا حدّ للميزانية، فلا تحدّد السعر.",
    "Up to {price}": "حتى {price}", "Your budget.": "ميزانيتك.",
    "The comfortable range. Budget: up to {b}, luxury: from {l}.": "النطاق المريح. الاقتصادي: حتى {b}، الفاخر: من {l}.",
    "any": "بلا حدّ",
    "Type your town's name in Hebrew or English.": "اكتب اسم بلدتك بالعبرية أو الإنجليزية.",
    "Tick these beach-side neighbourhoods on the site.": "اختر هذه الأحياء القريبة من البحر في الموقع.",
    "The Yad2 button already opens this neighbourhood.": "زر يد2 يفتح هذا الحيّ مباشرة.",
    "Type it into the site's location box after the city.": "اكتبه في خانة الموقع بعد اسم المدينة.",
    "From 6": "من 6", "From {a} to {b}": "من {a} إلى {b}", "Widen it to {lo} - {hi} to see more homes.": "وسّعه إلى {lo} - {hi} لرؤية شقق أكثر.",
    "(apartment)": "(شقة)", "For luxury also try {a} (garden flat) and {b}.": "للفاخر جرّب أيضًا {a} (شقة مع حديقة) و{b}.",
    "your level": "مستواك", "For your transport choice": "حسب اختيار المواصلات", "For your area and needs": "حسب المنطقة واحتياجاتك",
    "Useful at any level": "مفيد في كل مستوى", "filter": "فلتر",
    "no agent's fee": "بلا عمولة وسيط", "self-contained unit": "وحدة سكنية مستقلة", "price negotiable": "السعر قابل للتفاوض", "older flat": "شقة قديمة",
    "lift": "مصعد", "parking": "موقف سيارات", "renovated": "مُجدّدة", "air-conditioning": "تكييف", "safe room": "غرفة آمنة (ممّاد)",
    "new building": "مبنى جديد", "sun balcony": "شرفة مشمسة", "penthouse": "بنتهاوس",
    "available now": "دخول فوري", "furnished": "مفروشة", "pets allowed": "مسموح بالحيوانات",
    "near the train": "قرب القطار", "near the light rail": "قرب القطار الخفيف", "near public transport": "قرب المواصلات العامة",
    "near a bus stop": "قرب موقف حافلات", "central": "مركزي", "registered private parking": "موقف خاص مسجّل", "quiet area": "منطقة هادئة",
    "near the beach": "قرب البحر", "sea view": "إطلالة على البحر", "near a synagogue": "قرب كنيس", "Shabbat (e.g. Shabbat lift)": "سبت (مثل مصعد السبت)",
    "@kwTip": "اضغط على الكلمات لإضافتها إلى بحثك. الكلمات المعلّمة «فلتر» تُفعَّل أيضًا في المواقع التي تدعمها عند فتح الروابط أعلاه. يمكن للمتصفح ترجمة الإعلانات (نقرة يمين ← ترجمة). <bdi dir=\"rtl\" lang=\"he\">תיווך</bdi> تعني عبر وسيط قد يأخذ عمولة.",

    // ---- links ----
    "Realta · all sites in one": "Realta · كل المواقع في مكان واحد", "Facebook groups": "مجموعات فيسبوك",
    "6+ rooms": "6+ غرف", "{a}-{b} rooms": "{a}-{b} غرف", "your city only": "مدينتك فقط",
    "up to {price}/month": "حتى {price} شهريًا", "any price (enter a budget to cap it)": "أي سعر (أدخل ميزانية لتحديده)",
    "Realta, which combines all the sites": "Realta التي تجمع كل المواقع",
    "Included in the links:": "مشمول في الروابط:",
    "Realta opens its “{page}” page for your city; ": "Realta تفتح صفحة «{page}» لمدينتك؛ ",
    "near the sea": "قرب البحر", "no agent": "بلا وسيط",
    "Realta gets rooms and budget; ": "Realta تحصل على الغرف والميزانية؛ ",
    "Yad2 and Komo get all of these (and the neighbourhood); OnMap gets rooms and price; Homeless and Madlan open your city.":
      "يد2 وكومو تحصلان على كل هذا (والحيّ)؛ OnMap تحصل على الغرف والسعر؛ هوملس ومدلان تفتحان مدينتك.",
    "Yad2 and Komo get all of these; OnMap gets rooms and price; Homeless and Madlan open your city.":
      "يد2 وكومو تحصلان على كل هذا؛ OnMap تحصل على الغرف والسعر؛ هوملس ومدلان تفتحان مدينتك.",
    "<b>Nothing found?</b> Smaller sites have few ads in some cities, and many ads don't tag features like a lift or safe room. Try {next}.":
      "<b>لم تجد شيئًا؟</b> المواقع الصغيرة فيها إعلانات قليلة في بعض المدن، وكثير من الإعلانات لا تذكر مزايا مثل المصعد أو الغرفة الآمنة. جرّب {next}.",
    "Each button opens {city}'s rental listings in a new tab.": "كل زر يفتح إعلانات الإيجار في {city} في تبويب جديد.",
    "Each button opens {city}'s rental listings in a new tab (Yad2 opens {hood} directly).": "كل زر يفتح إعلانات الإيجار في {city} في تبويب جديد (يد2 يفتح {hood} مباشرة).",
    "Each button opens {city}'s rental listings in a new tab. Add the neighbourhood {names} in the site's location box.": "كل زر يفتح إعلانات الإيجار في {city} في تبويب جديد. أضف الحيّ {names} في خانة الموقع.",
    "names": "(الأسماء)",
    "Yad2 opens {town}'s listings; on the other sites pick {town} in the search, then use the filters below.": "يد2 يفتح إعلانات {town}؛ في المواقع الأخرى اختر {town} في البحث ثم استخدم الفلاتر أدناه.",
    "Opens the site's rental search in a new tab. Pick {town} there, then use the filters below.": "يفتح بحث الإيجار في الموقع في تبويب جديد. اختر {town} هناك ثم استخدم الفلاتر أدناه.",
    "Where to look": "أين تبحث", "Rental sites and groups worth checking": "مواقع ومجموعات إيجار تستحق التصفح",
    "great for {place}": "ممتاز لـ {place}", "Open": "فتح",
    "Collects listings from Yad2, Madlan, OnMap, Homeless, Komo and Facebook in one search. The best place to start.": "يجمع إعلانات يد2 ومدلان وOnMap وهوملس وكومو وفيسبوك في بحث واحد. أفضل مكان للبدء.",
    "Israel's biggest classifieds site, with the most rental listings.": "أكبر موقع إعلانات في إسرائيل، وفيه أكثر إعلانات الإيجار.",
    "Listings plus neighbourhood info: schools, transport and past prices.": "إعلانات ومعلومات عن الحيّ: مدارس، مواصلات، أسعار سابقة.",
    "Classifieds with many private landlords.": "لوحة إعلانات فيها كثير من المؤجرين الأفراد.",
    "Long-running classifieds site. Some listings don't appear elsewhere.": "موقع إعلانات قديم. بعض الإعلانات لا تظهر في مكان آخر.",
    "Map-based search, with an English version.": "بحث على الخريطة، مع نسخة إنجليزية.",
    "Finds your city's Facebook rental groups (via Google, no login needed). {group} is a big group for flats without agents.": "يجد مجموعات الإيجار لمدينتك في فيسبوك (عبر جوجل، بلا تسجيل دخول). {group} مجموعة كبيرة لشقق بلا وسطاء.",
    "English-speaking community board, strongest in Jerusalem and Beit Shemesh. Pick your region on the site.": "لوحة مجتمعية باللغة الإنجليزية، أقوى في القدس وبيت شيمش. اختر منطقتك في الموقع.",

    // ---- feed ----
    "Compare cities": "مقارنة المدن", "Sort": "ترتيب",
    "Price: high to low": "السعر: من الأعلى إلى الأدنى", "Price: low to high": "السعر: من الأدنى إلى الأعلى", "Best public transport": "أفضل مواصلات عامة",
    "Lowest total cost": "أقل تكلفة إجمالية", "Saved first": "المحفوظة أولًا",
    "{rooms} across {n} cities": "{rooms} في {n} مدينة",
    "Average monthly rent (comfortable level). Tap a city to see its prices.": "متوسط الإيجار الشهري (المستوى المريح). اضغط على مدينة لرؤية أسعارها.",
    "Remove {name}": "إزالة {name}", "Save {name}": "حفظ {name}",
    "rm": "غرف", "bd": "نوم",
    "Train / light rail / Carmelit stations": "محطات القطار / القطار الخفيف / الكرمليت",
    "based on {city}": "حسب {city}", "Compared with the most expensive city": "مقارنة بأغلى مدينة", "Your budget": "ميزانيتك",
    "≈ {price}/mo all-in for your household": "≈ {price} شهريًا شامل كل شيء لأسرتك",
    "You've seen all {n} cities": "شاهدت كل المدن الـ {n}",
    "Anywhere in {city}": "في أي مكان في {city}", "(pricier)": "(أغلى)", "(cheaper)": "(أرخص)",

    // ---- map, toasts ----
    "Avg rent · {band} rooms": "متوسط الإيجار · {band} غرف", "Selected": "المختارة", "🚆 Train & light rail": "🚆 القطار والقطار الخفيف",
    "Train station": "محطة قطار", "Light rail": "قطار خفيف", "Carmelit (metro)": "الكرمليت (مترو)",
    "The map couldn't load. Everything else still works.": "تعذّر تحميل الخريطة. كل شيء آخر يعمل.",
    "List": "القائمة", "Map": "الخريطة",
    "Copied: {text}": "تم النسخ: {text}",
    "Budget level selected": "تم اختيار المستوى الاقتصادي", "Comfortable level selected": "تم اختيار المستوى المريح", "Luxury level selected": "تم اختيار المستوى الفاخر",
    "Shabbat meals added to your costs": "أُضيفت وجبات السبت إلى تكاليفك",
    "Shabbat meals added to your costs. Add guests to include hosting.": "أُضيفت وجبات السبت إلى تكاليفك. أضف ضيوفًا لاحتساب الاستضافة.",
    "Added {w} as a filter on the links": "أُضيف {w} كفلتر في الروابط", "Removed {w} from the links": "أُزيل {w} من الروابط",
    "Added {w} to your search words": "أُضيف {w} إلى كلمات البحث", "Removed {w}": "أُزيل {w}",
    "Saved {name}": "تم حفظ {name}", "Removed {name}": "تمت إزالة {name}",

    // ---- extras ----
    "Add extras: nails, massages, a better gym…": "أضف إضافات: الأظافر، التدليك، نادٍ رياضي أفضل…",
    "These go on top of the average costs above. Prices are rough typical Israeli prices, so change them to match what you'd actually pay and how often.": "تُضاف هذه فوق متوسط التكاليف أعلاه. الأسعار تقريبية ونموذجية في إسرائيل، فغيّرها لتطابق ما تدفعه فعلًا وعدد المرات.",
    "Add your own, e.g. Hebrew lessons": "أضف شيئًا خاصًا، مثل دروس العبرية",
    "₪ per time": "₪ للمرة",
    "Times / month": "مرات / شهر",
    "Add": "إضافة",
    "Manicure / nails": "مانيكير / أظافر",
    "Massage": "تدليك",
    "Premium gym or country club": "نادٍ رياضي فاخر أو كانتري كلوب",
    "Pilates / yoga studio": "استوديو بيلاتس / يوغا",
    "Personal trainer session": "جلسة مدرب شخصي",
    "Hairdresser": "مصفف الشعر",
    "Facial / beauty treatment": "عناية بالوجه / تجميل",
    "Cleaner (3-hour visit)": "عاملة تنظيف (3 ساعات)",
    "Babysitter (evening out)": "جليسة أطفال (سهرة)",
    "Dog walker / pet care": "تمشية الكلب / رعاية الحيوانات",
    "Streaming & subscriptions": "البث والاشتراكات",
    "Café coffee": "قهوة في المقهى",
    "Extras & treats": "إضافات ورفاهيات",
    "Price each time": "السعر للمرة",
    "Times per month": "مرات في الشهر",
    "Added {w}": "أُضيف {w}",

    // ---- method, sources, footer ----
    "How the estimates work": "كيف تُحسب التقديرات", "Data source, price levels and photo credits": "مصادر البيانات ومستويات الأسعار وحقوق الصور",
    "Sources & data": "المصادر والبيانات",
    "Every number on this page comes from one of these sources. Each one links to the original and to the exact data file saved in the project, so you can check it yourself.":
      "كل رقم في هذه الصفحة يأتي من أحد هذه المصادر. لكل منها رابط إلى الأصل وإلى ملف البيانات المحفوظ في المشروع، لتتحقق بنفسك.",
    // market rents, smaller towns, neighbourhoods and Shabbat hosting
    "Opens {hood}": "يفتح {hood}",
    "📍 Opens {hood} directly: {sites}.": "📍 يفتح {hood} مباشرة: {sites}.",
    "Opens {city} only (add {names} in the site's location box): {sites}.": "يفتح {city} فقط (أضف {names} في خانة الموقع في الموقع): {sites}.",
    "the beach-side neighbourhoods": "الأحياء القريبة من البحر",
    "Drag to set your budget": "اسحب لتحديد ميزانيتك",
    "Median asking rent for {rooms} in {place}, adjusted to {hood} ({n} listings there), {date}": "وسيط الإيجار المطلوب ({rooms}) في {place}، معدّل لحي {hood} ({n} إعلانات هناك)، {date}",
    "Typical {rooms} apartment in {place} · CBS average brought up to today's asking rents, {date}": "شقة نموذجية ({rooms}) في {place} · متوسط دائرة الإحصاء معدّل لأسعار الإعلانات اليوم، {date}",
    "Typical {rooms} apartment in {place} · estimated from its other sizes (few listings right now), {date}": "شقة نموذجية ({rooms}) في {place} · مقدّرة من أحجام أخرى (إعلانات قليلة الآن)، {date}",
    "Median asking rent for {rooms} in {place} · {n} listings, {date}": "وسيط الإيجار المطلوب ({rooms}) في {place} · {n} إعلانات، {date}",
    "CBS average": "متوسط دائرة الإحصاء",
    "in a year (CBS)": "في سنة (دائرة الإحصاء)",
    "asking rents vs the {city} average ({n} listings), already in the prices above": "الإيجارات المطلوبة مقارنة بمتوسط {city} ({n} إعلانات)، محسوبة في الأسعار أعلاه",
    "The official CBS average for {band} rooms here is {cbs}. It includes long-running leases and renewals, so it runs below what you'd pay moving in today.": "المتوسط الرسمي لدائرة الإحصاء لـ {band} غرف هنا هو {cbs}. يشمل عقودًا قديمة وتجديدات، لذا هو أقل مما ستدفعه عند الانتقال اليوم.",
    "CBS doesn't publish rents for {town} (under 100,000 residents), so these figures come from its current listings only.": "دائرة الإحصاء لا تنشر إيجارات {town} (أقل من 100,000 نسمة)، لذا هذه الأرقام من إعلاناتها الحالية فقط.",
    "There are few {rooms} listings in {place} right now, so this one is estimated from its other sizes.": "هناك إعلانات قليلة ({rooms}) في {place} الآن، لذا هذا السعر مقدّر من أحجام أخرى.",
    "6+ rooms covers everything from large flats to villas and penthouses, so treat it as a rough guide.": "6+ غرف تشمل كل شيء من الشقق الكبيرة إلى الفلل والبنتهاوس، فاعتبرها دليلًا تقريبيًا.",
    "Median asking rent today (comfortable level). Tap a city to see its prices, or type any town in the search.": "وسيط الإيجار المطلوب اليوم (المستوى المريح). اضغط على مدينة لرؤية أسعارها، أو اكتب أي بلدة في البحث.",
    "Realta opens this neighbourhood directly. On other sites, type it into the location box after the city.": "Realta يفتح هذا الحي مباشرة. في المواقع الأخرى اكتبه في خانة الموقع بعد المدينة.",
    "Realta opens {hood} with your rooms and budget; ": "Realta يفتح {hood} بعدد غرفك وميزانيتك؛ ",
    "hosted each month: {d} × Friday dinner, {l} × Shabbat lunch, {guests} guests each time (₪{guest} per guest per meal)": "الاستضافة كل شهر: {d} × عشاء الجمعة، {l} × غداء السبت، {guests} ضيوف كل مرة (₪{guest} لكل ضيف في كل وجبة)",
    "Live listings + CBS data": "إعلانات حالية + بيانات دائرة الإحصاء",
    "Your own Shabbat meals": "وجبات السبت لأسرتك",
    "Shabbatot you host a month": "أيام السبت التي تستضيف فيها شهريًا",
    "Friday dinners with guests": "عشاء الجمعة مع ضيوف",
    "Shabbat lunches with guests": "غداء السبت مع ضيوف",
    "Guests at each hosted meal": "الضيوف في كل وجبة",
    "Fewer Shabbatot": "أيام سبت أقل",
    "More Shabbatot": "أيام سبت أكثر",
    "Fewer dinners": "عشاء أقل",
    "More dinners": "عشاء أكثر",
    "Fewer lunches": "غداء أقل",
    "More lunches": "غداء أكثر",
    "Big cities": "المدن الكبيرة",
    "Towns": "البلدات",
    "Districts": "الألوية",
    "Whole country": "كل البلاد",
    "@method":
      "<p><strong>المريح</strong> هو الوسيط لأسعار الإيجار المطلوبة اليوم في تلك البلدة ولذلك الحجم: السعر الأوسط للشقق المعروضة للإيجار الآن في يد2 ومدلان وOnMap وهوملس وكومو وفيسبوك، كما جمعها موقع Realta (لقطة بتاريخ <span id=\"m-date\"></span>). أنصاف الغرف مثل 3.5 غرف تقع بين الحجمين الكاملين على جانبيها. إذا كان في البلدة أقل من 3 إعلانات لحجم ما، يُقدَّر هذا الحجم من أقرب حجم ومن طريقة ارتفاع الإيجار مع عدد الغرف في كل البلاد.</p><p><strong>لماذا لا نعتمد رقم دائرة الإحصاء الرسمي؟</strong> دائرة الإحصاء (الجدول 4.9) تحسب متوسط كل العقود الموقّعة في الربع، بما فيها تجديد عقود بدأت قبل سنوات بأسعار أقل. لذلك هو أقل بكثير مما تدفعه عند الانتقال إلى شقة. لشقة من 4 غرف في القدس تعطي دائرة الإحصاء حوالي ₪6,200 عن <span id=\"m-quarter\"></span>، بينما الإعلان الوسيط اليوم حوالي ₪9,100. بجانب كل سعر في الصفحة يظهر متوسط دائرة الإحصاء كمرجع رسمي. الألوية وإسرائيل ككل ليس لها وسيط إعلانات، لذا تُستخدم فيها أرقام دائرة الإحصاء مضروبة في نسبة أسعار السوق إلى دائرة الإحصاء في مدنها الكبيرة.</p>" +
      "<p>مواقع الإعلانات أيضًا لا تنشر توزّع الأسعار. <strong>الاقتصادي</strong> و<strong>الفاخر</strong> قواعد تقريبية حول الوسيط:</p>" +
      "<ul><li>الاقتصادي: حوالي 80% من الوسيط (النطاق 70-90%)</li><li>المريح: الوسيط (النطاق 90-115%)</li><li>الفاخر: حوالي 140% من الوسيط (النطاق 125-170%)</li></ul>" +
      "<p><strong>الأحياء.</strong> يمكنك اختيار أي حي فيه إعلانات على Realta (حوالي 1,000 حي في 94 بلدة). يُقارن متوسط الإيجار المطلوب في كل حي بمتوسط بلدته، وهذه النسبة تحرّك كل الأسعار في الصفحة. الحي الذي فيه إعلانات قليلة يُسحب نحو متوسط البلدة، كي لا يغيّره إعلان واحد غير عادي. متوسطات الأحياء تخلط كل أحجام الشقق، لذا قد يبدو حي مليء بالشقق الصغيرة (أو الكبيرة جدًا) أرخص (أو أغلى) قليلًا. أيّ الأحياء «قرب البحر» هو تقديري المحلي.</p>" +
      "<p><strong>المواصلات العامة.</strong> عدد المحطات يشمل محطات القطار والقطار الخفيف والكرمليت داخل حدود المدينة، من OpenStreetMap. لا توجد بيانات رسمية عن تأثير قرب المحطات على الإيجار. دراسات أسعار <em>البيع</em> وجدت أن الشقق قرب القطار الخفيف في تل أبيب ارتفعت أسرع (<a href=\"https://en.globes.co.il/en/article-1001503910\" target=\"_blank\" rel=\"noopener noreferrer\">غلوبس</a>)، لذا يضيف اختيار المواصلات قاعدة تقريبية: حوالي ‎+5% قرب محطة، وحوالي ‎−5% أبعد إذا كنت تستخدم سيارة.</p>" +
      "<p><strong>كم سيكلّف فعلًا.</strong> التكاليف اليومية من مسح إنفاق الأسر لدائرة الإحصاء 2021 (الجدول 10) حسب القضاء، معدّلة لحجم أسرتك بمقياس «الأشخاص المعياريين» ومحدّثة لأسعار 2026 بمؤشر أسعار كل مجموعة سلع. بلا سيارة، المواصلات هي اشتراك راف-كاف الشهري القطري (₪315 لكل بالغ؛ يوجد اشتراك حافلات للأطراف بـ ₪139، انظر <a href=\"https://ravkavonline.co.il/en/ravkav-monthly-seasonal-contract\" target=\"_blank\" rel=\"noopener noreferrer\">Rav-Kav Online</a>). متوسط التعليم في المسح يشمل أسرًا بلا أطفال، لذا يُضاعف مع وجود أطفال كتقدير تقريبي. النمط الاقتصادي والفاخر يضربان الأكل خارج البيت والترفيه والملابس في 0.75 و1.5. هذه تقديرات للإنفاق النموذجي وليست عروض أسعار.</p>" +
      "<p><strong>السبت.</strong> تُحسب كل وجبة احتفالية بنحو ثلاثة أضعاف الوجبة العادية (الوجبة العادية للشخص حوالي ₪12، من إنفاق البقالة القطري لدائرة الإحصاء ÷ 90 وجبة شهريًا). الأسرة تشتري طعامها العادي أصلًا، لذا الإضافة حوالي ₪25 لكل فرد من الأسرة عن كل وجبة احتفالية كل أسبوع: ليلة الجمعة، أو ليلة الجمعة والغداء، في حوالي 4.3 سبت شهريًا. كل ضيف يضيف حوالي ₪37 عن كل وجبة تستضيفه فيها. أنت تختار كم سبتًا في الشهر تستضيف، وكم عشاء جمعة وغداء سبت يكون فيه ضيوف. للمقارنة، حسب مسح دائرة الإحصاء (الجدول 13) تنفق الأسر التي تحفظ السبت في المتوسط حوالي ₪27 فقط أكثر للشخص شهريًا على طعام السبت، جزئيًا لأنها تأكل خارج البيت أقل بكثير.</p>" +
      "<p>أرقام الإيجار لا تشمل الأرنونا ورسوم لجنة البناية والفواتير، وهي تُضاف منفصلة في تفصيل التكاليف.</p>" +
      "<p><strong>حقوق الصور</strong> (Wikimedia Commons): <span id=\"credits\"></span></p>",
    "@sources":
      "<li><span class=\"used\">الإيجار اليوم حسب البلدة والغرف والحي</span><strong>Realta: أسعار الإيجار حسب المدينة والحي (لقطة 26.10.2026)</strong>وسيط الإيجار المطلوب في الإعلانات النشطة حسب عدد الغرف في 94 بلدة، ومتوسط الإيجار المطلوب في حوالي 1,000 حي. يجمع Realta الإعلانات من يد2 ومدلان وOnMap وهوملس وكومو وفيسبوك. البلدات التي فيها أقل من 20 إعلانًا غير مشمولة.<span class=\"links\"><a href=\"https://realta.co.il/he/jerusalem/rent-prices/\" target=\"_blank\" rel=\"noopener noreferrer\">مثال: القدس</a><a href=\"" + R + "data/raw/realta_city_rooms_2026-10-26.csv\" target=\"_blank\" rel=\"noopener noreferrer\">ملف المدن</a><a href=\"" + R + "data/raw/realta_town_rooms_2026-10-26.csv\" target=\"_blank\" rel=\"noopener noreferrer\">ملف البلدات الصغيرة</a><a href=\"" + R + "data/raw/realta_neighbourhood_rents_2026-10-26.csv\" target=\"_blank\" rel=\"noopener noreferrer\">ملف الأحياء</a></span></li><li><span class=\"used\">المرجع الرسمي للإيجار</span><strong>دائرة الإحصاء المركزية: متوسط أسعار الإيجار الشهرية، الجدول 4.9</strong>متوسط الإيجار الرسمي للعقود الجديدة والمجدّدة حسب اللواء والمدينة الكبيرة وعدد الغرف، من الربع الثالث 2023 إلى الربع الثاني 2026.<span class=\"links\"><a href=\"https://www.cbs.gov.il/en/subjects/Pages/Average-Monthly-Prices-of-Rent.aspx\" target=\"_blank\" rel=\"noopener noreferrer\">صفحة دائرة الإحصاء</a><a href=\"https://www.cbs.gov.il/he/publications/Madad/DocLib/2026/price09a/a4_9_e.xlsx\" target=\"_blank\" rel=\"noopener noreferrer\">الجدول الأصلي (إكسل)</a><a href=\"" + R + "data/raw/cbs_rent_table_4_9.csv\" target=\"_blank\" rel=\"noopener noreferrer\">ملف البيانات</a><a href=\"" + R + "data/raw/SOURCES.md\" target=\"_blank\" rel=\"noopener noreferrer\">كل الإصدارات</a></span></li>" +
      "<li><span class=\"used\">تكاليف المعيشة</span><strong>مسح إنفاق الأسر 2021، الجدول 10 (حسب القضاء)</strong>متوسط إنفاق الأسرة الشهري على كل فئة في كل قضاء.<span class=\"links\"><a href=\"https://www.cbs.gov.il/he/publications/DocLib/2023/1924_household_income_expenditure_2021/t10.xls\" target=\"_blank\" rel=\"noopener noreferrer\">الجدول الأصلي</a><a href=\"" + R + "data/raw/cbs_hes_2021_table10.csv\" target=\"_blank\" rel=\"noopener noreferrer\">ملف البيانات</a></span></li>" +
      "<li><span class=\"used\">وجبات السبت والاستضافة</span><strong>مسح إنفاق الأسر 2021، الجدول 13 (الأسر اليهودية حسب درجة التديّن)</strong>إنفاق الشخص على طعام السبت في الأسر المحافظة على السبت مقارنة بالعلمانية.<span class=\"links\"><a href=\"https://www.cbs.gov.il/he/publications/DocLib/2023/1924_household_income_expenditure_2021/t13.xls\" target=\"_blank\" rel=\"noopener noreferrer\">الجدول الأصلي</a><a href=\"" + R + "data/raw/cbs_hes_2021_table13.csv\" target=\"_blank\" rel=\"noopener noreferrer\">ملف البيانات</a></span></li>" +
      "<li><span class=\"used\">التحديث لأسعار 2026</span><strong>مؤشر أسعار المستهلك حسب المجموعات</strong>تغيّر الأسعار من 2021 إلى 2026 لكل مجموعة سلع.<span class=\"links\"><a href=\"https://www.cbs.gov.il/en/subjects/Pages/Consumer-Price-Index.aspx\" target=\"_blank\" rel=\"noopener noreferrer\">مؤشرات الأسعار</a><a href=\"" + R + "data/raw/cbs_cpi_factors.csv\" target=\"_blank\" rel=\"noopener noreferrer\">المعاملات</a></span></li>" +
      "<li><span class=\"used\">محطات القطار والقطار الخفيف والكرمليت</span><strong>OpenStreetMap</strong>كل محطات إسرائيل والبلدية التي تقع فيها. © مساهمو OpenStreetMap.<span class=\"links\"><a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener noreferrer\">الترخيص</a><a href=\"" + R + "data/raw/osm_rail_stations.csv\" target=\"_blank\" rel=\"noopener noreferrer\">ملف البيانات</a></span></li>" +
      "<li><span class=\"used\">روابط يد2</span><strong>رموز المناطق والمدن في يد2</strong>يد2 يحتاج رمز المنطقة والإقليم إضافة إلى رمز المدينة. القائمة من المشروع المفتوح <a href=\"https://github.com/ron-levi/yad2-analyzer\" target=\"_blank\" rel=\"noopener noreferrer\">yad2-analyzer</a>.<span class=\"links\"><a href=\"" + R + "data/raw/yad2_locations.csv\" target=\"_blank\" rel=\"noopener noreferrer\">الرموز</a><a href=\"" + R + "data/raw/beach_neighbourhoods.csv\" target=\"_blank\" rel=\"noopener noreferrer\">أحياء قرب البحر</a></span></li>" +
      "<li><span class=\"used\">روابط المواقع</span><strong>كيف فُحص كل رابط</strong>Realta: صفحات المدن فُحصت لكل المدن، بما فيها صفحات قرب البحر وبلا وسيط ومفروشة. كومو: الفلاتر بأسماء حقول نموذج البحث، وفُحص أنها تقلّص النتائج. OnMap وهوملس: صفحات المدن فُحصت. يد2: رموز الموقع من القائمة؛ أسماء الفلاتر من مشاريع مفتوحة ولم يمكن فحصها لأن يد2 يحجب المتصفحات الآلية. فيسبوك: بحث جوجل عن مجموعات الإيجار في المدينة. صفحات الأحياء تقبل نفس فلاتر الغرف والسعر (فُحص: رحافيا، 4 غرف، 7 من 25 إعلانًا). الأحياء: Realta يفتح كل حي في هذه الصفحة بعدد غرفك وميزانيتك؛ OnMap يفتح صفحات الأحياء الخاصة به (396 من أحيائنا، مطابقة بالاسم العبري من خريطة موقع OnMap، مثل رحافيا)؛ يد2 يفتح 104 أحياء في تل أبيب ورمات غان وجفعتايم وهرتسليا بيتوح برموز من مجموعة بيانات مفتوحة ليد2؛ بحث فيسبوك يضيف اسم الحي. أسماء البلدات في كومو وهوملس فُحصت واحدة واحدة في كل موقع.</li>" +
      "<li><span class=\"used\">الاشتراك الشهري</span><strong>Rav-Kav Online</strong>الاشتراك القطري ₪315 (كل المواصلات عدا القطار)؛ اشتراك حافلات الأطراف ₪139.<span class=\"links\"><a href=\"https://ravkavonline.co.il/en/ravkav-monthly-seasonal-contract\" target=\"_blank\" rel=\"noopener noreferrer\">Rav-Kav Online</a></span></li>" +
      "<li><span class=\"used\">لماذا يهمّ القرب من محطة</span><strong>غلوبس: القرب من الخط الأحمر يرفع أسعار الشقق</strong>دراسة لأسعار البيع قرب القطار الخفيف في تل أبيب. تخصّ البيع لا الإيجار، لذا تُستخدم فقط لقاعدة ±5%.<span class=\"links\"><a href=\"https://en.globes.co.il/en/article-1001503910\" target=\"_blank\" rel=\"noopener noreferrer\">المقال</a></span></li>" +
      "<li><span class=\"used\">الخريطة والصور</span><strong>خريطة OpenStreetMap · صور Wikimedia Commons</strong>الصور هي الصورة الرئيسية لكل مدينة في ويكيبيديا، مع ذكر المؤلفين بتراخيص مفتوحة.<span class=\"links\"><a href=\"https://commons.wikimedia.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Wikimedia Commons</a></span></li>" +
      "<li><span class=\"used\">كيف يترابط كل شيء</span><strong>كود التحليل (R وTidyverse)</strong>السكربتات التي تنظّف البيانات وتبني الرسوم وتحسب كل رقم في الصفحة.<span class=\"links\"><a href=\"https://github.com/tarabl2023-dev/israel-rental-market-analysis\" target=\"_blank\" rel=\"noopener noreferrer\">المشروع على GitHub</a><a href=\"https://github.com/tarabl2023-dev/israel-rental-market-analysis/tree/main/data/raw\" target=\"_blank\" rel=\"noopener noreferrer\">كل البيانات الخام</a></span></li>",
    "@assume":
      "<strong>افتراضاتي (ليست من بيانات رسمية)</strong>، لتعرف ما هو تقدير:<ul>" +
      "<li>الإيجار الاقتصادي والفاخر: حوالي 80% و140% من وسيط الإيجار المطلوب (المواقع لا تنشر توزّع الأسعار).</li><li>الأحجام التي فيها أقل من 3 إعلانات في البلدة تُقدَّر من أقرب حجم. الألوية حسب متوسط دائرة الإحصاء مضروبًا في نسبة السوق إلى دائرة الإحصاء في مدنها الكبيرة.</li>" +
      "<li>المواصلات: حوالي ‎+5% قرب محطة، ‎−5% أبعد مع سيارة.</li>" +
      "<li>نمط الحياة: الأكل خارج البيت والترفيه والملابس ×0.75 (اقتصادي) أو ×1.5 (فاخر).</li>" +
      "<li>التعليم مع أطفال: ضعف متوسط المسح الذي يشمل أسرًا بلا أطفال.</li>" +
      "<li>الأحياء: تتحرك الأسعار حسب متوسط الإيجار المطلوب في الحي مقارنة ببلدته، وتُسحب نحو متوسط البلدة عندما تكون الإعلانات قليلة. أيّ الأحياء قرب البحر هو تقديري المحلي.</li>" +
      "<li>السبت: الوجبة الاحتفالية تكلّف نحو ثلاثة أضعاف الوجبة العادية (≈₪37 للشخص). أفراد الأسرة يضيفون ≈₪25 لكل وجبة كل أسبوع، وكل ضيف يضيف ≈₪37 في الوجبات التي تستضيفها.</li><li>الإضافات والرفاهيات (الأظافر، التدليك، النادي الفاخر وغيرها): أسعار تقريبية نموذجية في إسرائيل يمكنك تغييرها. تُضاف فوق متوسطات المسح التي تشمل أصلًا جزءًا من الإنفاق على الترفيه والعناية الشخصية.</li></ul>",
    "@footer": "البيانات: إعلانات Realta (26.10.2026)؛ دائرة الإحصاء المركزية (الجدول 4.9؛ مسح إنفاق الأسر 2021). الخريطة والمحطات © مساهمو OpenStreetMap. جزء من مشروع <a href=\"https://github.com/tarabl2023-dev/israel-rental-market-analysis\">Israel Rental Market Analysis</a> (R وTidyverse)."
  };
})();
