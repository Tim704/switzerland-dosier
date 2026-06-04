import {
  Area,
  AreaChart,
  Label,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

// Subtle tooltip — surfaces the altitude (and quiet distance) on hover.
function ChartTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null
  const point = payload[0].payload
  return (
    <div className="rounded-lg border border-champagne-600/30 bg-cream/95 px-4 py-2.5 shadow-glow backdrop-blur-md">
      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500">
        Altitude
      </div>
      <div className="tnum font-display text-2xl leading-tight text-champagne-700">
        {point.alt.toLocaleString('en-US')} m
      </div>
      <div className="tnum mt-0.5 font-mono text-[10px] tracking-wide text-stone-500">
        KM {point.km.toString().padStart(2, '0')}
      </div>
    </div>
  )
}

/**
 * A smooth champagne/gold elevation wave with hidden axes, marker droplines,
 * a hover tooltip and labelled signature waypoints.
 */
export function ElevationChart({ profile, domain, markers = [], gradientId }) {
  const xMax = profile[profile.length - 1].km
  const fillId = `fill-${gradientId}`
  const strokeId = `stroke-${gradientId}`

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={profile} margin={{ top: 42, right: 16, bottom: 6, left: 16 }}>
        <defs>
          <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C9A968" stopOpacity={0.58} />
            <stop offset="45%" stopColor="#D2B26F" stopOpacity={0.28} />
            <stop offset="100%" stopColor="#D8BF85" stopOpacity={0.02} />
          </linearGradient>
          <linearGradient id={strokeId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8C7039" />
            <stop offset="50%" stopColor="#B89150" />
            <stop offset="100%" stopColor="#8C7039" />
          </linearGradient>
        </defs>

        {/* Axes kept for correct scaling but fully hidden. */}
        <XAxis dataKey="km" type="number" domain={[0, xMax]} hide />
        <YAxis type="number" domain={domain} hide />

        {/* Faint droplines anchoring each waypoint. */}
        {markers.map((m) => (
          <ReferenceLine
            key={`rl-${m.km}`}
            x={m.km}
            stroke="rgba(140,112,57,0.28)"
            strokeDasharray="2 5"
          />
        ))}

        <Tooltip
          content={<ChartTooltip />}
          cursor={{
            stroke: 'rgba(140,112,57,0.45)',
            strokeWidth: 1,
            strokeDasharray: '4 4',
          }}
        />

        <Area
          type="monotone"
          dataKey="alt"
          stroke={`url(#${strokeId})`}
          strokeWidth={2.75}
          fill={`url(#${fillId})`}
          dot={false}
          activeDot={{ r: 4.5, fill: '#B08F4E', stroke: '#FCFAF5', strokeWidth: 2 }}
          isAnimationActive
          animationDuration={1500}
          animationEasing="ease-out"
        />

        {markers.map((m) => {
          const ratio = m.km / xMax
          const interior = ratio > 0.12 && ratio < 0.88
          return (
            <ReferenceDot
              key={`${gradientId}-${m.km}`}
              x={m.km}
              y={m.alt}
              r={5}
              fill="#B08F4E"
              stroke="#FCFAF5"
              strokeWidth={2.5}
              isFront
            >
              {interior ? (
                <Label
                  value={m.label}
                  position="top"
                  offset={16}
                  fill="#8C7039"
                  fontSize={10.5}
                  fontFamily="'IBM Plex Mono', monospace"
                  letterSpacing="0.12em"
                  style={{ textTransform: 'uppercase' }}
                />
              ) : null}
            </ReferenceDot>
          )
        })}
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default ElevationChart
