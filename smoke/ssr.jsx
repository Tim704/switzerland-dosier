import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App.jsx'

const html = renderToString(React.createElement(App))
const checks = [
  ['Alpine Protocol', 'header title'],
  ['Count Alexei von Bismarck', 'recipient personalization'],
  ['Time Until Departure', 'countdown label'],
  ['Transit Protocol', 'module 01'],
  ['Lausanne', 'inbound origin'],
  ['Live Atmospheric Telemetry', 'module 02'],
  ['Conditions Optimal for Exertion and Recovery', 'status indicator'],
  ['Expedition Itinerary', 'module 03'],
  ['Insertion', 'friday phase (active slide)'],
  ['Blausee', 'friday waypoint (active slide)'],
  ['Saturday', 'saturday tab'],
  ['Sunday', 'sunday tab'],
  ['Curated Gastronomic Program', 'module 04'],
  ['Artisanal Bündnerfleisch', 'provision item'],
  ['Glacial Meltwater', 'provision item'],
]

let failures = 0
for (const [needle, label] of checks) {
  const present = html.includes(needle)
  console.log(`${present ? 'PASS' : 'FAIL'} · renders ${label}`)
  if (!present) failures++
}
console.log(`\nSSR output length: ${html.length} chars`)
console.log(failures === 0 ? 'SSR SMOKE PASSED' : `${failures} SSR CHECK(S) FAILED`)
process.exit(failures === 0 ? 0 : 1)
