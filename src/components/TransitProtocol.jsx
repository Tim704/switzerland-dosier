import { Panel } from './ui/Panel.jsx'
import { SectionHeader } from './ui/SectionHeader.jsx'
import { ArrowIcon, TrainIcon } from './icons.jsx'
import {
  ARRIVAL,
  INBOUND,
  OUTBOUND,
  TRANSIT_NOTE,
  TRANSIT_VITALS,
} from '../data/protocol.js'

// A single transit leg rendered as a timeline node with depart → arrive times.
function Leg({ tag, origin, originDetail, depart, arrive, arriveLabel = 'Arrive', accent = 'champagne' }) {
  const dotTone =
    accent === 'extraction'
      ? 'bg-platinum-300 shadow-[0_0_14px_-2px_rgba(154,162,171,0.6)]'
      : 'bg-champagne-600 shadow-glow-sm'

  return (
    <div className="group/leg relative pl-10">
      {/* Node on the spine */}
      <span className="absolute left-[11px] top-1.5 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center">
        <span className={`h-2.5 w-2.5 rounded-full ${dotTone}`} />
        <span className="absolute inset-0 rounded-full ring-1 ring-stone-300 transition-all duration-500 group-hover/leg:ring-champagne-500/60" />
      </span>

      <div className="flex flex-col gap-4 rounded-xl border border-transparent px-4 py-3 transition-all duration-500 group-hover/leg:border-stone-200 group-hover/leg:bg-stone-50/70 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-luxe text-champagne-700">
            <TrainIcon className="h-3.5 w-3.5" />
            {tag}
          </div>
          <div className="mt-1.5 font-serif text-2xl font-medium text-stone-800">
            {origin}
          </div>
          <div className="mt-0.5 font-sans text-[11px] tracking-wide text-stone-500">
            {originDetail}
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-5">
          <div className="text-right sm:text-left">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-500">
              Depart
            </div>
            <div className="tnum font-display text-2xl text-stone-700">
              {depart}
            </div>
          </div>
          <ArrowIcon className="h-4 w-4 shrink-0 text-champagne-700" />
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-500">
              {arriveLabel}
            </div>
            <div className="tnum font-display text-2xl text-champagne-700">
              {arrive}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TransitProtocol() {
  return (
    <Panel className="flex h-full flex-col p-7 md:p-9" delay={120}>
      <SectionHeader
        index="01"
        eyebrow="Transit"
        title="The Transit Protocol"
        meta="Rail · Single Principal"
      />

      {/* Inbound — Friday */}
      <div className="mt-9">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-sans text-[10px] uppercase tracking-luxe text-stone-500">
            Inbound
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-stone-300 to-transparent" />
          <span className="font-serif text-sm italic text-champagne-700">
            {INBOUND.day} · {INBOUND.date}
          </span>
        </div>

        <div className="relative">
          {/* Vertical spine */}
          <span className="absolute left-[11px] top-1 bottom-1 w-px bg-gradient-to-b from-champagne-500/50 via-stone-300 to-champagne-500/40" />
          <Leg
            tag={INBOUND.guest}
            origin={INBOUND.origin}
            originDetail={INBOUND.originDetail}
            depart={INBOUND.depart}
            arrive={INBOUND.arrive}
          />
        </div>

        {/* Arrival callout */}
        <div className="mt-6 ml-10 flex items-center gap-4 rounded-xl border border-champagne-600/30 bg-champagne-100/70 px-5 py-4 transition-all duration-500 hover:border-champagne-600/45 hover:bg-champagne-100/80">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne-500/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-champagne-600" />
          </span>
          <div className="flex-1">
            <div className="font-serif text-lg text-stone-800">
              {ARRIVAL.station}
            </div>
            <div className="font-sans text-[11px] tracking-wide text-stone-500">
              {ARRIVAL.detail}
            </div>
          </div>
          <div className="tnum font-display text-lg text-champagne-700">
            {ARRIVAL.time}
          </div>
        </div>
      </div>

      {/* Outbound — Sunday */}
      <div className="mt-9">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-sans text-[10px] uppercase tracking-luxe text-stone-500">
            Outbound
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-stone-300 to-transparent" />
          <span className="font-serif text-sm italic text-champagne-700">
            {OUTBOUND.day} · {OUTBOUND.date}
          </span>
        </div>

        <div className="relative">
          <span className="absolute left-[11px] top-1 h-6 w-px bg-gradient-to-b from-platinum-300/70 to-transparent" />
          <Leg
            tag={`${OUTBOUND.label} · Count von Bismarck`}
            origin={OUTBOUND.origin}
            originDetail={OUTBOUND.originDetail}
            depart={OUTBOUND.depart}
            arrive="Home"
            arriveLabel="Onward"
            accent="extraction"
          />
        </div>
      </div>

      {/* Journey vitals — anchored to the foot of the card */}
      <div className="mt-auto pt-9">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-sans text-[10px] uppercase tracking-luxe text-stone-500">
            Journey Vitals
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-stone-300 to-transparent" />
          <span className="font-serif text-sm italic text-champagne-700">
            Inbound · Lötschberg
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
          {TRANSIT_VITALS.map((v) => (
            <div key={v.label} className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-500">
                {v.label}
              </span>
              <span className="mt-1 font-sans text-base font-medium text-stone-800">
                {v.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50/60 px-4 py-3.5">
          <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-champagne-600" />
          <span className="font-serif text-sm italic leading-relaxed text-stone-600">
            {TRANSIT_NOTE}
          </span>
        </div>
      </div>
    </Panel>
  )
}

export default TransitProtocol
