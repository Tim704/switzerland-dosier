import { PROTOCOL } from '../data/protocol.js'

export function Footer() {
  return (
    <footer className="mt-4">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-stone-300/70 to-transparent" />

      {/* Classification strip */}
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 pt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
        <span>Confidential Dossier</span>
        <span className="h-3 w-px bg-stone-300" />
        <span className="text-stone-700">{PROTOCOL.dossierRef}</span>
        <span className="h-3 w-px bg-stone-300" />
        <span>Sheet 01 / 01</span>
        <span className="h-3 w-px bg-stone-300" />
        <span>{PROTOCOL.lat} · {PROTOCOL.lon}</span>
      </div>

      <div className="mt-5 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
          Bespoke Hospitality Systems
        </div>
        <div className="font-serif text-base italic text-stone-500">
          “Prepared for {PROTOCOL.guestShort} — discretion, precision, and the
          unhurried.”
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
          {PROTOCOL.timezoneLabel}
        </div>
      </div>
    </footer>
  )
}

export default Footer
