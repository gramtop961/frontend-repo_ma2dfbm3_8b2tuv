import { useState } from 'react'
import { Menu, X, Camera, PlayCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-3 backdrop-blur-xl">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg">
              <PlayCircle className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">Your Name</p>
              <p className="text-xs text-blue-200/80">Video Editor</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20">
              <Camera className="h-4 w-4" /> Book a Cut
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl"
            >
              <div className="flex flex-col p-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm text-blue-100/90 hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
                >
                  <Camera className="h-4 w-4" /> Book a Cut
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
