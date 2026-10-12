
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import DSA from './pages/DSA'
import Contact from './pages/Contact'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <div className="netflix-app">
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
          <a className="brand footer-brand" href="/">
            TANISH<span>KALOTA</span>
          </a>
          <p>Designed with ambition. Built with code.</p>
          <p>© 2026 Tanish Kalota</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
