import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const videos = [
  {
    title: 'Cinematic Travel Reel',
    thumb: 'https://images.unsplash.com/photo-1529336953121-a7d3796e7d1a?q=80&w=1600&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: ['4K', 'Color Grade', 'Music Sync'],
  },
  {
    title: 'Product Promo Cut',
    thumb: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: ['Motion', 'Sound Design'],
  },
  {
    title: 'Creator Short Form',
    thumb: 'https://images.unsplash.com/photo-1598514982688-e0256c8159ed?q=80&w=1600&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: ['Vertical', 'Snappy Cuts'],
  },
]

export default function Showreel() {
  return (
    <section id="work" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
            <p className="mt-2 text-blue-100/80">A selection of edits and reels</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white backdrop-blur">
            Request a project
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <motion.a
              key={v.title}
              href={v.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40"
            >
              <img src={v.thumb} alt="thumbnail" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-center gap-2">
                  {v.tags.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-blue-100/90">{t}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{v.title}</h3>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-slate-900 text-sm font-semibold">
                  <Play className="h-4 w-4" /> Watch
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
