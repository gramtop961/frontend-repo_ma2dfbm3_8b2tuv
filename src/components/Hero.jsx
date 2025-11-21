import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-950/90"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Cutting stories with rhythm and style
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-blue-100/90"
          >
            I craft crisp edits, cinematic sequences, and energetic social cuts for creators and brands.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-blue-500/10">
              View Reels
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white backdrop-blur">
              Get a Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
