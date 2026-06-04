import { useCallback, useState } from 'react'
import { Panel } from './ui/Panel.jsx'
import { SectionHeader } from './ui/SectionHeader.jsx'
import { ElevationChart } from './ElevationChart.jsx'
import { ChevronLeftIcon, ChevronRightIcon, RouteIcon } from './icons.jsx'
import { ITINERARY } from '../data/protocol.js'

function Stat({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500">
        {label}
      </span>
      <span className="mt-1 font-sans text-lg font-medium text-stone-800">
        {value}
      </span>
    </div>
  )
}

function NavButton({ onClick, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-cream text-stone-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-champagne-600/40 hover:text-champagne-700 hover:shadow-glow-sm active:translate-y-0"
    >
      {children}
    </button>
  )
}

export function ItineraryCarousel() {
  const [active, setActive] = useState(0)
  const count = ITINERARY.length

  const go = useCallback(
    (next) => setActive((i) => (next + count) % count),
    [count],
  )

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(active + 1)
    if (e.key === 'ArrowLeft') go(active - 1)
  }

  const day = ITINERARY[active]

  return (
    <Panel className="p-7 md:p-9" delay={280}>
      <SectionHeader
        index="03"
        eyebrow="Itinerary"
        title="The Expedition Itinerary"
        meta="19 – 21 June · Three Phases"
      />

      {/* Control bar — day tabs + prev/next */}
      <div
        className="mt-7 flex items-center justify-between gap-4"
        role="tablist"
        aria-label="Expedition days"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className="flex flex-wrap gap-2">
          {ITINERARY.map((d, i) => {
            const on = i === active
            return (
              <button
                key={d.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                className={
                  'flex items-baseline gap-2 rounded-full border px-4 py-1.5 transition-all duration-300 ' +
                  (on
                    ? 'border-champagne-600/60 bg-champagne-100/90 text-stone-800 shadow-glow-sm'
                    : 'border-stone-200 bg-cream text-stone-500 hover:border-champagne-600/30 hover:text-stone-700')
                }
              >
                <span className="font-sans text-[12px] font-medium uppercase tracking-[0.18em]">
                  {d.day}
                </span>
                <span className="tnum font-sans text-[10px] text-stone-500">
                  {d.date}
                </span>
              </button>
            )
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <NavButton onClick={() => go(active - 1)} label="Previous day">
            <ChevronLeftIcon className="h-4 w-4" />
          </NavButton>
          <NavButton onClick={() => go(active + 1)} label="Next day">
            <ChevronRightIcon className="h-4 w-4" />
          </NavButton>
        </div>
      </div>

      {/* Active day — re-keyed so each change re-triggers the slide animation */}
      <div
        key={day.id}
        className="mt-7 grid animate-slide-in grid-cols-1 gap-8 lg:grid-cols-12"
      >
        {/* Narrative + stats */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-champagne-700">
            <RouteIcon className="h-4 w-4" />
            Phase {active + 1} · {day.phase}
          </div>
          <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-stone-800 md:text-3xl">
            {day.title}
          </h3>
          <p className="mt-4 font-serif text-lg italic leading-relaxed text-stone-600">
            {day.summary}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-stone-200 pt-6 sm:grid-cols-4 lg:grid-cols-2">
            {day.stats.map((s) => (
              <Stat key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </div>

        {/* Elevation profile */}
        <div className="lg:col-span-7">
          <div className="h-[300px] w-full md:h-[348px]">
            <ElevationChart
              profile={day.profile}
              domain={day.domain}
              markers={day.markers}
              gradientId={day.id}
            />
          </div>

          {/* Waypoint legend */}
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-stone-200 pt-3">
            {day.markers.map((m) => (
              <span
                key={m.km}
                className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-500"
              >
                <span className="h-1.5 w-1.5 rotate-45 bg-champagne-600" />
                {m.label}
              </span>
            ))}
            <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-champagne-700/90">
              Tap or hover the ridge
            </span>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="mt-8 flex items-center justify-center gap-2.5">
        {ITINERARY.map((d, i) => (
          <button
            key={d.id}
            type="button"
            aria-label={`Go to ${d.day}`}
            onClick={() => setActive(i)}
            className={
              'h-1.5 rounded-full transition-all duration-400 ' +
              (i === active
                ? 'w-8 bg-champagne-600'
                : 'w-1.5 bg-stone-300 hover:bg-champagne-500/60')
            }
          />
        ))}
      </div>
    </Panel>
  )
}

export default ItineraryCarousel
