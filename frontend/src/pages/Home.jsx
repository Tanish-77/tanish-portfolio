
import { useNavigate } from 'react-router-dom'
import '../App.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-kicker">
            FULL STACK DEVELOPER <span>
              <br>
              </br></span> SOFTWARE DEVELOPER
          </p>

          <h1>
            TANISH
            <br />
            <span>KALOTA</span>
          </h1>

          <div className="hero-meta">
            <span className="match">DEVELOPER</span>
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>FastAPI</span>
          </div>

          <p className="hero-description">
            I’m Tanish Kalota, a developer from Faridabad, Haryana,
            passionate about building modern web applications and
            solving real-world problems. I work with React, JavaScript,
            Node.js, Python and databases to turn ideas into useful
            digital experiences.
          </p>

<div className="hero-buttons">
  <button
    className="btn btn-light"
    onClick={() => navigate('/projects')}
  >
    ▶ &nbsp; Explore My Work
  </button>

  <button
    className="btn btn-dark"
    onClick={() => navigate('/contact')}
  >
    ✉ &nbsp; Let's Connect
  </button>

  <a
    className="btn btn-light"
    href="/Tanish_Resume.pdf"
    target="_blank"
    rel="noreferrer"
  >
    ↗ &nbsp; View Resume
  </a>
</div>

          <p className="hero-note">
            BUILDING • LEARNING • IMPROVING
          </p>
        </div>

        <div className="hero-watermark">TK</div>
        <div className="hero-bottom-fade" />
      </section>

      <section className="home-feature">
        <p className="section-eyebrow">YOUR NEXT DISCOVERY</p>
        <h2>More than just lines of code.</h2>
        <p className="home-section-description">
          Explore my projects, technical toolkit and problem-solving journey.
        </p>

        <div className="feature-grid">
          <button
            className="feature-card feature-projects"
            onClick={() => navigate('/projects')}
          >
            <span>01 / SELECTED WORK</span>
            <strong>Projects</strong>
            <small>Real applications. Practical solutions. ↗</small>
          </button>

          <button
            className="feature-card feature-skills"
            onClick={() => navigate('/skills')}
          >
            <span>02 / TECH STACK</span>
            <strong>Skills</strong>
            <small>Tools I use to build for the web. ↗</small>
          </button>

          <button
            className="feature-card feature-dsa"
            onClick={() => navigate('/dsa')}
          >
            <span>03 / PROBLEM SOLVING</span>
            <strong>DSA & Coding</strong>
            <small>Logic, algorithms and continuous learning. ↗</small>
          </button>
        </div>
      </section>

      <section className="home-contact">
        <div>
          <p className="section-eyebrow">HAVE AN OPPORTUNITY?</p>
          <h2>Let's create something meaningful.</h2>
          <p>
            Open to suitable junior developer roles and exciting projects.
          </p>
        </div>

        <button
          className="btn btn-light"
          onClick={() => navigate('/contact')}
        >
          Get in Touch ↗
        </button>
      </section>
    </div>
  )
}

export default Home
