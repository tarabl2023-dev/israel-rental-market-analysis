// City coordinates, map views and photos for the calculator.
// Photos: lead images of each city's English Wikipedia article, hosted on Wikimedia Commons
// under the licences listed (author + licence + file page kept for attribution).
window.CITY_MEDIA = {
 "cities": {
  "Jerusalem": {
   "lat": 31.778,
   "lng": 35.216,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Dome_of_the_Rock_seen_from_the_Mount_of_Olives_%2812395649153%29_%28cropped%29.jpg/960px-Dome_of_the_Rock_seen_from_the_Mount_of_Olives_%2812395649153%29_%28cropped%29.jpg",
   "credit": "askii",
   "license": "CC BY-SA 2.0",
   "source": "https://commons.wikimedia.org/wiki/File:Dome_of_the_Rock_seen_from_the_Mount_of_Olives_(12395649153)_(cropped).jpg"
  },
  "Beit Shemesh": {
   "lat": 31.747,
   "lng": 34.988,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/%D7%92%D7%91%D7%A2%D7%AA_%D7%94%D7%AA%D7%95%D7%A8%D7%9E%D7%95%D7%A1%D7%99%D7%9D_03.jpg/960px-%D7%92%D7%91%D7%A2%D7%AA_%D7%94%D7%AA%D7%95%D7%A8%D7%9E%D7%95%D7%A1%D7%99%D7%9D_03.jpg",
   "credit": "דג קטן",
   "license": "CC BY-SA 4.0",
   "source": "https://commons.wikimedia.org/wiki/File:%D7%92%D7%91%D7%A2%D7%AA_%D7%94%D7%AA%D7%95%D7%A8%D7%9E%D7%95%D7%A1%D7%99%D7%9D_03.jpg"
  },
  "Tel Aviv": {
   "lat": 32.08,
   "lng": 34.781,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Sarona_CBD_01_%28cropped%29.jpg/960px-Sarona_CBD_01_%28cropped%29.jpg",
   "credit": "Ynhockey",
   "license": "CC BY-SA 4.0",
   "source": "https://commons.wikimedia.org/wiki/File:Sarona_CBD_01_(cropped).jpg"
  },
  "Ramat Gan": {
   "lat": 32.068,
   "lng": 34.824,
   "photo": "https://upload.wikimedia.org/wikipedia/commons/d/de/Ramat_Gan_City_Images.png",
   "credit": "Tanker TheDestroyer",
   "license": "CC0",
   "source": "https://commons.wikimedia.org/wiki/File:Ramat_Gan_City_Images.png"
  },
  "Herzliya": {
   "lat": 32.166,
   "lng": 34.844,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%94%D7%90%D7%95%D7%99%D7%A8_%D7%A9%D7%9C_%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94_23.jpg/960px-%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%94%D7%90%D7%95%D7%99%D7%A8_%D7%A9%D7%9C_%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94_23.jpg",
   "credit": "Lev.Tsimbler",
   "license": "CC BY-SA 4.0",
   "source": "https://commons.wikimedia.org/wiki/File:%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%94%D7%90%D7%95%D7%99%D7%A8_%D7%A9%D7%9C_%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94_23.jpg"
  },
  "Holon": {
   "lat": 32.011,
   "lng": 34.775,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/94765_holon_from_the_drone_PikiWiki_Israel.jpg/960px-94765_holon_from_the_drone_PikiWiki_Israel.jpg",
   "credit": "דוידי ורדי",
   "license": "CC BY 2.5",
   "source": "https://commons.wikimedia.org/wiki/File:94765_holon_from_the_drone_PikiWiki_Israel.jpg"
  },
  "Bat Yam": {
   "lat": 32.017,
   "lng": 34.746,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/City_Park_Bat_Yam_05.jpg/960px-City_Park_Bat_Yam_05.jpg",
   "credit": "Ynhockey",
   "license": "CC BY-SA 4.0",
   "source": "https://commons.wikimedia.org/wiki/File:City_Park_Bat_Yam_05.jpg"
  },
  "Bnei Brak": {
   "lat": 32.084,
   "lng": 34.834,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/BBC_and_Nahalat_Ganim_01.jpg/960px-BBC_and_Nahalat_Ganim_01.jpg",
   "credit": "Ynhockey",
   "license": "CC BY-SA 4.0",
   "source": "https://commons.wikimedia.org/wiki/File:BBC_and_Nahalat_Ganim_01.jpg"
  },
  "Kfar Saba": {
   "lat": 32.175,
   "lng": 34.907,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/PikiWiki_Israel_61144_kfar_saba_at_night.jpg/960px-PikiWiki_Israel_61144_kfar_saba_at_night.jpg",
   "credit": "ראובן שלומי",
   "license": "CC BY 2.5",
   "source": "https://commons.wikimedia.org/wiki/File:PikiWiki_Israel_61144_kfar_saba_at_night.jpg"
  },
  "Petah Tikva": {
   "lat": 32.087,
   "lng": 34.887,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Jabotinsky_Skyline_Petah_Tikva_01.jpg/960px-Jabotinsky_Skyline_Petah_Tikva_01.jpg",
   "credit": "Ynhockey",
   "license": "CC BY-SA 4.0",
   "source": "https://commons.wikimedia.org/wiki/File:Jabotinsky_Skyline_Petah_Tikva_01.jpg"
  },
  "Rishon LeZion": {
   "lat": 31.964,
   "lng": 34.804,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Rishon-LeZion-Gan-Moshava-0002.jpg/960px-Rishon-LeZion-Gan-Moshava-0002.jpg",
   "credit": "MathKnight",
   "license": "CC BY-SA 3.0",
   "source": "https://commons.wikimedia.org/wiki/File:Rishon-LeZion-Gan-Moshava-0002.jpg"
  },
  "Rehovot": {
   "lat": 31.894,
   "lng": 34.811,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Rehovot_Aerial_View.jpg/960px-Rehovot_Aerial_View.jpg",
   "credit": "Amos Meron",
   "license": "CC BY-SA 3.0",
   "source": "https://commons.wikimedia.org/wiki/File:Rehovot_Aerial_View.jpg"
  },
  "Netanya": {
   "lat": 32.322,
   "lng": 34.853,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/20201130_153836_%D7%9E%D7%91%D7%98_%D7%9E%D7%9C%D7%9E%D7%A2%D7%9C%D7%94_%D7%A2%D7%9C_%D7%A9%D7%9C%D7%95%D7%9C%D7%99%D7%AA_%D7%94%D7%97%D7%95%D7%A8%D7%A3_%D7%91%D7%A0%D7%AA%D7%A0%D7%99%D7%94.jpg/960px-20201130_153836_%D7%9E%D7%91%D7%98_%D7%9E%D7%9C%D7%9E%D7%A2%D7%9C%D7%94_%D7%A2%D7%9C_%D7%A9%D7%9C%D7%95%D7%9C%D7%99%D7%AA_%D7%94%D7%97%D7%95%D7%A8%D7%A3_%D7%91%D7%A0%D7%AA%D7%A0%D7%99%D7%94.jpg",
   "credit": "משה200",
   "license": "CC BY-SA 4.0",
   "source": "https://commons.wikimedia.org/wiki/File:20201130_153836_%D7%9E%D7%91%D7%98_%D7%9E%D7%9C%D7%9E%D7%A2%D7%9C%D7%94_%D7%A2%D7%9C_%D7%A9%D7%9C%D7%95%D7%9C%D7%99%D7%AA_%D7%94%D7%97%D7%95%D7%A8%D7%A3_%D7%91%D7%A0%D7%AA%D7%A0%D7%99%D7%94.jpg"
  },
  "Haifa": {
   "lat": 32.794,
   "lng": 34.99,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/The_Hanging_Gardens_of_Haifa%2C_Israel_%2850099173503%29_%28cropped%29.jpg/960px-The_Hanging_Gardens_of_Haifa%2C_Israel_%2850099173503%29_%28cropped%29.jpg",
   "credit": ". Ray in Manila",
   "license": "CC BY 2.0",
   "source": "https://commons.wikimedia.org/wiki/File:The_Hanging_Gardens_of_Haifa,_Israel_(50099173503)_(cropped).jpg"
  },
  "Hadera": {
   "lat": 32.434,
   "lng": 34.919,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/WikiAir_IL-13-10_A031.jpg/960px-WikiAir_IL-13-10_A031.jpg",
   "credit": "Amos Meron",
   "license": "CC BY-SA 3.0",
   "source": "https://commons.wikimedia.org/wiki/File:WikiAir_IL-13-10_A031.jpg"
  },
  "Ashdod": {
   "lat": 31.804,
   "lng": 34.655,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/%D7%A4%D7%90%D7%A8%D7%A7_%D7%95%D7%90%D7%92%D7%9D_%D7%94%D7%9E%D7%A8%D7%99%D7%A0%D7%94_%D7%9C%D7%A7%D7%A8%D7%90%D7%AA_%D7%A1%D7%95%D7%A3_%D7%A2%D7%91%D7%95%D7%93%D7%95%D7%AA_%D7%94%D7%91%D7%A0%D7%99%D7%99%D7%94%2C_%D7%9E%D7%A8%D7%A5_2024.jpg_03.jpg/960px-%D7%A4%D7%90%D7%A8%D7%A7_%D7%95%D7%90%D7%92%D7%9D_%D7%94%D7%9E%D7%A8%D7%99%D7%A0%D7%94_%D7%9C%D7%A7%D7%A8%D7%90%D7%AA_%D7%A1%D7%95%D7%A3_%D7%A2%D7%91%D7%95%D7%93%D7%95%D7%AA_%D7%94%D7%91%D7%A0%D7%99%D7%99%D7%94%2C_%D7%9E%D7%A8%D7%A5_2024.jpg_03.jpg",
   "credit": "מקף־עברי",
   "license": "CC BY-SA 4.0",
   "source": "https://commons.wikimedia.org/wiki/File:%D7%A4%D7%90%D7%A8%D7%A7_%D7%95%D7%90%D7%92%D7%9D_%D7%94%D7%9E%D7%A8%D7%99%D7%A0%D7%94_%D7%9C%D7%A7%D7%A8%D7%90%D7%AA_%D7%A1%D7%95%D7%A3_%D7%A2%D7%91%D7%95%D7%93%D7%95%D7%AA_%D7%94%D7%91%D7%A0%D7%99%D7%99%D7%94,_%D7%9E%D7%A8%D7%A5_2024.jpg_03.jpg"
  },
  "Ashkelon": {
   "lat": 31.669,
   "lng": 34.571,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/93439_marina_ashkelon_PikiWiki_Israel.jpg/960px-93439_marina_ashkelon_PikiWiki_Israel.jpg",
   "credit": "דוידי ורדי",
   "license": "CC BY 2.5",
   "source": "https://commons.wikimedia.org/wiki/File:93439_marina_ashkelon_PikiWiki_Israel.jpg"
  },
  "Be'er Sheva": {
   "lat": 31.252,
   "lng": 34.791,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Beersheba_City_Hall_6.jpg/960px-Beersheba_City_Hall_6.jpg",
   "credit": "BASWIM",
   "license": "CC BY 3.0",
   "source": "https://commons.wikimedia.org/wiki/File:Beersheba_City_Hall_6.jpg"
  },
  "Ra'anana": {
   "lat": 32.184,
   "lng": 34.871,
   "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Raanana_city.JPG/960px-Raanana_city.JPG",
   "credit": "רובי ליבוביץ הצלם שלי",
   "license": "CC BY-SA 3.0",
   "source": "https://commons.wikimedia.org/wiki/File:Raanana_city.JPG"
  }
 },
 "views": {
  "Jerusalem District": [
   31.76,
   35.1,
   10
  ],
  "Tel Aviv District": [
   32.08,
   34.8,
   11
  ],
  "Central District": [
   32.05,
   34.88,
   10
  ],
  "Haifa District": [
   32.62,
   35.0,
   10
  ],
  "North District": [
   32.95,
   35.4,
   9
  ],
  "South District": [
   31.05,
   34.8,
   8
  ],
  "Israel": [
   31.7,
   34.95,
   8
  ]
 }
};
