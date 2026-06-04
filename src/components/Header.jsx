import { useEffect, useState } from 'react'
import { PeakIcon } from './icons.jsx'
import { PROTOCOL } from '../data/protocol.js'
import { formatZoneClock } from '../lib/time.js'

export function Header() {
  const [clock, setClock] = useState(() => formatZoneClock())

  useEffect(() => {
    const id = setInterval(() => setClock(formatZoneClock()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="animate-fade-up">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {/* Crest + wordmark */}
        <div className="flex items-start gap-5">
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-champagne-600/30 bg-gradient-to-b from-champagne-200/50 to-cream text-champagne-700 shadow-glow-sm">
            <span className="absolute inset-[5px] rounded-xl border border-champagne-600/15" />
            <PeakIcon className="relative h-7 w-7" strokeWidth={1.4} />
          </div>
          <div>
            <div className="flex items-center gap-2.5 font-sans text-[10px] uppercase tracking-luxe text-champagne-700">
              <span>{PROTOCOL.destination}</span>
              <span className="h-1 w-1 rounded-full bg-champagne-600/60" />
              <span className="text-stone-500">{PROTOCOL.region}</span>
            </div>
            <div className="mt-2 font-mono text-[10px] tracking-[0.14em] text-stone-500">
              {PROTOCOL.lat} · {PROTOCOL.lon} · {PROTOCOL.elevation}
            </div>
            <h1 className="mt-3 font-display text-[2.6rem] font-medium leading-[1.02] tracking-tightish text-stone-800 sm:text-[3.25rem]">
              Count Alexei&rsquo;s
              <br className="hidden sm:block" />{' '}
              <span className="text-shimmer">Alpine Protocol</span>
            </h1>
            <p className="mt-3 max-w-md font-serif text-lg italic text-stone-500">
              A bespoke experience prepared for{' '}
              <span className="text-stone-700">{PROTOCOL.guest}</span>
            </p>
          </div>
        </div>

        {/* Status rail */}
        <div className="flex flex-col items-start gap-3 lg:items-end">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-600/25 bg-emerald-50 px-3.5 py-1.5 font-sans text-[10px] uppercase tracking-luxe text-emerald-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Protocol Active
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-500 lg:justify-end">
            <span>
              Dossier <span className="text-stone-700">{PROTOCOL.dossierRef}</span>
            </span>
            <span className="h-3 w-px bg-stone-300" />
            <span>{PROTOCOL.window}</span>
            <span className="h-3 w-px bg-stone-300" />
            <span
              className="text-champagne-700"
              aria-label={`Kandersteg local time ${clock} Central European Summer Time`}
            >
              {clock} CEST
            </span>
          </div>
        </div>
      </div>

      {/* Full-width divider */}
      <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-stone-300/70 to-transparent" />
    </header>
  )
}

export default Header
