import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s create something great</h2>
            <p className="mt-3 text-blue-100/80">Tell me about your project and timeline. I’ll get back within 24 hours.</p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
              <div className="space-y-4 text-sm text-blue-100/80">
                <p>• Available for ongoing short-form packages and one-off edits</p>
                <p>• Turnarounds: 24–72h depending on scope</p>
                <p>• Tools: Premiere Pro, After Effects, Resolve</p>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur"
          >
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm text-blue-100/80">Name</label>
                <input required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-blue-100/80">Email</label>
                <input type="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-blue-100/80">Project details</label>
                <textarea rows={5} required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="What are you looking to create?" />
              </div>
            </div>
            <button className="mt-4 w-full rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-blue-500/10">
              Send inquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
