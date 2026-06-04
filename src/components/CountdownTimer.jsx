import { useEffect, useMemo, useState } from 'react'
import { breakdown, getDepartureInstant } from '../lib/time.js'
import { DEPARTURE } from '../data/protocol.js'

const WINDOW_DAYS = 21

function Cell({ value, label, last }) {
  return (
    <div className="relative flex flex-1 flex-col items-center px-1.5 py-1 sm:px-6">
      <span className="tnum font-display text-[2.85rem] font-medium leading-none text-champagne-700 sm:text-6xl md:text-7xl">
        {value}
      </span>
      <span className="mt-3.5 font-mono text-[9px] uppercase tracking-[0.28em] text-stone-500 sm:text-[10px]">
        {label}
      </span>
      {!last && (
        <span className="pointer-events-none absolute right-0 top-[38%] hidden h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-stone-300 to-transparent sm:block" />
      )}
    </div>
  )
}

export function CountdownTimer() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const target = useMemo(() => getDepartureInstant(DEPARTURE), [])
  const t = breakdown(target.getTime() - now.getTime())

  const start = target.getTime() - WINDOW_DAYS * 86400000
  const frac = Math.max(
    0,
    Math.min(1, (now.getTime() - start) / (target.getTime() - start)),
  )
  const pct = Math.round(frac * 100)

  return (
    <div className="relative overflow-hidden rounded-2xl border border-champagne-600/25 bg-gradient-to-b from-champagne-100/60 to-cream px-6 py-10 shadow-card sm:px-10 sm:py-12">
      <div className="hairline-top pointer-events-none absolute inset-x-0 top-0 h-px opacity-90" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-72 w-3/4 -translate-x-1/2 rounded-full bg-champagne-300/[0.20] blur-3xl" />
      <span className="tick left-3 top-3 border-l border-t" />
      <span className="tick bottom-3 right-3 border-b border-r" />

      <div className="relative flex flex-col items-center text-center">
        <div className="flex items-center gap-3 font-sans text-[10px] uppercase tracking-luxe text-champagne-700">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-champagne-600 shadow-glow-sm" />
          {t.expired ? 'Expedition Underway' : DEPARTURE.label}
        </div>

        <div className="mt-8 flex w-full max-w-2xl items-stretch justify-center">
          <Cell value={t.days} label="Days" />
          <Cell value={t.hours} label="Hours" />
          <Cell value={t.minutes} label="Minutes" />
          <Cell value={t.seconds} label="Seconds" last />
        </div>

        {/* Lead-time progress */}
        <div className="mt-10 w-full max-w-xl">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-stone-500">
            <span>Lead Time · T‑{WINDOW_DAYS}d</span>
            <span className="text-champagne-700">{pct}%</span>
          </div>
          <div className="relative mt-2.5 h-1 w-full rounded-full bg-stone-200/90">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-champagne-500 to-champagne-700 transition-[width] duration-1000 ease-lux"
              style={{ width: `${frac * 100}%` }}
            >
              <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-champagne-600 shadow-glow-sm ring-2 ring-cream" />
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-500">
          <span>{DEPARTURE.caption}</span>
          <span className="h-1 w-1 rounded-full bg-champagne-600/50" />
          <span
            className="text-champagne-700"
            aria-label="Departure Friday 19 June, 08:48 Central European Summer Time"
          >
            {DEPARTURE.whenLabel}
          </span>
          <span className="h-1 w-1 rounded-full bg-champagne-600/50" />
          <span>Kandersteg · 11:13</span>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
