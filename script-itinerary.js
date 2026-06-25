const trekData = {
  annapurna: {
    name: "Annapurna Circuit Trek",
    duration: "15 Days",
    facts: [
      "Route: Kathmandu - Jagat - Manang - Thorong La - Muktinath - Jomsom - Pokhara",
      "Maximum altitude: Thorong La Pass, 5,416m",
      "Difficulty: Challenging high-pass trek",
      "Accommodation: Teahouses and mountain lodges",
      "Permits: ACAP plus current trekker registration/TIMS requirements",
      "Best season: March-May and September-November"
    ],
    notes: "This anti-clockwise route follows the standard safer acclimatization direction into Manang before crossing Thorong La. A spare weather day is recommended before or after the pass.",
    days: [
      { day: 1, title: "Kathmandu to Jagat", desc: "Drive through the Trishuli and Marsyangdi river valleys via Besisahar, then continue by local road to Jagat. Check permits and prepare for the walking section.", meta: "7-9 hours drive | Overnight 1,300m" },
      { day: 2, title: "Jagat to Dharapani", desc: "Begin trekking through stone villages, waterfalls, suspension bridges, and forested Marsyangdi gorge trails before reaching Dharapani.", meta: "5-6 hours trek | Overnight 1,860m" },
      { day: 3, title: "Dharapani to Chame", desc: "Climb gradually through pine forest and villages with the first clear views of Lamjung Himal, Annapurna II, and Manaslu.", meta: "5-6 hours trek | Overnight 2,670m" },
      { day: 4, title: "Chame to Upper Pisang", desc: "Walk past apple orchards, narrow cliffs, and the dramatic Paungda Danda rock face before sleeping at Upper Pisang for better views.", meta: "5-6 hours trek | Overnight 3,300m" },
      { day: 5, title: "Upper Pisang to Manang", desc: "Take the scenic high route through Ghyaru or Ngawal when conditions allow, gaining wide views of Annapurna II, III, IV, Gangapurna, and Tilicho Peak.", meta: "6-7 hours trek | Overnight 3,540m" },
      { day: 6, title: "Acclimatization in Manang", desc: "Rest at Manang and take a short acclimatization hike to Gangapurna Lake, Bhojo Gompa, or a nearby viewpoint. Sleep again at Manang.", meta: "Acclimatization day | Overnight 3,540m" },
      { day: 7, title: "Manang to Yak Kharka", desc: "Leave the main Manang valley and climb slowly through alpine pasture. Keep the pace steady as the sleeping altitude rises above 4,000m.", meta: "4-5 hours trek | Overnight 4,050m" },
      { day: 8, title: "Yak Kharka to Thorong Phedi", desc: "Trek carefully across dry highland terrain to Thorong Phedi. If the group is strong and conditions are good, the guide may continue to High Camp.", meta: "4-5 hours trek | Overnight 4,450m" },
      { day: 9, title: "Thorong La Pass to Muktinath", desc: "Start before dawn for the long climb to Thorong La, the highest point of the trek, then descend steeply to the sacred pilgrimage village of Muktinath.", meta: "7-9 hours trek | Pass 5,416m | Overnight 3,760m" },
      { day: 10, title: "Muktinath to Jomsom", desc: "Descend into the Kali Gandaki valley through Jharkot, Kagbeni, or the road-alternative trail depending on wind and trail condition.", meta: "5-6 hours trek/drive option | Overnight 2,720m" },
      { day: 11, title: "Jomsom to Tatopani", desc: "Drive or combine jeep transfer with short walks through the Kali Gandaki corridor, passing Marpha, Tukuche, and lower valley settlements.", meta: "5-7 hours travel | Overnight 1,190m" },
      { day: 12, title: "Tatopani to Ghorepani", desc: "Climb from the hot-spring village into rhododendron forest and traditional Magar settlements, gaining altitude steadily to Ghorepani.", meta: "6-7 hours trek | Overnight 2,860m" },
      { day: 13, title: "Poon Hill and Trek to Tikhedhunga", desc: "Hike early to Poon Hill for sunrise views of Dhaulagiri and Annapurna, then descend through Ulleri's stone steps toward Tikhedhunga.", meta: "6-7 hours trek | Viewpoint 3,210m" },
      { day: 14, title: "Tikhedhunga to Pokhara", desc: "Walk to Nayapul or the available roadhead, then drive to Pokhara for a comfortable lakeside evening.", meta: "2-3 hours trek + 2-3 hours drive | Overnight 822m" },
      { day: 15, title: "Pokhara to Kathmandu", desc: "Return to Kathmandu by tourist bus, private vehicle, or flight. Keep a buffer if you have an international departure soon after.", meta: "25 min flight or 6-8 hours drive | Trip concludes" }
    ]
  },
  everest: {
    name: "Everest Base Camp Trek",
    duration: "12-14 Days",
    facts: [
      "Route: Kathmandu - Lukla - Namche - Dingboche - Lobuche - Gorak Shep - Base Camp",
      "Maximum altitude: Kala Patthar, about 5,545m; Everest Base Camp, 5,364m",
      "Difficulty: Challenging high-altitude teahouse trek",
      "Accommodation: Teahouses and lodges",
      "Permits: Sagarmatha National Park entry, Khumbu local permit, and current trekker registration/TIMS requirements",
      "Best season: March-May and October-November"
    ],
    notes: "Lukla flights are weather dependent, so one or two buffer days are strongly recommended. The itinerary includes acclimatization in Namche and Dingboche.",
    days: [
      { day: 1, title: "Kathmandu to Lukla and Phakding", desc: "Fly to Lukla, meet the trekking crew, and walk gently through Chheplung and Ghat beside the Dudh Koshi River.", meta: "30-45 min flight + 3-4 hours trek | Overnight 2,610m" },
      { day: 2, title: "Phakding to Namche Bazaar", desc: "Cross suspension bridges, enter Sagarmatha National Park at Monjo, and climb the famous final hill into Namche Bazaar.", meta: "6-7 hours trek | Overnight 3,440m" },
      { day: 3, title: "Acclimatization in Namche", desc: "Sleep a second night at Namche. Hike to the Everest View area, Khumjung, or Kunde to help acclimatization and return lower to sleep.", meta: "Acclimatization hike | Overnight 3,440m" },
      { day: 4, title: "Namche to Tengboche or Deboche", desc: "Follow a contour trail with views of Everest, Ama Dablam, and Thamserku, then climb through forest to Tengboche Monastery.", meta: "5-6 hours trek | Overnight 3,860m" },
      { day: 5, title: "Tengboche to Dingboche", desc: "Descend to the Imja Khola, pass Pangboche, and enter the open alpine valley leading to Dingboche.", meta: "5-6 hours trek | Overnight 4,410m" },
      { day: 6, title: "Acclimatization in Dingboche", desc: "Rest at Dingboche and hike toward Nangkartshang viewpoint if conditions are good. Watch closely for altitude symptoms.", meta: "Acclimatization hike | Overnight 4,410m" },
      { day: 7, title: "Dingboche to Lobuche", desc: "Trek through Dughla/Thukla and visit the climbers' memorials before following the Khumbu Glacier moraine toward Lobuche.", meta: "5-6 hours trek | Overnight 4,940m" },
      { day: 8, title: "Lobuche to Gorak Shep and Everest Base Camp", desc: "Walk to Gorak Shep, continue across glacier moraine to Everest Base Camp, then return to Gorak Shep for the night.", meta: "7-8 hours trek | Base Camp 5,364m | Overnight 5,164m" },
      { day: 9, title: "Kala Patthar and Descend to Pheriche", desc: "Start early for Kala Patthar, the classic Everest viewpoint, then descend to Pheriche where the thicker air feels easier.", meta: "7-8 hours trek | High point about 5,545m | Overnight 4,240m" },
      { day: 10, title: "Pheriche to Namche Bazaar", desc: "Retrace the valley through Pangboche, Deboche, Tengboche, and the forested trail back to Namche.", meta: "6-7 hours trek | Overnight 3,440m" },
      { day: 11, title: "Namche Bazaar to Lukla", desc: "Descend carefully to the Dudh Koshi and continue through Phakding and Ghat to complete the trekking circuit at Lukla.", meta: "6-7 hours trek | Overnight 2,860m" },
      { day: 12, title: "Lukla to Kathmandu", desc: "Fly back to Kathmandu or Manthali depending on seasonal flight operations. Keep an extra day for weather delays.", meta: "30-45 min flight | Trip concludes" }
    ]
  },
  langtang: {
    name: "Langtang Valley Trek",
    duration: "8 Days",
    facts: [
      "Route: Kathmandu - Syabrubesi - Lama Hotel - Langtang Village - Kyanjin Gompa",
      "Maximum altitude: Kyanjin Ri or Tserko Ri optional viewpoints, about 4,700m-5,000m+",
      "Difficulty: Moderate, with a high-altitude viewpoint option",
      "Accommodation: Teahouses and lodges",
      "Permits: Langtang National Park entry plus current trekker registration/TIMS requirements",
      "Best season: March-May and September-November"
    ],
    notes: "Langtang is one of the best short treks from Kathmandu. The road to Syabrubesi can be rough, so private transport is more comfortable than public bus.",
    days: [
      { day: 1, title: "Kathmandu to Syabrubesi", desc: "Drive north from Kathmandu through Trishuli Bazaar and Dhunche to reach Syabrubesi, the main trailhead for Langtang Valley.", meta: "6-8 hours drive | Overnight 1,460m" },
      { day: 2, title: "Syabrubesi to Lama Hotel", desc: "Follow the Langtang Khola through bamboo, oak, and rhododendron forest, passing small teahouses and riverside rest stops.", meta: "6-7 hours trek | Overnight 2,470m" },
      { day: 3, title: "Lama Hotel to Langtang Village or Mundu", desc: "Climb through Ghodatabela into wider alpine valley scenery, then continue to rebuilt Langtang Village or nearby Mundu.", meta: "5-6 hours trek | Overnight 3,430m-3,550m" },
      { day: 4, title: "Langtang Village to Kyanjin Gompa", desc: "Walk a shorter day past mani walls, yak pastures, and mountain views to Kyanjin Gompa, the main high village of the trek.", meta: "3-4 hours trek | Overnight 3,870m" },
      { day: 5, title: "Kyanjin Gompa Exploration", desc: "Use the day for acclimatization and views. Options include Kyanjin Ri, Tserko Ri in good conditions, the monastery, and the local cheese factory.", meta: "Viewpoint day | Sleep again at 3,870m" },
      { day: 6, title: "Kyanjin Gompa to Lama Hotel", desc: "Descend the same valley, enjoying easier walking and changing views of Langtang Lirung and the surrounding peaks.", meta: "6-7 hours trek | Overnight 2,470m" },
      { day: 7, title: "Lama Hotel to Syabrubesi", desc: "Continue down through forest and river crossings to return to Syabrubesi.", meta: "5-6 hours trek | Overnight 1,460m" },
      { day: 8, title: "Syabrubesi to Kathmandu", desc: "Drive back to Kathmandu. Road timing varies with traffic, weather, and landslide repair work.", meta: "6-8 hours drive | Trip concludes" }
    ]
  },
  manaslu: {
    name: "Manaslu Circuit Trek",
    duration: "14-16 Days",
    facts: [
      "Route: Kathmandu - Machha Khola - Samagaon - Samdo - Larkya La - Bimthang - Dharapani",
      "Maximum altitude: Larkya La Pass, about 5,106m",
      "Difficulty: Challenging restricted-area high-pass trek",
      "Accommodation: Teahouses and lodges",
      "Permits: Manaslu Restricted Area Permit, MCAP, ACAP, and licensed guide requirements",
      "Best season: March-May and September-November"
    ],
    notes: "Manaslu is remote and permit rules change, so the exact paperwork should be checked before booking. A guide and proper acclimatization are essential.",
    days: [
      { day: 1, title: "Kathmandu to Machha Khola", desc: "Drive through Gorkha-side hills and along rough Budhi Gandaki road sections to Machha Khola.", meta: "8-10 hours drive | Overnight 930m" },
      { day: 2, title: "Machha Khola to Jagat", desc: "Trek through Khorlabesi, Tatopani, Dobhan, and river gorge terrain before reaching Jagat, an entry checkpoint village.", meta: "6-7 hours trek | Overnight 1,340m" },
      { day: 3, title: "Jagat to Deng", desc: "Walk through Salleri, Philim, and bamboo forest sections as the valley narrows and the cultural feel begins to shift northward.", meta: "6-7 hours trek | Overnight 1,860m" },
      { day: 4, title: "Deng to Namrung", desc: "Climb through Rana, Bihi Phedi, and forested trails to Namrung, where Manaslu-region mountain views become stronger.", meta: "6-7 hours trek | Overnight 2,630m" },
      { day: 5, title: "Namrung to Lho or Syala", desc: "Pass Tibetan-influenced villages, mani walls, and barley fields while walking toward the big Manaslu viewpoints near Lho and Syala.", meta: "5-6 hours trek | Overnight 3,180m-3,500m" },
      { day: 6, title: "Lho or Syala to Samagaon", desc: "Enjoy one of the finest scenic sections of the circuit, with Manaslu dominating the skyline as you approach Samagaon.", meta: "4-5 hours trek | Overnight 3,530m" },
      { day: 7, title: "Acclimatization in Samagaon", desc: "Rest and acclimatize. Strong groups may hike toward Pungyen Gompa or Manaslu Base Camp, returning to Samagaon to sleep.", meta: "Acclimatization day | Overnight 3,530m" },
      { day: 8, title: "Samagaon to Samdo", desc: "Follow a shorter gradual trail into the high Budhi Gandaki valley and reach Samdo, close to the Tibetan trade route.", meta: "3-4 hours trek | Overnight 3,875m" },
      { day: 9, title: "Acclimatization in Samdo", desc: "Take a rest day or hike toward a viewpoint above Samdo. This extra night improves safety before the pass approach.", meta: "Acclimatization day | Overnight 3,875m" },
      { day: 10, title: "Samdo to Dharamsala", desc: "Move slowly to Dharamsala, also called Larkya Phedi, the basic high camp below Larkya La.", meta: "4-5 hours trek | Overnight 4,460m" },
      { day: 11, title: "Larkya La Pass to Bimthang", desc: "Start before sunrise for the long climb to Larkya La, then descend past glacial terrain and wide mountain views to Bimthang.", meta: "8-10 hours trek | Pass about 5,106m | Overnight 3,590m" },
      { day: 12, title: "Bimthang to Tilije", desc: "Descend through pasture, forest, and the Dudh Khola valley, leaving the highest terrain behind.", meta: "5-6 hours trek | Overnight 2,300m" },
      { day: 13, title: "Tilije to Dharapani and Besisahar", desc: "Walk to Dharapani, join the Annapurna Circuit roadhead, and drive toward Besisahar if transport is available.", meta: "2-3 hours trek + 4-5 hours drive | Overnight 760m" },
      { day: 14, title: "Besisahar to Kathmandu", desc: "Return to Kathmandu by private vehicle or bus. Keep spare time in case road conditions slow the journey.", meta: "6-8 hours drive | Trip concludes" }
    ]
  },
  makalu: {
    name: "Makalu Base Camp Trek",
    duration: "17-19 Days",
    facts: [
      "Route: Kathmandu - Tumlingtar - Num - Tashigaon - Khongma - Shipton La - Langmale - Makalu Base Camp",
      "Maximum altitude: Makalu Base Camp, about 4,870m",
      "Difficulty: Strenuous remote trek with long forest climbs and high passes",
      "Accommodation: Basic teahouses in many sections; camping or simple lodges may be needed depending on season",
      "Permits: Makalu-Barun National Park permit plus current trekker registration/TIMS requirements",
      "Best season: March-May and October-November"
    ],
    notes: "This is a remote trek with fewer facilities than Everest, Annapurna, or Langtang. Flight buffers and a flexible food/lodging plan are important.",
    days: [
      { day: 1, title: "Kathmandu to Tumlingtar and Num", desc: "Fly to Tumlingtar, then drive by jeep through Khandbari and mountain roads to Num.", meta: "35-45 min flight + 4-6 hours drive | Overnight 1,560m" },
      { day: 2, title: "Num to Seduwa", desc: "Descend steeply to the Arun River, cross the bridge, and climb through forest and terraces to Seduwa.", meta: "5-6 hours trek | Overnight 1,500m" },
      { day: 3, title: "Seduwa to Tashigaon", desc: "Walk through farming villages, cardamom fields, and forest to Tashigaon, the last major permanent village before the high route.", meta: "4-5 hours trek | Overnight 2,100m" },
      { day: 4, title: "Tashigaon to Khongma Danda", desc: "Climb a long, steep forest trail with stone steps and ridge sections to Khongma Danda.", meta: "6-7 hours trek | Overnight 3,500m" },
      { day: 5, title: "Acclimatization at Khongma Danda", desc: "Rest and take a short ridge walk if conditions allow. This day helps before crossing the Shipton La area.", meta: "Acclimatization day | Overnight 3,500m" },
      { day: 6, title: "Khongma Danda to Dobate", desc: "Cross the high passes around Ghungru La, Shipton La, and Keke La, then descend to Dobate.", meta: "6-7 hours trek | High passes about 4,000m+ | Overnight 3,650m" },
      { day: 7, title: "Dobate to Yangri Kharka", desc: "Descend through forest to the Barun River valley, then follow the river upstream to Yangri Kharka.", meta: "5-6 hours trek | Overnight 3,557m" },
      { day: 8, title: "Yangri Kharka to Langmale Kharka", desc: "Move deeper into the alpine valley past yak pasture and glacier-fed streams with bigger views opening ahead.", meta: "5-6 hours trek | Overnight 4,410m" },
      { day: 9, title: "Langmale Kharka to Makalu Base Camp", desc: "Follow the high valley to Makalu Base Camp, surrounded by Makalu, Baruntse, Peak 6, Peak 7, and glacier scenery.", meta: "5-6 hours trek | Overnight 4,870m" },
      { day: 10, title: "Explore Makalu Base Camp", desc: "Use a full day for rest, photography, and short viewpoint hikes around base camp if weather and acclimatization are good.", meta: "Exploration day | Overnight 4,870m" },
      { day: 11, title: "Makalu Base Camp to Yangri Kharka", desc: "Retrace the Barun valley downhill, leaving the high alpine bowl and returning to thicker air.", meta: "6-7 hours trek | Overnight 3,557m" },
      { day: 12, title: "Yangri Kharka to Dobate", desc: "Follow the river and forested valley back toward Dobate, with some damp and slippery sections possible.", meta: "5-6 hours trek | Overnight 3,650m" },
      { day: 13, title: "Dobate to Khongma Danda", desc: "Re-cross the Shipton La pass area and return to Khongma Danda.", meta: "6-7 hours trek | Overnight 3,500m" },
      { day: 14, title: "Khongma Danda to Tashigaon", desc: "Descend the long forested ridge and stone steps back to Tashigaon.", meta: "5-6 hours trek | Overnight 2,100m" },
      { day: 15, title: "Tashigaon to Num", desc: "Continue down through Seduwa and across the Arun River, then climb back to Num.", meta: "6-7 hours trek | Overnight 1,560m" },
      { day: 16, title: "Num to Tumlingtar", desc: "Drive back through Khandbari to Tumlingtar and prepare for the return flight.", meta: "4-6 hours drive | Overnight 410m" },
      { day: 17, title: "Tumlingtar to Kathmandu", desc: "Fly to Kathmandu. Keep a weather buffer because mountain flights can be delayed.", meta: "35-45 min flight | Trip concludes" }
    ]
  },
  dhaulagiri: {
    name: "Dhaulagiri Circuit Trek",
    duration: "16-19 Days",
    facts: [
      "Route: Kathmandu - Beni/Darbang - Italian Base Camp - Dhaulagiri Base Camp - French Pass - Hidden Valley - Marpha",
      "Maximum altitude: French Pass, about 5,360m; Dhampus Pass area, about 5,200m+",
      "Difficulty: Very strenuous remote camping trek",
      "Accommodation: Teahouses in lower villages; camping required in high sections",
      "Permits: ACAP for the exit side plus current trekker registration/TIMS requirements; camping logistics required",
      "Best season: April-May and September-November"
    ],
    notes: "Dhaulagiri Circuit is more serious than a normal teahouse trek. It requires strong fitness, experienced staff, camping equipment, and careful weather judgment for French Pass and Dhampus Pass.",
    days: [
      { day: 1, title: "Kathmandu to Beni or Darbang", desc: "Drive west via Pokhara toward Beni and, if road conditions allow, continue to Darbang to shorten the approach.", meta: "9-11 hours drive | Overnight 830m-1,180m" },
      { day: 2, title: "Darbang to Dharapani", desc: "Begin walking through Magar villages, terraced hillsides, and river valleys toward Dharapani.", meta: "5-6 hours trek | Overnight about 1,470m" },
      { day: 3, title: "Dharapani to Muri", desc: "Climb and traverse rural hill trails with views toward Gurja Himal and Dhaulagiri on clear days.", meta: "5-6 hours trek | Overnight about 1,850m" },
      { day: 4, title: "Muri to Boghara", desc: "Descend and climb through forest, fields, and steep village paths toward Boghara.", meta: "6-7 hours trek | Overnight about 2,080m" },
      { day: 5, title: "Boghara to Dobhan", desc: "Enter wilder forested terrain, crossing side streams and following the Myagdi Khola corridor.", meta: "6-7 hours trek | Overnight about 2,520m" },
      { day: 6, title: "Dobhan to Sallaghari or Choriban Khola", desc: "Continue through dense forest and narrower valley terrain as the route becomes more remote.", meta: "5-6 hours trek | Camp about 3,100m" },
      { day: 7, title: "Sallaghari to Italian Base Camp", desc: "Reach Italian Base Camp below the west face of Dhaulagiri, entering a dramatic alpine setting.", meta: "4-5 hours trek | Camp 3,660m" },
      { day: 8, title: "Acclimatization at Italian Base Camp", desc: "Rest, check equipment, and take a short acclimatization walk. This day is important before glacier and high-camp terrain.", meta: "Acclimatization day | Camp 3,660m" },
      { day: 9, title: "Italian Base Camp to Glacier Camp", desc: "Move carefully through moraine and glacier-influenced terrain toward Japanese/Chhonbardan Glacier Camp.", meta: "5-6 hours trek | Camp about 4,200m" },
      { day: 10, title: "Glacier Camp to Dhaulagiri Base Camp", desc: "Continue over rugged moraine to Dhaulagiri Base Camp with close views of Dhaulagiri I and surrounding icefalls.", meta: "5-6 hours trek | Camp about 4,740m" },
      { day: 11, title: "Acclimatization at Dhaulagiri Base Camp", desc: "Rest at base camp, monitor altitude response, and prepare for the French Pass crossing.", meta: "Acclimatization day | Camp about 4,740m" },
      { day: 12, title: "French Pass to Hidden Valley", desc: "Climb to French Pass, the highest point of the trek, then descend into the stark high-altitude Hidden Valley.", meta: "6-8 hours trek | Pass about 5,360m | Camp about 5,050m" },
      { day: 13, title: "Hidden Valley to Yak Kharka or Alubari", desc: "Cross the Dhampus Pass area and descend carefully toward Yak Kharka or Alubari, depending on snow and group pace.", meta: "7-9 hours trek | High pass about 5,200m+ | Camp about 3,680m" },
      { day: 14, title: "Yak Kharka to Marpha or Jomsom", desc: "Descend into the Kali Gandaki valley and reach Marpha or Jomsom, returning to teahouse comfort.", meta: "5-6 hours trek | Overnight 2,670m-2,720m" },
      { day: 15, title: "Jomsom to Pokhara", desc: "Fly to Pokhara if flights operate, or travel by jeep through the Kali Gandaki road corridor.", meta: "20 min flight or long drive | Overnight 822m" },
      { day: 16, title: "Pokhara to Kathmandu", desc: "Return to Kathmandu by flight or road. Keep spare days after this trek because weather and road conditions can shift plans.", meta: "25 min flight or 6-8 hours drive | Trip concludes" }
    ]
  }
};

const navToggle = document.getElementById('navToggleItinerary');
const navLinks = document.getElementById('navLinksItinerary');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

function renderPackageButtons() {
  const selector = document.getElementById('packageSelector');
  Object.keys(trekData).forEach(key => {
    const btn = document.createElement('button');
    btn.className = `package-btn ${key === 'annapurna' ? 'active' : ''}`;
    btn.textContent = trekData[key].name;
    btn.addEventListener('click', event => showItinerary(key, event));
    selector.appendChild(btn);
  });
}

function showItinerary(trek, event) {
  const buttons = document.querySelectorAll('.package-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }

  const container = document.getElementById('itineraryContainer');
  container.innerHTML = '';

  const data = trekData[trek];
  const heading = document.createElement('div');
  heading.className = 'section-heading';
  heading.innerHTML = `<span class="eyebrow">${data.duration}</span><h2>${data.name}</h2><p>${data.notes}</p>`;
  container.appendChild(heading);

  const details = document.createElement('div');
  details.className = 'itinerary-facts';
  details.innerHTML = data.facts.map(fact => `<span>${fact}</span>`).join('');
  container.appendChild(details);

  data.days.forEach(day => {
    const article = document.createElement('article');
    article.className = 'itinerary-day';
    article.innerHTML = `
      <div class="day-badge">Day ${day.day}</div>
      <h3>${day.title}</h3>
      <p>${day.desc}</p>
      <div class="day-meta">
        <span>${day.meta}</span>
      </div>
    `;
    container.appendChild(article);
  });
}

renderPackageButtons();
showItinerary('annapurna');
