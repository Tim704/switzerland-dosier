import { getDepartureInstant, breakdown, formatZoneClock } from '../src/lib/time.js'
import { DEPARTURE } from '../src/data/protocol.js'

let failures = 0
const ok = (cond, msg) => {
  console.log(`${cond ? 'PASS' : 'FAIL'} · ${msg}`)
  if (!cond) failures++
}

// 1. The fixed departure resolves to Fri 19 Jun 2026, 08:48 Europe/Zürich (CEST).
const dep = getDepartureInstant(DEPARTURE)
ok(
  dep.toISOString() === '2026-06-19T06:48:00.000Z',
  `departure instant = 06:48Z (08:48 CEST) — got ${dep.toISOString()}`,
)
const fmt = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Zurich',
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
}).format(dep)
ok(/^Friday/.test(fmt), `lands on Friday — "${fmt}"`)
ok(/19 June/.test(fmt), `lands on 19 June — "${fmt}"`)
ok(/08:48/.test(fmt), `wall-clock is 08:48 CET — "${fmt}"`)

// 2. breakdown pads and clamps; expired flips at/below zero.
const b = breakdown(((2 * 24 + 3) * 60 + 9) * 60 * 1000 + 7000) // 2d 3h 9m 7s
ok(
  b.days === '02' && b.hours === '03' && b.minutes === '09' && b.seconds === '07',
  `breakdown pads — ${b.days}:${b.hours}:${b.minutes}:${b.seconds}`,
)
ok(breakdown(-5000).expired === true, 'past duration flagged expired')
ok(breakdown(5000).expired === false, 'future duration not expired')

// 3. Clock formats HH:MM:SS.
ok(/^\d{2}:\d{2}:\d{2}$/.test(formatZoneClock(new Date())), 'clock formats HH:MM:SS')

console.log(`\n${failures === 0 ? 'ALL TIME TESTS PASSED' : failures + ' TIME TEST(S) FAILED'}`)
process.exit(failures === 0 ? 0 : 1)
