// Consistent module header: a monospace index + champagne eyebrow above a serif
// title, with an optional right-aligned meta slot.

export function SectionHeader({ index, eyebrow, title, meta }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div>
        <div className="flex items-center gap-3 text-[10px] font-medium uppercase text-champagne-700">
          <span className="font-mono tracking-[0.2em] text-champagne-600">
            {index}
          </span>
          <span className="h-px w-7 bg-champagne-600/40" />
          <span className="font-sans tracking-luxe">{eyebrow}</span>
        </div>
        <h2 className="mt-3 font-display text-[1.95rem] font-medium leading-[1.08] tracking-tightish text-stone-800 md:text-[2.35rem]">
          {title}
        </h2>
      </div>
      {meta ? (
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">
          {meta}
        </div>
      ) : null}
    </div>
  )
}

export default SectionHeader
