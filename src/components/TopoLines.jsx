// Concentric topographic contour rings — the signature "surveyor's map" motif.
// A single organic closed path scaled into nested rings with a uniform,
// non-scaling stroke weight. Colour comes from the parent's `currentColor`.

const BASE =
  'M0,-118 C58,-126 122,-78 124,-8 C126,58 80,128 6,132 C-66,136 -130,82 -132,8 C-134,-62 -64,-110 0,-118 Z'

export function TopoLines({ className = '', rings = 10, strokeWidth = 0.9 }) {
  const steps = Array.from({ length: rings }, (_, i) => 0.14 + i * (0.86 / rings))
  return (
    <svg
      viewBox="-150 -150 300 300"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="currentColor" strokeWidth={strokeWidth}>
        {steps.map((s, i) => (
          <path
            key={i}
            d={BASE}
            transform={`scale(${s.toFixed(3)})`}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>
    </svg>
  )
}

export default TopoLines
