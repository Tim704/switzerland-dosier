// ────────────────────────────────────────────────────────────────────────────
// Bespoke Guest Experience Protocol — single source of truth for all content.
// Tailored for Count Alexei von Bismarck · Kandersteg alpine expedition.
// Dates: Friday 19 – Sunday 21 June 2026.
// ────────────────────────────────────────────────────────────────────────────

export const PROTOCOL = {
  guest: 'Count Alexei von Bismarck',
  guestShort: 'Count von Bismarck',
  monogram: 'AvB',
  dossierRef: 'AVB · 2026 · 06',
  destination: 'Kandersteg',
  region: 'Bernese Oberland · Switzerland',
  classification: 'Confidential — Prepared exclusively for Count Alexei von Bismarck',
  window: '19 – 21 June 2026',
  timezoneLabel: 'CEST · Europe/Zürich',
  lat: '46.4956° N',
  lon: '7.6726° E',
  elevation: '1,176 m ASL',
}

// ── Module 01 · The Transit Protocol ────────────────────────────────────────
// Inbound (Friday) and outbound (Sunday) rail logistics for a single principal.

export const INBOUND = {
  id: 'count-inbound',
  guest: 'Count von Bismarck',
  origin: 'Lausanne',
  originDetail: 'Lac Léman · Inbound Vector',
  depart: '08:48',
  arrive: '11:13',
  day: 'Friday',
  date: '19 June',
}

export const ARRIVAL = {
  station: 'Kandersteg Station',
  detail: 'Reception, transfer to chalet — Insertion begins',
  time: '11:13',
}

export const OUTBOUND = {
  id: 'extraction',
  label: 'Extraction',
  origin: 'Kandersteg Station',
  originDetail: 'On the trains home · Sunday',
  depart: '13:00',
  day: 'Sunday',
  date: '21 June',
}

// Inbound journey vitals (Lausanne → Kandersteg via the Lötschberg line).
export const TRANSIT_VITALS = [
  { label: 'Transit', value: '2h 25m' },
  { label: 'Changes', value: 'Bern · Spiez' },
  { label: 'Class', value: 'First' },
  { label: 'Operator', value: 'SBB · BLS' },
]

export const TRANSIT_NOTE =
  'Private chalet transfer reserved on arrival — luggage portage and reception included.'

// The countdown targets the Count's departure from Lausanne (fixed instant,
// resolved in Europe/Zürich wall-clock time so it is DST-correct).
export const DEPARTURE = {
  year: 2026,
  month: 6,
  day: 19,
  hour: 8,
  minute: 48,
  label: 'Time Until Departure',
  caption: 'Count von Bismarck · Lausanne',
  whenLabel: 'Fri 19 Jun · 08:48 CEST',
}

// ── Module 02 · Live Atmospheric Telemetry ──────────────────────────────────

export const TELEMETRY = {
  temperature: '14°C',
  status: 'Conditions Optimal for Exertion and Recovery',
  forecastLabel: 'Forecast Window · 19–21 Jun',
  metrics: [
    { id: 'visibility', label: 'Visibility', value: 'Exceptional', icon: 'eye' },
    { id: 'wind', label: 'Wind', value: '5 km/h', icon: 'wind' },
    { id: 'air', label: 'Air Quality', value: 'Pristine', icon: 'sparkle' },
  ],
  ambient: [
    { id: 'barometric', label: 'Barometric', value: '1013 hPa' },
    { id: 'snowline', label: 'Snowline', value: '2,400 m' },
  ],
}

// ── Module 03 · The Expedition Itinerary (carousel) ─────────────────────────
// Three days, each with its own elevation profile, waypoint markers and a
// Y-axis domain tuned to the day's terrain.

export const ITINERARY = [
  {
    id: 'friday',
    day: 'Friday',
    date: '19 June',
    phase: 'Insertion',
    title: 'Insertion · Blausee Recovery',
    summary:
      'Drop gear at the chalet, then a flat 8 km active-recovery hike to Blausee — a crystal-clear, spring-fed lake. A high-protein Swiss dinner to load up for the days ahead.',
    stats: [
      { label: 'Distance', value: '8 km' },
      { label: 'Vertical', value: '+290 m' },
      { label: 'Effort', value: 'Active Recovery' },
      { label: 'Signature', value: 'Blausee' },
    ],
    domain: [840, 1240],
    profile: [
      { km: 0, alt: 1176 },
      { km: 1, alt: 1120 },
      { km: 2, alt: 1040 },
      { km: 3, alt: 955 },
      { km: 4, alt: 887 },
      { km: 5, alt: 955 },
      { km: 6, alt: 1040 },
      { km: 7, alt: 1120 },
      { km: 8, alt: 1176 },
    ],
    markers: [{ km: 4, alt: 887, label: 'Blausee · 887 m' }],
  },
  {
    id: 'saturday',
    day: 'Saturday',
    date: '20 June',
    phase: 'Primary Load',
    title: 'Primary Mechanical Load · Oeschinen & Heuberg',
    summary:
      'The primary mechanical load — a 14 km loop with 850 m of vertical gain. Bypass the gondola, push straight up to Oeschinen Lake (the brightest blue glacial lake in the country), then run the Heuberg ridge trail for sheer-drop cliff views.',
    stats: [
      { label: 'Distance', value: '14 km' },
      { label: 'Vertical', value: '+850 m' },
      { label: 'Effort', value: 'Maximal' },
      { label: 'Summit', value: '2,020 m' },
    ],
    domain: [1100, 2120],
    profile: [
      { km: 0, alt: 1176 },
      { km: 2, alt: 1400 },
      { km: 4, alt: 1578 },
      { km: 6, alt: 1820 },
      { km: 8, alt: 2020 },
      { km: 10, alt: 1850 },
      { km: 12, alt: 1450 },
      { km: 14, alt: 1176 },
    ],
    markers: [
      { km: 4, alt: 1578, label: 'Oeschinen Lake · 1,578 m' },
      { km: 8, alt: 2020, label: 'Heuberg Ridge — Peak Viewing Plateau' },
    ],
  },
  {
    id: 'sunday',
    day: 'Sunday',
    date: '21 June',
    phase: 'Final Stimulus',
    title: 'Final Stimulus · Gemmi Pass',
    summary:
      'The final stimulus. Cable car up to Sunnbüel, then an 8 km hike through lunar-style rock terrain on the Gemmi Pass. Extract and on the trains home by 13:00.',
    stats: [
      { label: 'Distance', value: '8 km' },
      { label: 'Vertical', value: '+390 m' },
      { label: 'Effort', value: 'Sustained' },
      { label: 'Terrain', value: 'Lunar Rock' },
    ],
    domain: [1860, 2400],
    profile: [
      { km: 0, alt: 1936 },
      { km: 1, alt: 2080 },
      { km: 2, alt: 2205 },
      { km: 3, alt: 2300 },
      { km: 4, alt: 2322 },
      { km: 5, alt: 2280 },
      { km: 6, alt: 2180 },
      { km: 7, alt: 2050 },
      { km: 8, alt: 1936 },
    ],
    markers: [
      { km: 0, alt: 1936, label: 'Sunnbüel · 1,936 m' },
      { km: 4, alt: 2322, label: 'Gemmi Pass · Lunar Plateau' },
    ],
  },
]

// ── Module 04 · The Curated Provisioning Program ────────────────────────────
// A heritage Swiss fuelling manifest — provenance, craft and indulgence.

export const GASTRONOMY = [
  {
    id: 'buendnerfleisch',
    course: 'I',
    name: 'Artisanal Bündnerfleisch',
    provenance: 'Local Village Butcher',
    notes: 'Air-dried, cellar-aged alpine beef — shaved paper-thin, sourced directly from the Kandersteg village butcher.',
    status: 'Secured',
  },
  {
    id: 'gruyere',
    course: 'II',
    name: 'Aged Cave Gruyère',
    provenance: 'Mountain Cave Affinage',
    notes: 'Dense, crystalline texture with a deep nutty finish — provisioned for trailside fuelling at altitude.',
    status: 'Provisioned',
  },
  {
    id: 'kalbsgeschnetzeltes',
    course: 'III',
    name: 'Traditional Kalbsgeschnetzeltes',
    provenance: 'Chalet Kitchen · À la minute',
    notes: 'Pan-seared veal smothered in a rich, heavy cream and white wine reduction — the Friday loading table, Zürich heritage at altitude.',
    status: 'Scheduled',
  },
  {
    id: 'roesti',
    course: 'IV',
    name: 'Golden Butter Rösti',
    provenance: 'Chalet Kitchen · À la minute',
    notes: 'The ultimate Swiss comfort starch — pan-fried, crispy shredded potatoes, the perfect sponge for the cream sauce and the next morning’s climb.',
    status: 'Scheduled',
  },
  {
    id: 'meltwater',
    course: 'V',
    name: 'Glacial Meltwater',
    provenance: 'Kandersteg Source Tap',
    notes: 'Untreated, hyper-pure glacial meltwater drawn straight from the village taps — served crisp and ice-cold.',
    status: 'On Tap',
  },
]
