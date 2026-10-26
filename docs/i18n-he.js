// Hebrew. Keys are the English text on the page; {placeholders} are filled in by the page.
window.I18N = window.I18N || {};
(function () {
  const R = "https://github.com/tarabl2023-dev/israel-rental-market-analysis/blob/main/";
  window.I18N.he = {
    // ---- header, search ----
    "Israel Rent Finder": "שכר דירה בישראל",
    "@brand": "שכר דירה <span>בישראל</span>",
    "What renting really costs, city by city": "כמה באמת עולה לשכור דירה, עיר אחר עיר",
    "Official CBS data": "נתוני הלמ״ס הרשמיים",
    "Where": "איפה",
    "Type a city, e.g. Herzliya or הרצליה": "הקלידו עיר, למשל הרצליה",
    "Rooms": "חדרים",
    "Fewer rooms": "פחות חדרים", "More rooms": "יותר חדרים",
    "Area in the city": "אזור בעיר",
    "Transport": "תחבורה",
    "Walk to train / light rail": "הליכה לרכבת / רכבת קלה", "Bus is fine": "אוטובוס זה בסדר", "I'll drive": "יש לי רכב",
    "Max budget / month": "תקציב מקסימלי לחודש",
    "Any": "ללא",
    "No budget limit": "בלי הגבלת תקציב",
    "Jan-Mar": "ינו׳-מרץ", "Apr-Jun": "אפר׳-יוני", "Jul-Sep": "יולי-ספט׳", "Oct-Dec": "אוק׳-דצמ׳",
    "{n} room": "חדר {n}", "{n} rooms": "{n} חדרים",
    "Whole district average": "ממוצע המחוז כולו", "National average": "ממוצע ארצי",
    "{district} · district estimate": "{district} · הערכה לפי המחוז",
    "Israel (national average)": "ישראל (ממוצע ארצי)",
    "No match. Try the nearest big city or pick its district.": "לא נמצאה התאמה. נסו את העיר הגדולה הקרובה או בחרו את המחוז.",
    "= {n} bed + living": "= {n} חדרי שינה + סלון", "= studio": "= דירת סטודיו",

    // ---- hero ----
    "Budget": "חסכוני", "Comfortable": "נוח", "Luxury": "יוקרתי",
    "✓ Selected": "✓ נבחר", "Fits budget": "מתאים לתקציב",
    "Older building, often no lift or parking, in a less central area.": "בניין ישן, לרוב בלי מעלית או חניה, באזור פחות מרכזי.",
    "The average contract here: a decent, maintained flat.": "החוזה הממוצע כאן: דירה סבירה ומתוחזקת.",
    "New tower with lift, parking, safe room and a big balcony.": "מגדל חדש עם מעלית, חניה, ממ״ד ומרפסת גדולה.",
    "Tap a level to use it for your costs and search.": "לחצו על רמה כדי להשתמש בה בעלויות ובחיפוש.",
    "Match my budget again": "חזרה להתאמה לתקציב שלי",
    "Most expensive": "הכי יקרה", "Best value": "הכי משתלמת", "Fastest rising": "עלייה מהירה",
    "Estimate": "הערכה", "In budget": "בתקציב", "Over budget": "מעל התקציב", "District estimate": "הערכה לפי מחוז",
    "{district} · district figures": "{district} · נתוני המחוז",
    "Nationwide": "כלל הארץ", "Whole district": "המחוז כולו", "All of Israel": "כל ישראל",
    "Photo:": "צילום:",
    "/ month": "לחודש", "/mo": "לחודש", "/yr": " בשנה", "a month": "לחודש",
    "Typical {rooms} apartment in {place} · CBS data for {band} rooms, {quarter}": "דירת {rooms} טיפוסית ב{place} · נתוני הלמ״ס ל-{band} חדרים, {quarter}",
    "RM": "חד׳", "BD": "חדרי שינה", "Studio": "סטודיו",
    "vs Israel": "לעומת ישראל", "in a year": "בשנה", "margin": "טווח טעות",
    "No rail stations": "אין תחנות רכבת",
    "train": "רכבת", "light rail": "רכבת קלה", "Carmelit": "כרמלית",
    "usually pricier than the city average": "בדרך כלל יקר מממוצע העיר", "around the city average": "בערך כמו ממוצע העיר",
    "usually cheaper than the city average": "בדרך כלל זול מממוצע העיר",
    "By the beach": "ליד הים",
    "near a train or light-rail station": "ליד תחנת רכבת או רכבת קלה", "further from public transport": "רחוק יותר מתחבורה ציבורית",
    "about {price}/month": "בערך {price} לחודש",
    "CBS doesn't publish rents for {town}, so these figures use the {district} average. Rents in {town} may differ.":
      "הלמ״ס לא מפרסמת שכר דירה עבור {town}, ולכן הנתונים לפי ממוצע {district}. שכר הדירה ב{town} עשוי להיות שונה.",
    "{city} has only one rail station, so fewer homes are within walking distance of one.": "ב{city} יש רק תחנת רכבת אחת, ולכן פחות דירות נמצאות במרחק הליכה ממנה.",
    "{city} has no rail stations, so fewer homes are within walking distance of one.": "ב{city} אין תחנות רכבת, ולכן מעט דירות נמצאות במרחק הליכה מתחנה.",
    "{city} has only two rail stations, so fewer homes are within walking distance of one.": "ב{city} יש רק שתי תחנות רכבת, ולכן פחות דירות נמצאות במרחק הליכה מהן.",
    "CBS doesn't publish rents for {city} (under 100,000 residents), so these figures use neighbouring {proxy}.":
      "הלמ״ס לא מפרסמת שכר דירה עבור {city} (פחות מ-100,000 תושבים), ולכן הנתונים לפי {proxy} השכנה.",
    "CBS doesn't publish a 1-2 room figure for {city}, so this one is estimated from its 2.5-3 room rent.":
      "הלמ״ס לא מפרסמת נתון לדירות 1-2 חדרים ב{city}, ולכן הוא מוערך לפי שכר הדירה ל-2.5-3 חדרים.",
    "The 4.5+ band includes everything from 4.5 rooms to large penthouses, so treat it as a rough guide.":
      "קבוצת 4.5+ חדרים כוללת הכול מ-4.5 חדרים ועד פנטהאוזים גדולים, ולכן זו הערכה גסה.",
    "District figures average all towns in the district, including its big cities.": "נתוני מחוז הם ממוצע של כל היישובים במחוז, כולל הערים הגדולות.",
    "<strong>No budget limit.</strong> Here the range runs from about {lo} for a basic flat to {hi} or more for the best homes. The priciest big city for {band} rooms is {top}.":
      "<strong>בלי הגבלת תקציב.</strong> כאן הטווח הוא מכ-{lo} לדירה בסיסית ועד {hi} ויותר לדירות הטובות ביותר. העיר הגדולה היקרה ביותר ל-{band} חדרים היא {top}.",
    "<strong>{b}</strong> covers a <strong>luxury</strong> flat here.": "<strong>{b}</strong> מספיקים לדירה <strong>יוקרתית</strong> כאן.",
    "<strong>{b}</strong> gets you a <strong>comfortable</strong> flat here. Luxury starts at about {lux}.": "<strong>{b}</strong> מספיקים לדירה <strong>נוחה</strong> כאן. יוקרה מתחילה בכ-{lux}.",
    "<strong>{b}</strong> fits the <strong>budget</strong> level here. A typical flat costs about {avg}.": "<strong>{b}</strong> מתאימים לרמה <strong>החסכונית</strong> כאן. דירה טיפוסית עולה כ-{avg}.",
    "<strong>{b}</strong> is below the budget level here (about {min}). Try fewer rooms or another city.": "<strong>{b}</strong> נמוך מהרמה החסכונית כאן (כ-{min}). נסו פחות חדרים או עיר אחרת.",
    "It covers the average {band} room rent in <strong>{n} of {total}</strong> big cities (marked In budget below).":
      "הוא מכסה את שכר הדירה הממוצע ל-{band} חדרים ב-<strong>{n} מתוך {total}</strong> ערים גדולות (מסומנות ״בתקציב״ למטה).",

    // ---- cost of living ----
    "Rent plus everyday living costs for your household": "שכר דירה ועוד הוצאות המחיה של משק הבית שלכם",
    "What it will really cost in {place}": "כמה זה באמת יעלה ב{place}",
    "Adults": "מבוגרים", "Children": "ילדים", "Lifestyle": "סגנון חיים",
    "Fewer adults": "פחות מבוגרים", "More adults": "יותר מבוגרים", "Fewer children": "פחות ילדים", "More children": "יותר ילדים",
    "Compare with": "השוואה עם", "Shabbat": "שבת", "Not included": "לא כלול", "I keep Shabbat": "אני שומר/ת שבת",
    "Guests each Shabbat": "אורחים בכל שבת", "Fewer guests": "פחות אורחים", "More guests": "יותר אורחים",
    "Meals you host": "ארוחות שאתם מארחים", "Friday night": "ליל שבת", "Friday + lunch": "ליל שבת + צהריים",
    "Add guests to include hosting": "הוסיפו אורחים כדי לכלול אירוח",
    "Total per month": "סה״כ לחודש", "Monthly cost": "הוצאה חודשית", "Difference": "הפרש", "Total": "סה״כ",
    "Israel average": "ממוצע ישראל", "Israel avg": "ממוצע ישראל",
    "1 person": "אדם אחד", "{n} people": "{n} אנשים",
    "Budget lifestyle": "סגנון חיים חסכוני", "Comfortable lifestyle": "סגנון חיים נוח", "Luxury lifestyle": "סגנון חיים יוקרתי",
    "near a station": "ליד תחנה", "public transport": "תחבורה ציבורית", "with a car": "עם רכב",
    "vs {place}": "לעומת {place}", "Same": "זהה", "more a month": "יותר בחודש", "less a month": "פחות בחודש",
    "(both include Shabbat)": "(שניהם כוללים שבת)",
    "🕯 Shabbat adds +{price} a month": "🕯 שבת מוסיפה {price}+ בחודש",
    "≈ {price}/mo all-in →": "≈ {price} לחודש הכול כלול ←",
    "Rent": "שכר דירה", "Arnona (municipal tax)": "ארנונה", "Bills: electricity, water, gas, phone": "חשבונות: חשמל, מים, גז, טלפון",
    "Groceries": "מזון וקניות לבית", "Eating out & takeaway": "אוכל בחוץ ומשלוחים", "Education": "חינוך",
    "Sport, fitness & entertainment": "ספורט, כושר ובילויים", "Health (private insurance, dental)": "בריאות (ביטוח פרטי, שיניים)",
    "Clothing & personal care": "ביגוד וטיפוח", "Shabbat meals & hosting": "ארוחות שבת ואירוח",
    "Budget level": "רמה חסכונית", "Comfortable level": "רמה נוחה", "Luxury level": "רמה יוקרתית",
    ", +5% near a station": ", ‎+5% ליד תחנה", ", −5% further out": ", ‎−5% רחוק יותר", ", {pct} for {area}": ", ‎{pct} עבור {area}",
    "Typical car costs: fuel, insurance, upkeep": "הוצאות רכב טיפוסיות: דלק, ביטוח, תחזוקה",
    "{n} × Rav-Kav nationwide monthly pass (₪{price})": "{n} × חופשי חודשי ארצי ברב-קו (₪{price})",
    "Schools, kindergarten, after-school activities": "בתי ספר, גנים, חוגים",
    "Gym, classes, events, outings": "חדר כושר, חוגים, אירועים, יציאות",
    "Supermarket food, fruit & veg": "סופרמרקט, פירות וירקות",
    "{people} of you + {guests} guests × {meals} festive meals a week (₪{fam} extra per family member, ₪{guest} per guest), about 4.3 Shabbatot a month":
      "{people} בני בית + {guests} אורחים × {meals} סעודות בשבוע (₪{fam} תוספת לכל בן משפחה, ₪{guest} לכל אורח), כ-4.3 שבתות בחודש",
    "{people} of you × {meals} festive meals a week (₪{fam} extra per family member), about 4.3 Shabbatot a month":
      "{people} בני בית × {meals} סעודות בשבוע (₪{fam} תוספת לכל בן משפחה), כ-4.3 שבתות בחודש",
    "≈ same": "≈ זהה",
    "Everyday costs: typical spending in the {region} (CBS Household Expenditure Survey 2021, at 2026 prices), scaled to your household. Estimates, not price quotes. See “How the estimates work”.":
      "הוצאות שוטפות: הוצאה טיפוסית ב{region} (סקר הוצאות משק הבית של הלמ״ס 2021, במחירי 2026), מותאמת לגודל משק הבית שלכם. אלה הערכות, לא הצעות מחיר. ראו ״איך מחושבות ההערכות״.",

    // ---- search guide ----
    "Copy-and-paste searches and filters for Israeli rental sites": "חיפושים ומסננים מוכנים להעתקה לאתרי השכרה",
    "How to search for {rooms} in {place}": "איך לחפש {rooms} ב{place}",
    "your town": "היישוב שלכם", "Your town": "היישוב שלכם",
    "Go straight to the listings": "ישר למודעות", "Go straight to the listings in {place}": "ישר למודעות ב{place}",
    "All my filters": "כל המסננים שלי", "Rooms & budget only": "רק חדרים ותקציב", "Just the city": "רק העיר",
    "How strict the links are": "כמה מדויקים הקישורים",
    "Then narrow it down: search for": "ואז לצמצם: לחפש",
    "Set these filters": "להגדיר את המסננים האלה",
    "Add keywords for your level": "להוסיף מילות מפתח לרמה שלכם",
    "Hebrew": "עברית", "English": "אנגלית", "Facebook": "פייסבוק", "Copy": "העתקה",
    "City": "עיר", "Neighbourhood": "שכונה", "Price per month": "מחיר לחודש", "Property type": "סוג נכס",
    "Leave empty": "להשאיר ריק", "No budget limit, so don't cap the price.": "בלי הגבלת תקציב, אז לא להגביל מחיר.",
    "Up to {price}": "עד {price}", "Your budget.": "התקציב שלכם.",
    "The comfortable range. Budget: up to {b}, luxury: from {l}.": "הטווח הנוח. חסכוני: עד {b}, יוקרתי: מ-{l}.",
    "any": "ללא הגבלה",
    "Type your town's name in Hebrew or English.": "הקלידו את שם היישוב בעברית או באנגלית.",
    "Tick these beach-side neighbourhoods on the site.": "סמנו באתר את השכונות האלה שליד הים.",
    "The Yad2 button already opens this neighbourhood.": "הכפתור של יד2 כבר פותח את השכונה הזאת.",
    "Type it into the site's location box after the city.": "הקלידו אותה בתיבת המיקום באתר, אחרי העיר.",
    "From 6": "מ-6", "From {a} to {b}": "מ-{a} עד {b}", "Widen it to {lo} - {hi} to see more homes.": "הרחיבו ל-{lo} - {hi} כדי לראות יותר דירות.",
    "(apartment)": "(דירה)", "For luxury also try {a} (garden flat) and {b}.": "ליוקרה נסו גם {a} ו{b}.",
    "your level": "הרמה שלכם", "For your transport choice": "לפי בחירת התחבורה", "For your area and needs": "לפי האזור והצרכים",
    "Useful at any level": "שימושי בכל רמה", "filter": "מסנן",
    "no agent's fee": "בלי דמי תיווך", "self-contained unit": "יחידת דיור נפרדת", "price negotiable": "המחיר גמיש", "older flat": "דירה ישנה",
    "lift": "מעלית", "parking": "חניה", "renovated": "משופצת", "air-conditioning": "מיזוג", "safe room": "ממ״ד",
    "new building": "בניין חדש", "sun balcony": "מרפסת שמש", "penthouse": "פנטהאוז",
    "available now": "כניסה מיידית", "furnished": "מרוהטת", "pets allowed": "מותר בעלי חיים",
    "near the train": "ליד הרכבת", "near the light rail": "ליד הרכבת הקלה", "near public transport": "ליד תחבורה ציבורית",
    "near a bus stop": "ליד תחנת אוטובוס", "central": "מרכזי", "registered private parking": "חניה רשומה בטאבו", "quiet area": "אזור שקט",
    "near the beach": "ליד הים", "sea view": "נוף לים", "near a synagogue": "ליד בית כנסת", "Shabbat (e.g. Shabbat lift)": "שבת (למשל מעלית שבת)",
    "@kwTip": "לחצו על מילים כדי להוסיף אותן לחיפוש. מילים שמסומנות ״מסנן״ מסומנות עבורכם גם באתרים שתומכים בהן כשפותחים את הקישורים למעלה. <bdi dir=\"rtl\" lang=\"he\">תיווך</bdi> פירושו מתווך, שעשוי לגבות עמלה.",

    // ---- links ----
    "Realta · all sites in one": "Realta · כל האתרים במקום אחד", "Facebook groups": "קבוצות פייסבוק",
    "6+ rooms": "6+ חדרים", "{a}-{b} rooms": "{a}-{b} חדרים", "your city only": "רק העיר שלכם",
    "up to {price}/month": "עד {price} לחודש", "any price (enter a budget to cap it)": "כל מחיר (הזינו תקציב כדי להגביל)",
    "Realta, which combines all the sites": "Realta, שמאחד את כל האתרים",
    "Included in the links:": "כלול בקישורים:",
    "Realta opens its “{page}” page for your city; ": "Realta פותח את עמוד ״{page}״ של העיר; ",
    "near the sea": "ליד הים", "no agent": "בלי תיווך",
    "Realta gets rooms and budget; ": "Realta מקבל חדרים ותקציב; ",
    "Yad2 and Komo get all of these (and the neighbourhood); OnMap gets rooms and price; Homeless and Madlan open your city.":
      "יד2 וקומו מקבלים את כל אלה (וגם את השכונה); OnMap מקבל חדרים ומחיר; הומלס ומדלן פותחים את העיר.",
    "Yad2 and Komo get all of these; OnMap gets rooms and price; Homeless and Madlan open your city.":
      "יד2 וקומו מקבלים את כל אלה; OnMap מקבל חדרים ומחיר; הומלס ומדלן פותחים את העיר.",
    "<b>Nothing found?</b> Smaller sites have few ads in some cities, and many ads don't tag features like a lift or safe room. Try {next}.":
      "<b>לא נמצא כלום?</b> לאתרים הקטנים יש מעט מודעות בחלק מהערים, והרבה מודעות לא מסמנות מאפיינים כמו מעלית או ממ״ד. נסו {next}.",
    "Each button opens {city}'s rental listings in a new tab.": "כל כפתור פותח את מודעות ההשכרה ב{city} בלשונית חדשה.",
    "Each button opens {city}'s rental listings in a new tab (Yad2 opens {hood} directly).": "כל כפתור פותח את מודעות ההשכרה ב{city} בלשונית חדשה (יד2 פותח ישר את {hood}).",
    "Each button opens {city}'s rental listings in a new tab. Add the neighbourhood {names} in the site's location box.": "כל כפתור פותח את מודעות ההשכרה ב{city} בלשונית חדשה. הוסיפו באתר את השכונה {names} בתיבת המיקום.",
    "names": "(השמות)",
    "Yad2 opens {town}'s listings; on the other sites pick {town} in the search, then use the filters below.": "יד2 פותח את המודעות ב{town}; באתרים האחרים בחרו {town} בחיפוש ואז השתמשו במסננים למטה.",
    "Opens the site's rental search in a new tab. Pick {town} there, then use the filters below.": "פותח את חיפוש ההשכרה של האתר בלשונית חדשה. בחרו שם {town} ואז השתמשו במסננים למטה.",
    "Where to look": "איפה לחפש", "Rental sites and groups worth checking": "אתרי השכרה וקבוצות ששווה לבדוק",
    "great for {place}": "מצוין ל{place}", "Open": "פתיחה",
    "Collects listings from Yad2, Madlan, OnMap, Homeless, Komo and Facebook in one search. The best place to start.": "מאחד מודעות מיד2, מדלן, OnMap, הומלס, קומו ופייסבוק בחיפוש אחד. המקום הכי טוב להתחיל בו.",
    "Israel's biggest classifieds site, with the most rental listings.": "אתר המודעות הגדול בישראל, עם הכי הרבה מודעות השכרה.",
    "Listings plus neighbourhood info: schools, transport and past prices.": "מודעות ועוד מידע על השכונה: בתי ספר, תחבורה ומחירי עבר.",
    "Classifieds with many private landlords.": "לוח מודעות עם הרבה משכירים פרטיים.",
    "Long-running classifieds site. Some listings don't appear elsewhere.": "לוח מודעות ותיק. חלק מהמודעות לא מופיעות במקום אחר.",
    "Map-based search, with an English version.": "חיפוש על גבי מפה, יש גם גרסה באנגלית.",
    "Finds your city's Facebook rental groups (via Google, no login needed). {group} is a big group for flats without agents.": "מוצא את קבוצות ההשכרה בפייסבוק של העיר (דרך גוגל, בלי התחברות). {group} היא קבוצה גדולה לדירות בלי תיווך.",
    "English-speaking community board, strongest in Jerusalem and Beit Shemesh. Pick your region on the site.": "לוח קהילתי דובר אנגלית, חזק במיוחד בירושלים ובבית שמש. בחרו את האזור באתר.",

    // ---- feed ----
    "Compare cities": "השוואת ערים", "Sort": "מיון",
    "Price: high to low": "מחיר: מהגבוה לנמוך", "Price: low to high": "מחיר: מהנמוך לגבוה", "Best public transport": "התחבורה הציבורית הכי טובה",
    "Lowest total cost": "העלות הכוללת הנמוכה ביותר", "Saved first": "שמורים קודם",
    "{rooms} across {n} cities": "{rooms} ב-{n} ערים",
    "Average monthly rent (comfortable level). Tap a city to see its prices.": "שכר דירה חודשי ממוצע (רמה נוחה). לחצו על עיר כדי לראות את המחירים.",
    "Remove {name}": "הסרת {name}", "Save {name}": "שמירת {name}",
    "rm": "חד׳", "bd": "ח׳ שינה",
    "Train / light rail / Carmelit stations": "תחנות רכבת / רכבת קלה / כרמלית",
    "based on {city}": "לפי {city}", "Compared with the most expensive city": "בהשוואה לעיר היקרה ביותר", "Your budget": "התקציב שלכם",
    "≈ {price}/mo all-in for your household": "≈ {price} לחודש הכול כלול למשק הבית",
    "You've seen all {n} cities": "ראיתם את כל {n} הערים",
    "Anywhere in {city}": "בכל {city}", "(pricier)": "(יקר יותר)", "(cheaper)": "(זול יותר)",

    // ---- map, toasts ----
    "Avg rent · {band} rooms": "שכר דירה ממוצע · {band} חדרים", "Selected": "נבחר", "🚆 Train & light rail": "🚆 רכבת ורכבת קלה",
    "Train station": "תחנת רכבת", "Light rail": "רכבת קלה", "Carmelit (metro)": "כרמלית",
    "The map couldn't load. Everything else still works.": "המפה לא נטענה. כל השאר עדיין עובד.",
    "List": "רשימה", "Map": "מפה",
    "Copied: {text}": "הועתק: {text}",
    "Budget level selected": "נבחרה רמה חסכונית", "Comfortable level selected": "נבחרה רמה נוחה", "Luxury level selected": "נבחרה רמה יוקרתית",
    "Shabbat meals added to your costs": "ארוחות השבת נוספו לעלויות",
    "Shabbat meals added to your costs. Add guests to include hosting.": "ארוחות השבת נוספו לעלויות. הוסיפו אורחים כדי לכלול אירוח.",
    "Added {w} as a filter on the links": "{w} נוסף כמסנן בקישורים", "Removed {w} from the links": "{w} הוסר מהקישורים",
    "Added {w} to your search words": "{w} נוסף למילות החיפוש", "Removed {w}": "{w} הוסר",
    "Saved {name}": "{name} נשמרה", "Removed {name}": "{name} הוסרה",

    // ---- extras ----
    "Add extras: nails, massages, a better gym…": "הוספת תוספות: ציפורניים, עיסויים, חדר כושר טוב יותר…",
    "These go on top of the average costs above. Prices are rough typical Israeli prices, so change them to match what you'd actually pay and how often.": "אלה מתווספים על ההוצאות הממוצעות שלמעלה. המחירים הם מחירים טיפוסיים משוערים בישראל, אז שנו אותם לפי מה שאתם באמת משלמים וכמה פעמים.",
    "Add your own, e.g. Hebrew lessons": "הוסיפו משהו משלכם, למשל שיעורי עברית",
    "₪ per time": "₪ לפעם",
    "Times / month": "פעמים בחודש",
    "Add": "הוספה",
    "Manicure / nails": "מניקור / ציפורניים",
    "Massage": "עיסוי",
    "Premium gym or country club": "חדר כושר פרימיום או קאנטרי קלאב",
    "Pilates / yoga studio": "סטודיו פילאטיס / יוגה",
    "Personal trainer session": "אימון אישי",
    "Hairdresser": "מספרה",
    "Facial / beauty treatment": "טיפול פנים / טיפוח",
    "Cleaner (3-hour visit)": "עוזרת בית (3 שעות)",
    "Babysitter (evening out)": "בייביסיטר (ערב בחוץ)",
    "Dog walker / pet care": "דוגווקר / טיפול בחיות",
    "Streaming & subscriptions": "סטרימינג ומנויים",
    "Café coffee": "קפה בבית קפה",
    "Extras & treats": "תוספות ופינוקים",
    "Price each time": "מחיר לפעם",
    "Times per month": "פעמים בחודש",
    "Added {w}": "{w} נוסף",

    // ---- method, sources, footer ----
    "How the estimates work": "איך מחושבות ההערכות", "Data source, price levels and photo credits": "מקורות הנתונים, רמות המחיר וקרדיט לתמונות",
    "Sources & data": "מקורות ונתונים",
    "Every number on this page comes from one of these sources. Each one links to the original and to the exact data file saved in the project, so you can check it yourself.":
      "כל מספר בעמוד הזה מגיע מאחד המקורות האלה. כל אחד מקשר למקור ולקובץ הנתונים המדויק ששמור בפרויקט, כך שאפשר לבדוק בעצמכם.",
    "@method":
      "<p><strong>נוח</strong> הוא שכר הדירה החודשי הממוצע הרשמי של הלשכה המרכזית לסטטיסטיקה (למ״ס) לאזור ולגודל הדירה, עבור <span id=\"m-quarter\"></span>. הוא כולל חוזים חדשים ומתחדשים.</p>" +
      "<p>הלמ״ס מפרסמת רק ממוצעים, לא את פיזור המחירים. <strong>חסכוני</strong> ו<strong>יוקרתי</strong> הם כללי אצבע שמוחלים על הממוצע:</p>" +
      "<ul><li>חסכוני: כ-80% מהממוצע (טווח 70-90%)</li><li>נוח: הממוצע (טווח 90-115%)</li><li>יוקרתי: כ-140% מהממוצע (טווח 125-170%)</li></ul>" +
      "<p>שכר הדירה משתנה מאוד בתוך העיר, אז כדאי לבדוק מודעות אמיתיות בשכונות שאתם אוהבים. קבוצות הגודל לפי הלמ״ס: 1-2, 2.5-3, 3.5-4 ו-4.5+ חדרים. הלמ״ס מסתירה נתוני 1-2 חדרים בכפר סבא ובבית שמש (מעט מדי חוזים), והם מוערכים לפי שכר הדירה ל-2.5-3 חדרים ויחס המחירים במחוז.</p>" +
      "<p><strong>ברעננה</strong> פחות מ-100,000 תושבים, ולכן הלמ״ס לא מפרסמת את שכר הדירה בה. הנתונים לפי כפר סבא השכנה, העיר הדומה הקרובה ביותר.</p>" +
      "<p><strong>תחבורה ציבורית.</strong> מספר התחנות כולל תחנות רכבת, תחנות רכבת קלה ותחנות כרמלית בתוך גבולות העיר, לפי OpenStreetMap. אין נתונים רשמיים על השפעת קרבה לתחנה על שכר הדירה. מחקרים על מחירי <em>מכירה</em> מצאו שדירות ליד הרכבת הקלה בתל אביב התייקרו מהר יותר (<a href=\"https://en.globes.co.il/en/article-1001503910\" target=\"_blank\" rel=\"noopener noreferrer\">גלובס</a>), ולכן בחירת התחבורה מוסיפה כלל אצבע: כ-5%+ ליד תחנה, וכ-5%- רחוק יותר אם נוסעים ברכב.</p>" +
      "<p><strong>כמה זה באמת יעלה.</strong> ההוצאות השוטפות מבוססות על סקר הוצאות משק הבית של הלמ״ס 2021 (לוח 10), שמדווח כמה משקי בית מוציאים בכל נפה. הן מותאמות לגודל משק הבית לפי סולם ״הנפשות הסטנדרטיות״ של הלמ״ס, ומעודכנות למחירי 2026 לפי מדד המחירים של כל קבוצת מוצרים. בלי רכב, התחבורה היא חופשי חודשי ארצי ברב-קו (₪315 למבוגר; יש גם מנוי של ₪139 לאוטובוסים בפריפריה, ראו <a href=\"https://ravkavonline.co.il/en/ravkav-monthly-seasonal-contract\" target=\"_blank\" rel=\"noopener noreferrer\">רב-קו אונליין</a>). ממוצע החינוך בסקר כולל משקי בית בלי ילדים, ולכן עם ילדים הוא מוכפל כהערכה גסה. סגנון חיים חסכוני ויוקרתי מכפיל אוכל בחוץ, בילויים וביגוד ב-0.75 וב-1.5. אלה הערכות של הוצאה טיפוסית, לא הצעות מחיר.</p>" +
      "<p><strong>שבת.</strong> כל סעודה חגיגית מחושבת כפי שלושה מארוחה רגילה (ארוחה רגילה לאדם היא כ-₪12, לפי הוצאות המזון הארציות של הלמ״ס חלקי 90 ארוחות בחודש). משק הבית כבר קונה את האוכל הרגיל, כך שהתוספת היא כ-₪25 לכל בן משפחה לסעודה, וכל אורח מוסיף כ-₪37, כפול מספר הסעודות שאתם מארחים, בכ-4.3 שבתות בחודש. לשם השוואה, לפי סקר הלמ״ס (לוח 13) משקי בית ששומרים שבת מוציאים בממוצע רק כ-₪27 יותר לאדם בחודש על מאכלי שבת, בין השאר כי הם אוכלים בחוץ הרבה פחות.</p>" +
      "<p>שכר הדירה לא כולל ארנונה, ועד בית וחשבונות, שמתווספים בנפרד בפירוט העלויות.</p>" +
      "<p><strong>קרדיט לתמונות</strong> (Wikimedia Commons): <span id=\"credits\"></span></p>",
    "@sources":
      "<li><span class=\"used\">שכר דירה לפי עיר וחדרים</span><strong>הלשכה המרכזית לסטטיסטיקה: מחירי שכר דירה חודשיים ממוצעים, לוח 4.9</strong>שכר הדירה הממוצע הרשמי בחוזים חדשים ומתחדשים, לפי מחוז, עיר גדולה ומספר חדרים, רבעון 3 2023 עד רבעון 2 2026.<span class=\"links\"><a href=\"https://www.cbs.gov.il/en/subjects/Pages/Average-Monthly-Prices-of-Rent.aspx\" target=\"_blank\" rel=\"noopener noreferrer\">עמוד הנושא בלמ״ס</a><a href=\"https://www.cbs.gov.il/he/publications/Madad/DocLib/2026/price09a/a4_9_e.xlsx\" target=\"_blank\" rel=\"noopener noreferrer\">הלוח המקורי (אקסל)</a><a href=\"" + R + "data/raw/cbs_rent_table_4_9.csv\" target=\"_blank\" rel=\"noopener noreferrer\">קובץ הנתונים</a><a href=\"" + R + "data/raw/SOURCES.md\" target=\"_blank\" rel=\"noopener noreferrer\">כל המהדורות</a></span></li>" +
      "<li><span class=\"used\">הוצאות מחיה</span><strong>סקר הוצאות משק הבית של הלמ״ס 2021, לוח 10 (לפי נפה)</strong>הוצאה חודשית ממוצעת של משק בית על כל קטגוריה בכל נפה.<span class=\"links\"><a href=\"https://www.cbs.gov.il/he/publications/DocLib/2023/1924_household_income_expenditure_2021/t10.xls\" target=\"_blank\" rel=\"noopener noreferrer\">הלוח המקורי</a><a href=\"" + R + "data/raw/cbs_hes_2021_table10.csv\" target=\"_blank\" rel=\"noopener noreferrer\">קובץ הנתונים</a></span></li>" +
      "<li><span class=\"used\">ארוחות שבת ואירוח</span><strong>סקר הוצאות משק הבית 2021, לוח 13 (משקי בית יהודיים לפי מידת דתיות)</strong>הוצאה לאדם על מאכלי שבת במשקי בית שומרי שבת לעומת חילוניים.<span class=\"links\"><a href=\"https://www.cbs.gov.il/he/publications/DocLib/2023/1924_household_income_expenditure_2021/t13.xls\" target=\"_blank\" rel=\"noopener noreferrer\">הלוח המקורי</a><a href=\"" + R + "data/raw/cbs_hes_2021_table13.csv\" target=\"_blank\" rel=\"noopener noreferrer\">קובץ הנתונים</a></span></li>" +
      "<li><span class=\"used\">עדכון למחירי 2026</span><strong>מדד המחירים לצרכן של הלמ״ס, לפי קבוצות</strong>שינוי המחירים מ-2021 עד 2026 בכל קבוצת מוצרים.<span class=\"links\"><a href=\"https://www.cbs.gov.il/en/subjects/Pages/Consumer-Price-Index.aspx\" target=\"_blank\" rel=\"noopener noreferrer\">מדדי המחירים</a><a href=\"" + R + "data/raw/cbs_cpi_factors.csv\" target=\"_blank\" rel=\"noopener noreferrer\">המקדמים</a></span></li>" +
      "<li><span class=\"used\">תחנות רכבת, רכבת קלה וכרמלית</span><strong>OpenStreetMap</strong>כל התחנות בישראל והרשות שבה הן נמצאות. © תורמי OpenStreetMap.<span class=\"links\"><a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener noreferrer\">רישיון</a><a href=\"" + R + "data/raw/osm_rail_stations.csv\" target=\"_blank\" rel=\"noopener noreferrer\">קובץ הנתונים</a></span></li>" +
      "<li><span class=\"used\">קישורים ליד2</span><strong>קודי אזור ועיר של יד2</strong>יד2 צריך קוד אזור וקוד תת-אזור בנוסף לקוד העיר. הרשימה מהפרויקט הפתוח <a href=\"https://github.com/ron-levi/yad2-analyzer\" target=\"_blank\" rel=\"noopener noreferrer\">yad2-analyzer</a>.<span class=\"links\"><a href=\"" + R + "data/raw/yad2_locations.csv\" target=\"_blank\" rel=\"noopener noreferrer\">הקודים</a><a href=\"" + R + "data/raw/neighbourhoods.csv\" target=\"_blank\" rel=\"noopener noreferrer\">רשימת השכונות</a></span></li>" +
      "<li><span class=\"used\">קישורים לאתרים</span><strong>איך נבדק כל קישור</strong>Realta: עמודי הערים נבדקו לכל העיר והיישובים (חוץ מצפת), כולל עמודי ליד הים, בלי תיווך ומרוהטות. קומו: המסננים לפי שמות השדות בטופס החיפוש של קומו, ונבדק שהם מצמצמים את התוצאות. OnMap והומלס: עמודי הערים נבדקו. יד2: קודי המיקום מהרשימה; שמות המסננים מפרויקטים פתוחים ולא ניתן היה לבדוק אותם כי יד2 חוסם דפדפנים אוטומטיים. פייסבוק: חיפוש בגוגל של קבוצות ההשכרה בעיר.</li>" +
      "<li><span class=\"used\">מנוי חודשי</span><strong>רב-קו אונליין</strong>חופשי חודשי ארצי ₪315 (כל התחבורה חוץ מרכבת); מנוי אוטובוסים בפריפריה ₪139.<span class=\"links\"><a href=\"https://ravkavonline.co.il/en/ravkav-monthly-seasonal-contract\" target=\"_blank\" rel=\"noopener noreferrer\">רב-קו אונליין</a></span></li>" +
      "<li><span class=\"used\">למה קרבה לתחנה חשובה</span><strong>גלובס: הקרבה לקו האדום מעלה את מחירי הדירות</strong>מחקר על מחירי מכירה ליד הרכבת הקלה בתל אביב. הוא עוסק במכירה, לא בשכירות, ולכן משמש רק לכלל האצבע של ±5%.<span class=\"links\"><a href=\"https://en.globes.co.il/en/article-1001503910\" target=\"_blank\" rel=\"noopener noreferrer\">לכתבה</a></span></li>" +
      "<li><span class=\"used\">מפה ותמונות</span><strong>מפת OpenStreetMap · תמונות מ-Wikimedia Commons</strong>התמונות הן התמונה הראשית של כל עיר בוויקיפדיה, עם קרדיט ליוצרים ברישיונות פתוחים.<span class=\"links\"><a href=\"https://commons.wikimedia.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Wikimedia Commons</a></span></li>" +
      "<li><span class=\"used\">איך הכול מתחבר</span><strong>קוד הניתוח (R ו-Tidyverse)</strong>הסקריפטים שמנקים את הנתונים, בונים את הגרפים ומפיקים כל מספר בעמוד.<span class=\"links\"><a href=\"https://github.com/tarabl2023-dev/israel-rental-market-analysis\" target=\"_blank\" rel=\"noopener noreferrer\">הפרויקט בגיטהאב</a><a href=\"https://github.com/tarabl2023-dev/israel-rental-market-analysis/tree/main/data/raw\" target=\"_blank\" rel=\"noopener noreferrer\">כל הנתונים הגולמיים</a></span></li>",
    "@assume":
      "<strong>ההנחות שלי (לא מנתונים רשמיים)</strong>, כדי שתדעו מה הערכה:<ul>" +
      "<li>שכר דירה חסכוני ויוקרתי: כ-80% וכ-140% מהממוצע של הלמ״ס.</li>" +
      "<li>בחירת תחבורה: כ-5%+ ליד תחנה, 5%- רחוק יותר עם רכב.</li>" +
      "<li>סגנון חיים: אוכל בחוץ, בילויים וביגוד ×0.75 (חסכוני) או ×1.5 (יוקרתי).</li>" +
      "<li>חינוך עם ילדים: פי שניים מממוצע הסקר, שכולל משקי בית בלי ילדים.</li>" +
      "<li>רעננה לפי כפר סבא, ויישובים קטנים לפי המחוז, כי הלמ״ס לא מפרסמת אותם.</li>" +
      "<li>אזורים בעיר: אילו שכונות ליד הים, יקרות או זולות זו הערכה מקומית. בחירה בהן משנה את שכר הדירה בכ-15%+ (יקר או ליד הים), 0% או 10%- (זול).</li>" +
      "<li>שבת: סעודה חגיגית עולה כפי שלושה מארוחה רגילה (≈₪37 לאדם). בני משפחה מוסיפים ≈₪25 לסעודה ואורחים ≈₪37, בכ-4.3 שבתות בחודש.</li><li>תוספות ופינוקים (ציפורניים, עיסויים, חדר כושר פרימיום וכו׳): מחירים טיפוסיים משוערים בישראל שאפשר לשנות. הם מתווספים על ממוצעי הסקר, שכבר כוללים חלק מההוצאה על בילויים וטיפוח.</li></ul>",
    "@footer": "נתונים: הלשכה המרכזית לסטטיסטיקה (לוח 4.9; סקר הוצאות משק הבית 2021). מפה ותחנות © תורמי OpenStreetMap. חלק מהפרויקט <a href=\"https://github.com/tarabl2023-dev/israel-rental-market-analysis\">Israel Rental Market Analysis</a> (R ו-Tidyverse)."
  };
})();
