// Minimal, uniform stroke icons rendered inline (no icon-font dependency).
// Each inherits `currentColor` and accepts a className for sizing/tint.

function Svg({ children, className = 'h-4 w-4', strokeWidth = 1.5 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export const PeakIcon = (p) => (
  <Svg {...p}>
    <path d="M3 20 L9.5 7 L14 14.5 L16.5 10 L21 20 Z" />
    <path d="M8 11.5 L11 11.5" />
  </Svg>
)

export const TrainIcon = (p) => (
  <Svg {...p}>
    <rect x="6" y="4" width="12" height="13" rx="3" />
    <path d="M6 11 H18" />
    <path d="M9.5 14 H9.51 M14.5 14 H14.51" />
    <path d="M8 17 L6 20 M16 17 L18 20" />
  </Svg>
)

export const ArrowIcon = (p) => (
  <Svg {...p}>
    <path d="M5 12 H19" />
    <path d="M13 6 L19 12 L13 18" />
  </Svg>
)

export const ArrowDownIcon = (p) => (
  <Svg {...p}>
    <path d="M12 5 V19" />
    <path d="M6 13 L12 19 L18 13" />
  </Svg>
)

export const ChevronLeftIcon = (p) => (
  <Svg {...p}>
    <path d="M15 6 L9 12 L15 18" />
  </Svg>
)

export const ChevronRightIcon = (p) => (
  <Svg {...p}>
    <path d="M9 6 L15 12 L9 18" />
  </Svg>
)

export const ThermometerIcon = (p) => (
  <Svg {...p}>
    <path d="M10 13.5 V5 a2 2 0 0 1 4 0 v8.5 a3.5 3.5 0 1 1 -4 0 Z" />
    <path d="M12 9 V15.5" />
  </Svg>
)

export const EyeIcon = (p) => (
  <Svg {...p}>
    <path d="M2 12 S5.5 5.5 12 5.5 22 12 22 12 18.5 18.5 12 18.5 2 12 2 12 Z" />
    <circle cx="12" cy="12" r="2.6" />
  </Svg>
)

export const WindIcon = (p) => (
  <Svg {...p}>
    <path d="M3 8 H13.5 a2.5 2.5 0 1 0 -2.5 -2.5" />
    <path d="M3 12 H18 a2.5 2.5 0 1 1 -2.5 2.5" />
    <path d="M3 16 H10.5 a2 2 0 1 1 -2 2" />
  </Svg>
)

export const SparkleIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3 L13.6 9.2 L20 11 L13.6 12.8 L12 19 L10.4 12.8 L4 11 L10.4 9.2 Z" />
  </Svg>
)

export const DropletIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3 C12 3 5.5 10 5.5 14.5 a6.5 6.5 0 0 0 13 0 C18.5 10 12 3 12 3 Z" />
  </Svg>
)

export const ForkIcon = (p) => (
  <Svg {...p}>
    <path d="M7 3 V9 a2 2 0 0 0 4 0 V3" />
    <path d="M9 9 V21" />
    <path d="M16 3 c-1.8 0 -2.8 2 -2.8 4.5 0 2 1 3 2.8 3.2 V21" />
  </Svg>
)

export const CheckIcon = (p) => (
  <Svg {...p}>
    <path d="M4 12.5 L9.5 18 L20 6" />
  </Svg>
)

export const RouteIcon = (p) => (
  <Svg {...p}>
    <circle cx="6" cy="19" r="2" />
    <circle cx="18" cy="5" r="2" />
    <path d="M8 19 H13 a3 3 0 0 0 3 -3 V7" />
  </Svg>
)

export const ClockIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7 V12 L15.5 14" />
  </Svg>
)

export const ICONS = {
  eye: EyeIcon,
  wind: WindIcon,
  sparkle: SparkleIcon,
  droplet: DropletIcon,
  thermometer: ThermometerIcon,
  peak: PeakIcon,
  train: TrainIcon,
  fork: ForkIcon,
  route: RouteIcon,
  clock: ClockIcon,
}
