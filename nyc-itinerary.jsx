import { useState } from "react";

const days = [
  {
    id: 1,
    date: "1. juni",
    label: "Dan dolaska",
    subtitle: "Midtown · Bryant Park · Eataly",
    km: "~3 km",
    duration: "15:00 — 19:30",
    color: "#C8A96E",
    emoji: "✈️",
    tip: "Ne bori se s jet lagom — budi vani, ali idi spavati do 22h!",
    stops: [
      {
        time: "~14:00",
        name: "The Langham NYC — check-in",
        address: "400 5th Ave",
        type: "hotel",
        note: "Ako soba nije spremna — ostavi prtljag na recepciji i kreni odmah!",
        warning: true,
      },
      {
        time: "15:00",
        name: "New York Public Library",
        address: "476 5th Ave",
        type: "culture",
        note: "Besplatno! Raskošna čitaonica Rose Main Reading Room · lavovi Patience i Fortitude na ulazu. Otvoreno do 18h.",
      },
      {
        time: "15:45",
        name: "Bryant Park",
        address: "Direktno iza biblioteke",
        type: "park",
        note: "Zelene stolice, fontana, kafići. Uzmi kafu u Le Pain Quotidien ili kiosku u parku.",
      },
      {
        time: "17:30",
        name: "Eataly NYC Flatiron ★",
        address: "200 5th Ave",
        type: "dinner",
        note: "Italijanski tržni centar. Preporuka: La Pizza & La Pasta ili Il Pesce · vino uz večeru. Bez rezervacije za ranu večeru.",
      },
      {
        time: "~19:00",
        name: "Povratak u hotel",
        address: "15 min pješice prema sjeveru",
        type: "walk",
        note: "Rano u krevet! Sutra je veliki dan — Wall Street, Crown Shy, West Village.",
      },
    ],
  },
  {
    id: 2,
    date: "2. juni",
    label: "Wall Street & West Village",
    subtitle: "Financial District · Crown Shy · Employees Only",
    km: "~20 km",
    duration: "08:30 — 23:00+",
    color: "#2C5F8A",
    emoji: "🏛️",
    tip: "Udobne cipele OBAVEZNO! Najduži dan — ~20 km hoda.",
    stops: [
      { time: "08:30", name: "The Langham — polazak", address: "400 5th Ave", type: "hotel", note: "Start pješačke ture kroz Manhattan." },
      { time: "09:00", name: "Flatiron Building", address: "175 5th Ave", type: "landmark", note: "Ikonična trokutasta zgrada — brza fotka.", warning: true, warningText: "Trenutno pod renovacijom" },
      { time: "09:25", name: "SoHo — Broadway & Spring St", address: "SoHo", type: "walk", note: "Lijepa cast-iron arhitektura, jutarnji NYC." },
      { time: "09:40", name: "Tribeca", address: "TriBeCa", type: "walk", note: "Jedan od najljepših kvartova u NYC-u." },
      { time: "09:55", name: "Trinity Church", address: "89 Broadway", type: "landmark", note: "Crkva iz 1697. Ovdje je sahranjen Alexander Hamilton." },
      { time: "10:15", name: "New York Stock Exchange", address: "11 Wall St", type: "landmark", note: "Srce globalnih finansija — impresivna fasada." },
      { time: "10:30", name: "Federal Hall National Memorial", address: "26 Wall St", type: "landmark", note: "Washington je ovdje položio zakletvu.", warning: true, warningText: "Zatvoreno pon/uti!" },
      { time: "10:45", name: "The Fearless Girl", address: "Broad St", type: "landmark", note: "Simbol ženskog osnaživanja — brza fotka." },
      { time: "11:00", name: "Stone Street ☕", address: "Stone St", type: "coffee", note: "Kaldrmisana ulica iz 17. vijeka · kafa ili vino · zasluženi odmak (35 min)." },
      { time: "11:40", name: "Charging Bull", address: "Bowling Green", type: "landmark", note: "Ikonična stanica — foto obavezna!" },
      { time: "12:00", name: "Battery Park", address: "Battery Park", type: "park", note: "Šetnja uz vodu · pogled na Harbour i Kip slobode." },
      { time: "12:35", name: "South Street Seaport", address: "South St", type: "walk", note: "Najljepši waterfront u FiDi-ju." },
      { time: "13:30", name: "Crown Shy ⭐ Michelin", address: "70 Pine St", type: "lunch", note: "Moderni fine dining u FiDi-ju. Must-try: gnocchi · kruh · 1 glavno jelo. Ne prejedi se — čeka te večera!" },
      { time: "15:00", name: "Oculus World Trade Center", address: "185 Greenwich St", type: "culture", note: "Arhitektura Santiaga Calatrawa · ulaz besplatan." },
      { time: "15:30", name: "9/11 Memorial & Museum", address: "180 Greenwich St", type: "culture", note: "Mirna, emotivna pauza.", warning: true, warningText: "Zatvoreno utorkom!" },
      { time: "16:15", name: "Odmor u hotelu (OBAVEZNO!)", address: "The Langham", type: "hotel", note: "Povratak pješke ~45 min ili subway. Napuni baterije za večer." },
      { time: "19:00", name: "L'Artusi 🍝", address: "228 W 10th St", type: "dinner", note: "Italijanski restoran. Must-try: garganelli · pasta za dijeljenje · olive oil cake · čaša vina. Rezervacija preporučena." },
      { time: "21:00", name: "Employees Only 🍸", address: "510 Hudson St", type: "bar", note: "Speakeasy klasik · radi do 04:00. Kokteli: Employees Only Martini · Paper Plane · Whiskey/mezcal varijante." },
    ],
  },
  {
    id: 3,
    date: "3. juni",
    label: "Brooklyn dan",
    subtitle: "Brooklyn Bridge · DUMBO · Juliana's · Williamsburg",
    km: "~18 km",
    duration: "08:30 — 23:30",
    color: "#8B4513",
    emoji: "🌉",
    tip: "Uber nazad: Williamsburg → Langham ~20 min, oko $25–35.",
    stops: [
      { time: "08:30", name: "Polazak — The Langham", address: "400 Fifth Avenue", type: "hotel", note: "Pešice niz 5th Ave i Broadway prema City Hall. ~45 min hod." },
      { time: "09:15", name: "Brooklyn Bridge — ulaz", address: "Manhattan strana", type: "landmark", note: "Kratka pauza pre prelaska kod City Hall parka." },
      { time: "09:30", name: "Brooklyn Bridge 🌁", address: "Pešački prelaz", type: "landmark", note: "~45 min hoda. Pogled na Manhattan skyline, East River i Kip Slobode." },
      { time: "10:15", name: "DUMBO — Washington Street", address: "Washington St, DUMBO", type: "landmark", note: "Najikoničnija ulica u NYC. Manhattan Bridge uokviren između brownstone zgrada. Jutarnje svetlo je savršeno." },
      { time: "10:45", name: "Pebble Beach — Brooklyn Bridge Park", address: "Brooklyn Bridge Park", type: "park", note: "Šljunčana plaža između dva mosta. Direktan pogled na East River i Manhattan skyline." },
      { time: "11:15", name: "Jane's Carousel + šetnja uz reku", address: "Brooklyn Bridge Park", type: "landmark", note: "Vintage karusel iz 1922. u staklenom paviljonu — samo $3. Šetnja duž waterfronta prema Pier 1.", warning: true, warningText: "Ne radi utorkom!" },
      { time: "12:00", name: "Time Out Market Brooklyn ☕", address: "Time Out Market", type: "coffee", note: "Ess-a-Bagel unutra za kafu i bagel. Rooftop terasa sa pogledom na oba mosta. Od 8h." },
      { time: "12:45", name: "Brooklyn Heights Promenade", address: "Brooklyn Heights", type: "walk", note: "Najlepši pogled na Manhattan skyline u celom Brooklynu. Mirno i bez turista radnim danom." },
      { time: "13:30", name: "Juliana's Pizza 🍕", address: "ispod Brooklyn Bridgea", type: "lunch", note: "Kultna coal-fired pizza. Must: Margherita, white pizza, meatballs.", warning: true, warningText: "Nema rezervacija — dođite tačno u 13:30!" },
      { time: "15:15", name: "Green-Wood Cemetery", address: "478 ha, Park Slope", type: "culture", note: "Leonard Bernstein i mnogi drugi. Brda, mauzolejumi, pogled na Manhattan. Uzmi mapu na ulazu! Besplatno, do 19h." },
      { time: "19:00", name: "Francie ⭐ Michelin 🦆", address: "Williamsburg", type: "dinner", note: "Michelin preporučen. Must: roast duck, clam pasta, Roman Army sourdough.", warning: true, warningText: "REZERVACIJA OBAVEZNA! Ne radi nedeljom." },
      { time: "21:15", name: "Westlight Rooftop 🌆", address: "111 N 12th St, Brooklyn", type: "bar", note: "22. sprat William Vale hotela. Panorama Manhattana i Brooklyna. Do ponoći radnim danom." },
      { time: "23:30", name: "Povratak — Uber", address: "Williamsburg → Langham", type: "uber", note: "~20 min, oko $25–35." },
    ],
  },
  {
    id: 4,
    date: "4. juni",
    label: "MoMA · Central Park · Met",
    subtitle: "MoMA · Central Park · Metropolitan · Le Bernardin",
    km: "~6 km",
    duration: "10:30 — 22:00",
    color: "#4A7C59",
    emoji: "🎨",
    tip: "Lakši dan — ~6 km. Le Bernardin je 5 min od Langhama — nema potrebe za Uberom.",
    stops: [
      { time: "10:30", name: "MoMA — Museum of Modern Art 🖼️", address: "11 W 53rd St, Midtown", type: "culture", note: "Must: Van Gogh Zvezdana noć, Picasso, Dalí (5. sprat), Monet.", warning: true, warningText: "Kupi karte online unapred — u sezoni može biti red!" },
      { time: "13:00", name: "Central Park — lagana šetnja 🌳", address: "Ulaz sa 59th St", type: "park", note: "Lagana šetnja prema severu ka Metropolitenu. Sheep Meadow, The Mall, Bethesda Terrace usput." },
      { time: "15:00", name: "Metropolitan Museum of Art 🏛️", address: "1000 5th Ave", type: "culture", note: "Must: egipatska kolekcija, Temple of Dendur, evropsko slikarstvo. Ulaz sa bočne strane (bez reda!)", warning: true, warningText: "Ne radi sredom! Petkom i subotom do 21h." },
      { time: "17:30", name: "Pešice do The Langham — niz 5th Ave", address: "~3 km, ~35 min", type: "walk", note: "Prolaz pored Plaza Hotela i Central Park South. Presvlačenje i odmor pre večere." },
      { time: "19:30", name: "Le Bernardin ⭐⭐⭐ 🐟", address: "155 W 51st St", type: "dinner", note: "3 Michelin zvezdice. Jedan od najboljih restorana u NYC-u. Must: tasting menu. Dress code: smart casual/formal.", warning: true, warningText: "REZERVACIJA OBAVEZNA — rezerviši daleko unapred! Ne radi nedeljom." },
    ],
  },
  {
    id: 5,
    date: "5. juni",
    label: "Chelsea & High Line",
    subtitle: "Chelsea · High Line · Meatpacking · Pastis · RH Rooftop",
    km: "~5.5 km",
    duration: "09:30 — 21:00",
    color: "#7B5EA7",
    emoji: "🌿",
    tip: "Pastis — VEĆ ZAKAZANO u 14:15! Zalazak sunca na Little Islandu oko 20h.",
    stops: [
      { time: "09:30", name: "Langham — polazište", address: "400 Fifth Avenue", type: "hotel", note: "Krenite prema zapadu na 10th Ave, pa na jug kroz Hell's Kitchen. ~30 min do Chelsea." },
      { time: "10:00", name: "Chelsea šetnja 🎨", address: "23rd St & 10th Ave", type: "walk", note: "Setajte niz 10th Ave — jedna od najlepših ulica u gradu. Galerije, kafići, lokalne prodavnice. Pravi njujorski kvartal bez turista." },
      { time: "11:00", name: "Chelsea Market 🦞", address: "75 Ninth Ave", type: "culture", note: "Los Tacos No.1, Seed+Mill za halvu i sladoled, The Lobster Place. Predivna industrijska arhitektura. Od 7h." },
      { time: "12:00", name: "High Line 🌺", address: "Ulaz: Gansevoort St & Washington St", type: "park", note: "Uđite na južnom ulazu kod 14th St i šetajte prema SEVERU. Vrtovi, instalacije, klupe sa pogledom na Hudson. Izađite na 23rd ili 30th St. Besplatan ulaz." },
      { time: "13:15", name: "Meatpacking šetnja", address: "Gansevoort St, Washington St", type: "walk", note: "Spustite se sa High Linea. Lepe kaldrmisane ulice, dizajnerske prodavnice, odlična atmosfera." },
      { time: "14:15", name: "Pastis ★ REZERVISANO", address: "52 Gansevoort St", type: "lunch", note: "VEĆ ZAKAZANO! Klasični njujorski bistro. Must-order: entrecote steak, dirty martini, escargot.", warning: true, warningText: "Rezervacija potvrđena u 14:15!" },
      { time: "16:00", name: "Little Island 🏝️", address: "Pier 55, Hudson River Park", type: "park", note: "Plutajući park, ocena 4.7, otvoren do 23h. Idealno za odmor i fotografije — zalazak sunca nad rekom! Besplatan ulaz." },
      { time: "19:00", name: "RH Rooftop Restaurant 🥂", address: "9 Ninth Ave, Meatpacking", type: "dinner", note: "Stakleni lift do krova, lusteri, panorama grada. Must-order: truffle fries, branzino, creme brulee.", warning: true, warningText: "Rezervacija obavezna! Tel: +1 212-217-2210" },
      { time: "21:00", name: "Povratak u hotel — pešice", address: "9th Ave → 5th Ave", type: "walk", note: "~45 min, ~3.5 km. Prolazite kroz West Village i Flatiron — noćni grad je predivan. Ako ste umorni: Uber ~15 min, oko $15–25." },
    ],
  },
  {
    id: 6,
    date: "6. juni",
    label: "SoHo & TriBeCa",
    subtitle: "SoHo Cast Iron · Ulla Johnson · Cipriani · Osteria Carlina · Hide Rooftop",
    km: "~6.5 km",
    duration: "09:30 — 22:00+",
    color: "#C0392B",
    emoji: "🛍️",
    tip: "SoHo kaldrma može biti naporna — udobne cipele! Dirty martini na Hide Rooftopu je legendarni.",
    stops: [
      { time: "09:30", name: "The Langham — polazište", address: "400 Fifth Avenue", type: "hotel", note: "Krenite pešice niz 5th Ave prema jugu, pa Broadway. ~45 min kroz Flatiron i NoHo." },
      { time: "10:15", name: "SoHo Cast Iron District 🏗️", address: "Greene St & Broome St", type: "culture", note: "Najveća koncentracija liveno-gvozdenih fasada na svetu. Slobodna šetnja, bez ulaznice." },
      { time: "11:00", name: "Ulla Johnson 👗", address: "15 Bleecker St, SoHo/NoHo", type: "shop", note: "Otvaraju tačno u 11h. Pet minuta pešice od Cast Iron Districta. Uzmite bar sat vremena." },
      { time: "12:15", name: "SoHo slobodna šetnja", address: "West Broadway, Prince St, Spring St", type: "walk", note: "Galerije, kafići, window shopping. Idealno pre ručka." },
      { time: "14:30", name: "Cipriani Downtown 🥂", address: "376 West Broadway", type: "lunch", note: "Must-order: rigatoni alla vodka + bellini.", warning: true, warningText: "Rezervacija obavezna! Tel: +1 212-343-0999" },
      { time: "16:15", name: "Staple Street Skybridge 📸", address: "9 Jay St, TriBeCa", type: "landmark", note: "Pešice ~12 min od Ciprianija. Najfotogeničnija tačka TriBeCe — stari bolnički most između zgrada." },
      { time: "16:45", name: "TriBeCa slobodna šetnja", address: "Harrison St, Hudson St, Worth St", type: "walk", note: "Najtišiji i najlepši blokovi Menhetna. Ugodan tempo pred večeru — sačuvajte energiju!" },
      { time: "19:00", name: "Osteria Carlina ⭐ 🍝", address: "11 Varick St, TriBeCa", type: "dinner", note: "Ocena 4.9★ Kuhinja iz Pijemonta, intimna atmosfera. Must-order: steak tartare, tagliatelle al tartufo.", warning: true, warningText: "Rezervacija: +1 646-370-4929. Zatvoreni nedeljom." },
      { time: "21:00", name: "Hide Rooftop 🌃", address: "Artezen Hotel, 24 John St, 20. sprat", type: "bar", note: "Intiman rooftop sa panoramom grada. Dirty martini je legendarni! Od 16h (sub od 17h)." },
    ],
  },
  {
    id: 7,
    date: "7. juni",
    label: "West Village & MJ Musical",
    subtitle: "West Village · Little Ruby's · Washington Square · MJ Musical · Rum House",
    km: "~11 km",
    duration: "10:00 — 00:00",
    color: "#D4A017",
    emoji: "🎭",
    tip: "MJ karte kupiti unapred na broadway.com ili todaytix.com. Neil Simon Theatre je 10 min pešice od Langhama!",
    stops: [
      { time: "10:00", name: "Polazak — The Langham", address: "400 Fifth Avenue", type: "hotel", note: "Izađite na 5th Ave, skrenite levo (prema jugu). ~50 min, ~3.5 km do West Villagea." },
      { time: "10:50", name: "Cafe Luna ☕", address: "Hudson St 628", type: "coffee", note: "Odličan americano i lagane pastice. Otvoreno od 8h. Direktno na putu." },
      { time: "11:15", name: "West Village šetnja 🏘️", address: "Hudson St → Bleecker St → Christopher St", type: "walk", note: "Najlepše kaldrmisane ulice u NYC-u. Brownstone kuće, boutique prodavnice, lokalni kafići." },
      { time: "13:00", name: "Little Ruby's West Village 🥗", address: "225 W 4th St", type: "lunch", note: "Must: chicken avocado salad, burger sa truffle fries, iced latte. Bez rezervacije." },
      { time: "14:30", name: "Washington Square Park + Bleecker St 🎸", address: "Washington Square Park", type: "park", note: "Slavoluk, fontana, NYU kampus. Zatim Bleecker St istočno za boutique prodavnice i sladoledžinice." },
      { time: "16:00", name: "Povratak u Langham — pešice", address: "6th Ave prema severu", type: "walk", note: "~50 min, ~3.5 km. Odmor i presvlačenje pre večere i predstave." },
      { time: "17:30", name: "Elephant Ear 🍜", address: "690 9th Ave, Hell's Kitchen", type: "dinner", note: "Must: drunken noodle ribeye, soft shell crab curry, pineapple fried rice. Bez rezervacije. 5 min pešice od pozorišta." },
      { time: "20:00", name: "★ MJ — The Musical 🎤", address: "Neil Simon Theatre, 250 W 52nd St", type: "show", note: "2h 30min sa pauzom. Više od 25 Jacksonovih hitova — Thriller, Billie Jean, Beat It, Smooth Criminal.", warning: true, warningText: "Stignite 15 min pre početka!" },
      { time: "22:30", name: "The Rum House 🥃", address: "228 W 47th St", type: "bar", note: "Preko 180 vrsta ruma, live jazz, dimljeni kokteli. Ocena 4.4. Radi do 01h (petkom i subotom do 02h)." },
      { time: "00:00", name: "Povratak u Langham — pešice", address: "W 47th St → 5th Ave", type: "walk", note: "~15 min, ~1 km. Direktno kući." },
    ],
  },
];

const typeConfig = {
  hotel: { icon: "🏨", color: "#6B7280" },
  walk: { icon: "🚶", color: "#6B7280" },
  landmark: { icon: "📍", color: "#EF4444" },
  culture: { icon: "🏛️", color: "#8B5CF6" },
  park: { icon: "🌿", color: "#10B981" },
  coffee: { icon: "☕", color: "#92400E" },
  lunch: { icon: "🍽️", color: "#F59E0B" },
  dinner: { icon: "🍷", color: "#DC2626" },
  bar: { icon: "🍸", color: "#1D4ED8" },
  show: { icon: "🎭", color: "#7C3AED" },
  shop: { icon: "🛍️", color: "#EC4899" },
  uber: { icon: "🚗", color: "#374151" },
};

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedStop, setExpandedStop] = useState(null);

  const day = days[activeDay];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0F",
      color: "#F0EDE8",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      position: "relative",
      overflowX: "hidden",
    }}>
      {/* Ambient glow */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: `radial-gradient(ellipse at 50% 0%, ${day.color}15 0%, transparent 60%)`,
        pointerEvents: "none", transition: "background 0.6s ease", zIndex: 0,
      }} />

      {/* Header */}
      <div style={{
        position: "relative", zIndex: 1,
        padding: "32px 20px 0",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#888", textTransform: "uppercase", marginBottom: "8px" }}>
          New York City · Juni 2026
        </div>
        <div style={{ fontSize: "32px", fontWeight: "normal", letterSpacing: "-0.5px", marginBottom: "4px" }}>
          NYC Itinerar
        </div>
        <div style={{ width: "40px", height: "1px", background: day.color, margin: "12px auto 0", transition: "background 0.4s" }} />
      </div>

      {/* Day selector */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", gap: "8px",
        padding: "24px 16px 0",
        overflowX: "auto",
        scrollbarWidth: "none",
      }}>
        {days.map((d, i) => (
          <button
            key={d.id}
            onClick={() => { setActiveDay(i); setExpandedStop(null); }}
            style={{
              flexShrink: 0,
              padding: "10px 14px",
              borderRadius: "12px",
              border: i === activeDay ? `1.5px solid ${d.color}` : "1.5px solid #2A2A2A",
              background: i === activeDay ? `${d.color}18` : "#131318",
              color: i === activeDay ? d.color : "#666",
              cursor: "pointer",
              textAlign: "center",
              transition: "all 0.25s",
              minWidth: "64px",
            }}
          >
            <div style={{ fontSize: "20px", marginBottom: "3px" }}>{d.emoji}</div>
            <div style={{ fontSize: "10px", fontFamily: "system-ui", letterSpacing: "0.5px" }}>Dan {d.id}</div>
            <div style={{ fontSize: "9px", color: i === activeDay ? d.color : "#444", fontFamily: "system-ui" }}>{d.date}</div>
          </button>
        ))}
      </div>

      {/* Day header card */}
      <div style={{ position: "relative", zIndex: 1, padding: "16px 16px 0" }}>
        <div style={{
          background: "#131318",
          border: `1px solid ${day.color}40`,
          borderRadius: "16px",
          padding: "20px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: "11px", color: day.color, letterSpacing: "2px", textTransform: "uppercase", fontFamily: "system-ui", marginBottom: "6px" }}>
                {day.date} · Dan {day.id}
              </div>
              <div style={{ fontSize: "22px", marginBottom: "6px" }}>{day.label}</div>
              <div style={{ fontSize: "12px", color: "#888", fontFamily: "system-ui", lineHeight: 1.5 }}>{day.subtitle}</div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "12px" }}>
              <div style={{
                fontSize: "11px", fontFamily: "system-ui",
                background: `${day.color}20`, color: day.color,
                padding: "4px 10px", borderRadius: "20px", marginBottom: "6px",
              }}>{day.km}</div>
              <div style={{ fontSize: "10px", color: "#555", fontFamily: "system-ui" }}>{day.duration}</div>
            </div>
          </div>
          <div style={{
            marginTop: "14px", padding: "10px 12px",
            background: "#0F0F14", borderRadius: "8px",
            fontSize: "11px", color: "#AAA", fontFamily: "system-ui", lineHeight: 1.5,
            borderLeft: `2px solid ${day.color}`,
          }}>
            💡 {day.tip}
          </div>
        </div>
      </div>

      {/* Stops */}
      <div style={{ position: "relative", zIndex: 1, padding: "16px 16px 40px" }}>
        {day.stops.map((stop, i) => {
          const tc = typeConfig[stop.type] || typeConfig.walk;
          const isExpanded = expandedStop === i;
          const isLast = i === day.stops.length - 1;

          return (
            <div key={i} style={{ display: "flex", gap: "12px", marginBottom: isLast ? 0 : "0" }}>
              {/* Timeline */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "32px", flexShrink: 0 }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "50%",
                  background: "#131318",
                  border: `1.5px solid ${stop.warning ? "#F59E0B" : tc.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "14px", flexShrink: 0,
                  zIndex: 1,
                }}>
                  {tc.icon}
                </div>
                {!isLast && (
                  <div style={{ width: "1px", flex: 1, background: "#1E1E28", minHeight: "20px" }} />
                )}
              </div>

              {/* Card */}
              <div style={{ flex: 1, paddingBottom: isLast ? 0 : "8px" }}>
                <button
                  onClick={() => setExpandedStop(isExpanded ? null : i)}
                  style={{
                    width: "100%", textAlign: "left",
                    background: isExpanded ? "#1A1A22" : "#131318",
                    border: isExpanded ? `1px solid ${day.color}50` : "1px solid #1E1E28",
                    borderRadius: "12px",
                    padding: "12px 14px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "10px", color: "#555", fontFamily: "system-ui", letterSpacing: "0.5px", marginBottom: "3px" }}>
                        {stop.time}
                      </div>
                      <div style={{ fontSize: "14px", color: "#F0EDE8", lineHeight: 1.3 }}>{stop.name}</div>
                      <div style={{ fontSize: "11px", color: "#555", fontFamily: "system-ui", marginTop: "2px" }}>{stop.address}</div>
                    </div>
                    <div style={{ fontSize: "10px", color: "#444", marginLeft: "8px" }}>
                      {isExpanded ? "▲" : "▼"}
                    </div>
                  </div>

                  {stop.warning && (
                    <div style={{
                      marginTop: "8px", padding: "5px 8px",
                      background: "#2A1F0A", borderRadius: "6px",
                      fontSize: "10px", color: "#F59E0B", fontFamily: "system-ui",
                      display: "flex", alignItems: "center", gap: "4px",
                    }}>
                      ⚠️ {stop.warningText || "Pogledaj napomenu"}
                    </div>
                  )}

                  {isExpanded && (
                    <div style={{
                      marginTop: "10px", paddingTop: "10px",
                      borderTop: "1px solid #1E1E28",
                      fontSize: "12px", color: "#AAA", fontFamily: "system-ui", lineHeight: 1.6,
                    }}>
                      {stop.note}
                    </div>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom nav hint */}
      <div style={{
        position: "relative", zIndex: 1,
        textAlign: "center", padding: "0 16px 32px",
        fontSize: "10px", color: "#333", fontFamily: "system-ui", letterSpacing: "1px",
      }}>
        Pripremljeno uz Claude · Anthropic
      </div>
    </div>
  );
}
