
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import DSA from './pages/DSA'
import Contact from './pages/Contact'
import './App.css'
import { Analytics } from '@vercel/analytics/react'
import CinematicIntro from './components/CinematicIntro'
function App() {
  return (
    <BrowserRouter>
      <div className="netflix-app">
         <CinematicIntro />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/dsa" element={<DSA />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <Link className="brand footer-brand" to="/">
            TANISH<span>KALOTA</span>
          </Link>

          <p className="footer-tagline">
            Designed with ambition. Built with code.
          </p>

          <div className="footer-socials">
            <a
              href="https://linkedin.com/in/tanish77"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.7H4.96V9.14h2.97v9.56ZM6.45 7.84a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.25 10.86h-2.96v-4.65c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H9.46V9.14h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.54v5.26Z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Tanish-77"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.04 3.92 1.42.1-.72.39-1.22.7-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="mailto:tanishkalota@gmail.com"
              aria-label="Email"
              title="Email"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm9 8.2L3.5 6.5v11.2h17V6.5L12 12.2Zm0-2.4L19.4 6H4.6l7.4 3.8Z" />
              </svg>
              <span>Email</span>
            </a>

            <a
              href="tel:+918700158943"
              aria-label="Phone"
              title="Phone"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.19 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z" />
              </svg>
              <span>Phone</span>
            </a>
          </div>

          <div className="footer-details">
            <a href="https://linkedin.com/in/tanish77" target="_blank" rel="noreferrer">
              linkedin.com/in/tanish77
            </a>
            <span className="footer-separator">•</span>
            <a href="https://github.com/Tanish-77" target="_blank" rel="noreferrer">
              github.com/Tanish-77
            </a>
            <span className="footer-separator">•</span>
            <a href="mailto:tanishkalota@gmail.com">
              tanishkalota@gmail.com
            </a>
            <span className="footer-separator">•</span>
            <a href="tel:+918700158943">
              +91-8700158943
            </a>
          </div>

          <p className="footer-copyright">
            © 2026 Tanish Kalota. All rights reserved.
          </p>
        </footer>
        <Analytics />
      </div>
    </BrowserRouter>
  )
}

export default App
