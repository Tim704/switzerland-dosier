// Shared luxury panel/card primitive. The entrance animation lives on the outer
// wrapper (so it never fights the inner card's hover-lift transform), and the
// card itself carries layered paper elevation, a champagne top hairline, precise
// registration ticks, and a subtle hover lift.

export function Panel({ children, className = '', delay = 0, ...rest }) {
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="h-full animate-fade-up"
    >
      <section
        className={
          'group relative h-full overflow-hidden rounded-2xl border border-stone-200/80 ' +
          'bg-cream shadow-card transition-[transform,box-shadow,border-color] duration-500 ease-lux ' +
          'hover:-translate-y-1 hover:border-champagne-500/45 hover:shadow-card-hover ' +
          className
        }
        {...rest}
      >
        {/* Champagne hairline along the top edge. */}
        <div className="hairline-top pointer-events-none absolute inset-x-0 top-0 h-px opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
        {/* Whisper of warm light that blooms on hover. */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-champagne-300/[0.10] blur-3xl transition-opacity duration-700 group-hover:bg-champagne-300/[0.18]" />
        {/* Registration ticks. */}
        <span className="tick left-3 top-3 border-l border-t group-hover:opacity-90" />
        <span className="tick bottom-3 right-3 border-b border-r group-hover:opacity-90" />
        {children}
      </section>
    </div>
  )
}

export default Panel
