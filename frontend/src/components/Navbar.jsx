
import { NavLink } from 'react-router-dom'


const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'DSA', path: '/dsa' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        T<span>K</span>
      </NavLink>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a
        className="nav-resume"
        href="https://github.com/Tanish-77"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>
    </header>
  )
}

export default Navbar
