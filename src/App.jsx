import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showreel from './components/Showreel'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <Services />
        <Contact />
        <footer className="border-t border-white/10 bg-slate-950/80 py-10">
          <div className="mx-auto max-w-7xl px-4 text-center text-sm text-blue-100/60">
            © {new Date().getFullYear()} Your Name — Video Editor. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
