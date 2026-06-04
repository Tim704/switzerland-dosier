import { useEffect, useState } from 'react'
import { Panel } from './ui/Panel.jsx'
import { SectionHeader } from './ui/SectionHeader.jsx'
import { ICONS, ThermometerIcon } from './icons.jsx'
import { TELEMETRY } from '../data/protocol.js'
import { formatZoneClock } from '../lib/time.js'

function Metric({ icon, label, value }) {
  const Icon = ICONS[icon] ?? ICONS.sparkle
  return (
    <div className="group/metric flex items-center gap-3 rounded-xl border border-stone-300/70 bg-stone-50/60 px-4 py-3.5 transition-all duration-500 hover:-translate-y-0.5 hover:border-champagne-500/50 hover:bg-cream hover:shadow-glow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-cream text-champagne-700 transition-colors duration-500 group-hover/metric:text-champagne-800">
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex min-w-0 flex-1 items-baseline justify-between gap-3">
        <div className="font-sans text-[9px] uppercase tracking-luxe text-stone-500">
          {label}
        </div>
        <div className="font-sans text-lg font-medium leading-tight text-stone-800">
          {value}
        </div>
      </div>
    </div>
  )
}

export function AtmosphericTelemetry() {
  const [clock, setClock] = useState(() => formatZoneClock())

  useEffect(() => {
    const id = setInterval(() => setClock(formatZoneClock()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <Panel className="flex h-full flex-col p-7 md:p-9" delay={200}>
      <SectionHeader
        index="02"
        eyebrow="Telemetry"
        title="Live Atmospheric Telemetry"
        meta="Kandersteg"
      />

      {/* Live sync row */}
      <div className="mt-6 flex items-center justify-between font-sans text-[10px] uppercase tracking-luxe text-stone-500">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {TELEMETRY.forecastLabel}
        </span>
        <span className="font-mono tnum text-stone-500">Synced {clock} CEST</span>
      </div>

      {/* Hero temperature */}
      <div className="mt-6 flex items-end justify-between gap-4 rounded-xl border border-champagne-600/20 bg-gradient-to-br from-champagne-100/70 to-cream px-5 py-5">
        <div>
          <div className="font-sans text-[10px] uppercase tracking-luxe text-stone-500">
            Ambient Temperature
          </div>
          <div className="mt-1 font-display text-6xl font-medium leading-none text-champagne-gradient">
            {TELEMETRY.temperature}
          </div>
        </div>
        <ThermometerIcon className="h-10 w-10 text-champagne-600" />
      </div>

      {/* Primary metric grid */}
      <div className="mt-4 grid grid-cols-1 gap-3">
        {TELEMETRY.metrics.map((m) => (
          <Metric key={m.id} icon={m.icon} label={m.label} value={m.value} />
        ))}
      </div>

      {/* Ambient secondary readings */}
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 px-1 font-sans text-[11px] tracking-wide text-stone-500">
        {TELEMETRY.ambient.map((a) => (
          <span key={a.id} className="flex items-center gap-2">
            <span className="uppercase tracking-luxe text-stone-500">
              {a.label}
            </span>
            <span className="font-mono tnum text-stone-700">{a.value}</span>
          </span>
        ))}
      </div>

      {/* Glowing status indicator */}
      <div className="mt-auto pt-6">
        <div className="group/status relative flex items-center gap-3 overflow-hidden rounded-xl border border-emerald-600/25 bg-emerald-50 px-5 py-4 transition-all duration-500 hover:border-emerald-600/45">
          <span className="absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-emerald-400/15 blur-2xl" />
          <span className="relative flex h-3 w-3 animate-ring-pulse rounded-full bg-emerald-500 shadow-[0_0_12px_2px_rgba(16,185,129,0.45)]" />
          <span className="relative font-serif text-base italic text-emerald-800">
            {TELEMETRY.status}
          </span>
        </div>
      </div>
    </Panel>
  )
}

export default AtmosphericTelemetry
