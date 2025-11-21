import { motion } from 'framer-motion'
import { Scissors, Sparkles, Wand2 } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Video Editing',
    desc: 'Clean cuts, smooth pacing, and impactful story arcs for any format.'
  },
  {
    icon: Sparkles,
    title: 'Color & Sound',
    desc: 'Tasteful color grades and sound design to elevate the mood.'
  },
  {
    icon: Wand2,
    title: 'Motion & Titles',
    desc: 'Snappy transitions, kinetic type, and on-brand lower thirds.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What I Do</h2>
          <p className="mt-2 text-blue-100/80">Flexible packages for creators and brands</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur"
            >
              <s.icon className="h-6 w-6 text-blue-300" />
              <h3 className="mt-3 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-blue-100/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
