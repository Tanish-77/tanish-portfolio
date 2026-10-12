import { useState } from 'react'
import "../App.css";

function Contact() {
  const [copied, setCopied] = useState(false)

  const email = 'tanishkalota@gmail.com'

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className="contact-page">
      <section className="page-hero contact-hero">
        <p className="section-eyebrow">YOUR NEXT COLLABORATION STARTS HERE</p>
        <h1>LET'S CONNECT</h1>
        <p>
          Have an opportunity, an interesting idea or a project in mind?
          I'd love to hear from you.
        </p>
        <span className="project-total">OPEN TO OPPORTUNITIES</span>
      </section>

      <section className="contact-library">
        <div className="contact-intro">
          <p className="section-eyebrow">GET IN TOUCH</p>
          <h2>Let's build something<br /><span>remarkable.</span></h2>
          <p>
            I'm Tanish Kalota, a Full Stack Developer based in Faridabad,
            Haryana. Reach out to discuss software development opportunities
            and collaborations.
          </p>
        </div>

        <div className="contact-cards">
          <article className="contact-card">
            <span className="contact-icon">@</span>
            <div>
              <span className="contact-label">EMAIL</span>
              <h3>{email}</h3>
              <a href={`mailto:${email}`}>Send an email ↗</a>
            </div>
            <button className="copy-email" onClick={copyEmail}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </article>

          <a
            className="contact-card contact-card-link"
            href="https://www.linkedin.com/in/tanish77"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">in</span>
            <div>
              <span className="contact-label">PROFESSIONAL NETWORK</span>
              <h3>LinkedIn</h3>
              <span className="contact-action">Let's connect ↗</span>
            </div>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            className="contact-card contact-card-link"
            href="https://github.com/Tanish-77"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">{'</>'}</span>
            <div>
              <span className="contact-label">CODE & PROJECTS</span>
              <h3>GitHub</h3>
              <span className="contact-action">Explore repositories ↗</span>
            </div>
            <span className="contact-arrow">↗</span>
          </a>
        </div>

        <div className="contact-bottom">
          <span className="contact-bottom-mark">TK</span>
          <div>
            <p className="section-eyebrow">THE NEXT CHAPTER</p>
            <h3>Good things start with a conversation.</h3>
          </div>
          <a className="btn btn-light" href={`mailto:${email}`}>
            Contact Me ↗
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact