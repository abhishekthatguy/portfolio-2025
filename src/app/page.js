import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 Abhishek Singh. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 flex-wrap justify-center">
              <Link href="/portfolio" className="text-sm hover:text-blue-400 transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-sm hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:text-blue-400 transition-colors">
                Contact
              </Link>
              <Link href="/terms" className="text-sm hover:text-blue-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-sm hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
