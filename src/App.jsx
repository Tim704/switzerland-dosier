import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { CountdownTimer } from './components/CountdownTimer.jsx'
import { TransitProtocol } from './components/TransitProtocol.jsx'
import { AtmosphericTelemetry } from './components/AtmosphericTelemetry.jsx'
import { ItineraryCarousel } from './components/ItineraryCarousel.jsx'
import { GastronomicProgram } from './components/GastronomicProgram.jsx'
import { TopoLines } from './components/TopoLines.jsx'

// Page-corner registration / crop marks — the "confidential dossier" cue.
function CropMarks() {
  const base = 'pointer-events-none absolute z-20 h-4 w-4 text-champagne-700/35'
  return (
    <>
      <span className={`${base} left-3 top-3 border-l border-t`} />
      <span className={`${base} right-3 top-3 border-r border-t`} />
      <span className={`${base} bottom-3 left-3 border-b border-l`} />
      <span className={`${base} bottom-3 right-3 border-b border-r`} />
    </>
  )
}

export default function App() {
  return (
    <div className="grain relative min-h-screen overflow-hidden">
      {/* Ambient warm light, a faint glacial tint, and topographic contours. */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-champagne-200/40 blur-[130px]" />
        <div className="absolute -right-48 top-1/4 h-[32rem] w-[32rem] rounded-full bg-champagne-300/25 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-[30rem] w-[30rem] rounded-full bg-sky-200/20 blur-[130px]" />
        <TopoLines
          className="absolute -left-40 -top-44 h-[42rem] w-[42rem] animate-drift text-champagne-700/[0.09]"
          rings={11}
        />
        <TopoLines
          className="absolute -bottom-52 -right-56 h-[54rem] w-[54rem] text-champagne-800/[0.08]"
          rings={13}
        />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        <CropMarks />

        <Header />

        {/* Countdown hero */}
        <div className="mt-10 animate-fade-up" style={{ animationDelay: '60ms' }}>
          <CountdownTimer />
        </div>

        {/* Module grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <TransitProtocol />
          </div>
          <div className="lg:col-span-5">
            <AtmosphericTelemetry />
          </div>
          <div className="lg:col-span-12">
            <ItineraryCarousel />
          </div>
          <div className="lg:col-span-12">
            <GastronomicProgram />
          </div>
        </div>

        <div className="mt-14">
          <Footer />
        </div>
      </main>
    </div>
  )
}
