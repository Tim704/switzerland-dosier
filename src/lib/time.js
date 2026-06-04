// ────────────────────────────────────────────────────────────────────────────
// Timezone-precise countdown helpers.
//
// The protocol counts down to a FIXED instant — the Count's departure from
// Lausanne, Friday 19 June 2026 at 08:48 Zürich wall-clock time (CEST in summer).
// We resolve the correct UTC instant without a timezone library by reading the
// zone's offset via Intl and correcting for it — so the countdown is accurate
// regardless of where the viewer is physically located.
// ────────────────────────────────────────────────────────────────────────────

const ZONE = 'Europe/Zurich'

/**
 * Offset (in ms) between the given timezone's wall-clock and UTC at `date`.
 * Positive for zones ahead of UTC (Zürich is +1h / +2h).
 */
function zoneOffsetMs(date, timeZone = ZONE) {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
  const p = dtf.formatToParts(date).reduce((acc, part) => {
    acc[part.type] = part.value
    return acc
  }, {})
  let hour = parseInt(p.hour, 10)
  if (hour === 24) hour = 0 // some engines emit '24' for midnight
  const asUTC = Date.UTC(
    parseInt(p.year, 10),
    parseInt(p.month, 10) - 1,
    parseInt(p.day, 10),
    hour,
    parseInt(p.minute, 10),
    parseInt(p.second, 10),
  )
  return asUTC - date.getTime()
}

/**
 * Resolve the UTC `Date` for a fixed Zürich wall-clock datetime.
 * @param {{year:number, month:number, day:number, hour:number, minute:number}} dt
 */
export function getDepartureInstant({ year, month, day, hour, minute }) {
  // Treat the desired wall time as if UTC, then subtract the zone offset to get
  // the true instant. Refine once to settle any DST boundary.
  const guess = Date.UTC(year, month - 1, day, hour, minute, 0)
  let target = guess - zoneOffsetMs(new Date(guess))
  target = guess - zoneOffsetMs(new Date(target))
  return new Date(target)
}

/** Break a millisecond duration into padded day/hour/minute/second parts. */
export function breakdown(ms) {
  const clamped = Math.max(0, ms)
  const totalSeconds = Math.floor(clamped / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const pad = (n) => String(n).padStart(2, '0')
  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    expired: ms <= 0,
  }
}

/** Current wall-clock time string in Zürich, e.g. "14:07:32". */
export function formatZoneClock(date = new Date()) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: ZONE,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date)
}
