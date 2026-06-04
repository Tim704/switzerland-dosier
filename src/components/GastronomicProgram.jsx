import { Panel } from './ui/Panel.jsx'
import { SectionHeader } from './ui/SectionHeader.jsx'
import { CheckIcon, ForkIcon } from './icons.jsx'
import { GASTRONOMY } from '../data/protocol.js'

function StatusTag({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-champagne-600/30 bg-champagne-100/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-champagne-700 transition-colors duration-500 group-hover/row:border-champagne-600/50">
      <CheckIcon className="h-2.5 w-2.5" />
      {status}
    </span>
  )
}

export function GastronomicProgram() {
  return (
    <Panel className="p-7 md:p-9" delay={360}>
      <SectionHeader
        index="04"
        eyebrow="Provisions"
        title="The Curated Gastronomic Program"
        meta="Heritage Fuelling Manifest"
      />

      <p className="mt-5 max-w-2xl font-serif text-lg italic leading-relaxed text-stone-600">
        A heritage Swiss fuelling sequence assembled for the weekend — alpine
        provenance and slow craft to load up before the climbs and recover after
        them, from cellar to chalet table.
      </p>

      {/* Column legend */}
      <div className="mt-8 hidden grid-cols-12 gap-4 border-b border-stone-200 px-4 pb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-stone-500 md:grid">
        <div className="col-span-1">Course</div>
        <div className="col-span-4">Provision</div>
        <div className="col-span-3">Provenance</div>
        <div className="col-span-4">Tasting Profile</div>
      </div>

      <ul className="divide-y divide-stone-200">
        {GASTRONOMY.map((item) => (
          <li
            key={item.id}
            className="group/row grid grid-cols-1 gap-3 rounded-xl px-4 py-5 transition-all duration-500 hover:bg-stone-100/60 md:grid-cols-12 md:items-center md:gap-4"
          >
            {/* Course numeral */}
            <div className="col-span-1 flex items-center gap-3 md:block">
              <span className="font-sans text-2xl font-light text-champagne-700 transition-colors duration-500 group-hover/row:text-champagne-700">
                {item.course}
              </span>
            </div>

            {/* Name */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2.5">
                <ForkIcon className="hidden h-4 w-4 shrink-0 text-champagne-600 transition-colors duration-500 group-hover/row:text-champagne-700 md:block" />
                <span className="font-serif text-xl font-medium text-stone-800">
                  {item.name}
                </span>
              </div>
            </div>

            {/* Provenance */}
            <div className="md:col-span-3">
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-stone-500">
                {item.provenance}
              </span>
            </div>

            {/* Tasting notes + status */}
            <div className="flex flex-col gap-3 md:col-span-4 md:flex-row md:items-center md:justify-between md:gap-4">
              <p className="font-sans text-[13px] leading-relaxed text-stone-500">
                {item.notes}
              </p>
              <div className="shrink-0">
                <StatusTag status={item.status} />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex items-center gap-3 border-t border-stone-200 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
        <ForkIcon className="h-3.5 w-3.5 text-champagne-600" />
        Five movements · Provisioned by the resident concierge · Served at altitude
        &amp; chalet-side
      </div>
    </Panel>
  )
}

export default GastronomicProgram
