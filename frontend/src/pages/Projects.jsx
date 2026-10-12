
import { useEffect, useState } from 'react'
import '../App.css'

const fallbackProjects = [
  {
    number: '01',
    title: 'LeadFlow AI',
    type: 'CRM APPLICATION',
    description:
      'A department-based CRM that tracks leads from customer registration through verification and sales follow-up.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    category: 'IN DEVELOPMENT',
    link: null,
    status: 'In Development',
  },
  {
    number: '02',
    title: 'ServiceHub',
    type: 'SERVICE BOOKING PLATFORM',
    description:
      'A service marketplace where customers can discover local professionals, book services, and manage their bookings.',
    tech: ['React', 'Express.js', 'MongoDB', 'Razorpay'],
    category: 'LIVE PROJECT',
    link: 'https://service-hub-self.vercel.app/',
    status: 'Live Project',
  },
  {
    number: '03',
    title: 'E-Learning Platform',
    type: 'LEARNING EXPERIENCE',
    description:
      'A learning platform designed to organize courses and student learning activities.',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'FULL STACK',
    link: null,
    status: 'Project',
  },
  {
    number: '04',
    title: 'Interactive Quiz App',
    type: 'WEB APPLICATION',
    description:
      'An interactive quiz application featuring multiple-choice questions.',
    tech: ['JavaScript', 'React', 'CSS'],
    category: 'WEB APPLICATION',
    link: null,
    status: 'Project',
  },
  {
    number: '05',
    title: 'Business Websites',
    type: 'WEB DEVELOPMENT',
    description:
      'Responsive business websites focused on usability and clean design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'WEB DEVELOPMENT',
    link: null,
    status: 'Project',
  },
]

const projectDetails = {
  'LeadFlow AI': {
    overview:
      'LeadFlow AI is a role-based Customer Relationship Management (CRM) application that organizes customer leads and coordinates work across multiple departments. Instead of treating a lead as a simple contact record, the application moves it through a structured workflow so that each team can perform its assigned responsibility.',
    problem:
      'When different teams manage customer information separately, it can become difficult to track progress, verify customer details, and know which department should act next. LeadFlow AI organizes this process through shared lead records, role-based permissions, and status tracking.',
    workflow: [
      {
        title: '01. Marketing',
        text: 'Creates a new lead and enters the customer information. The lead enters the communication stage.',
      },
      {
        title: '02. Communication',
        text: 'Coordinates with the customer, schedules the meeting, and records the meeting details.',
      },
      {
        title: '03. Vigilance',
        text: 'Reviews the customer details and uploads the audio recording used in the verification workflow.',
      },
      {
        title: '04. Support',
        text: 'Handles the verified lead and allocates it to the next stage of the process.',
      },
      {
        title: '05. Sales',
        text: 'Uses the lead information to follow up with the customer and continue the sales process.',
      },
    ],
    features: [
      'Role-based authentication and department-specific permissions.',
      'Lead creation, customer information management, and status tracking.',
      'Meeting scheduling and communication-stage updates.',
      'Audio file upload and verification workflow.',
      'Department-to-department lead progression.',
      'REST API endpoints for lead management.',
      'MongoDB integration for persistent lead records.',
    ],
    contribution:
      'Worked on the backend workflow, Express.js REST APIs, MongoDB integration, role-specific operations, lead status transitions, and audio upload handling.',
    statusNote:
      'This project is currently in development. The workflow and features described here reflect the implemented backend functionality and intended end-to-end process; the entire application should not be considered production-ready until completed and tested.',
  },

  ServiceHub: {
    overview:
      'ServiceHub is a service-booking platform that connects customers with local professionals. It helps users discover services, arrange bookings, and keep track of their requests through a web application.',
    problem:
      'Finding a suitable local professional and coordinating a service booking can require multiple calls and messages. ServiceHub brings service discovery, booking management, provider operations, and customer feedback into one platform.',
    workflow: [
      {
        title: '01. Discover services',
        text: 'Customers browse available services, such as AC repair, plumbing, and electrical work.',
      },
      {
        title: '02. Choose a provider',
        text: 'Customers explore available professionals and select a suitable service provider.',
      },
      {
        title: '03. Book a service',
        text: 'Customers submit a booking request through the application.',
      },
      {
        title: '04. Manage bookings',
        text: 'Customers and providers use the booking workflow to manage service requests and their statuses.',
      },
      {
        title: '05. Payments and reviews',
        text: 'The platform includes Razorpay payment integration and customer review functionality.',
      },
    ],
    features: [
      'Separate customer, provider, and admin experiences.',
      'Service discovery and provider listings.',
      'Service booking and booking-status management.',
      'Provider management functionality.',
      'Razorpay payment integration.',
      'Customer reviews and feedback.',
      'React frontend with a backend API.',
      'Deployed frontend and backend architecture.',
    ],
    contribution:
      'Built and integrated application features across the React frontend and Express backend, worked with MongoDB, booking and provider APIs, review functionality, and Razorpay payment integration.',
    statusNote:
      'Live project: the deployed application can be opened using the Explore Project link. Specific payment and booking flows should be tested in the live environment before making assumptions about their current availability.',
  },

  'E-Learning Platform': {
    overview:
      'A full-stack learning application designed to organize courses and student learning activities in one place.',
    problem:
      'Learning content and student information can become difficult to organize as the number of courses and learners increases. A web-based learning platform provides a structured place to manage learning resources.',
    workflow: [
      {
        title: '01. Access the platform',
        text: 'Users open the learning application through its web interface.',
      },
      {
        title: '02. Explore courses',
        text: 'Course information is presented through the application interface.',
      },
      {
        title: '03. Manage learning data',
        text: 'The frontend communicates with backend services and a database to support application data.',
      },
    ],
    features: [
      'React-based user interface.',
      'Node.js backend architecture.',
      'MongoDB data storage.',
      'Course and student management focus.',
    ],
    contribution:
      'The project demonstrates full-stack application development using React, Node.js, and MongoDB.',
    statusNote:
      'Additional functionality should only be described as implemented after it has been verified in the project.',
  },

  'Interactive Quiz App': {
    overview:
      'An interactive web application that presents multiple-choice questions and allows users to participate in quizzes.',
    problem:
      'Static learning materials do not always give users an interactive way to practise their knowledge. A quiz interface provides a more engaging way to answer questions.',
    workflow: [
      {
        title: '01. Start a quiz',
        text: 'The user opens the quiz interface.',
      },
      {
        title: '02. Answer questions',
        text: 'The user interacts with multiple-choice answers.',
      },
      {
        title: '03. Review results',
        text: 'Quiz results and scoring can be displayed according to the functionality implemented in the application.',
      },
    ],
    features: [
      'Interactive multiple-choice questions.',
      'JavaScript-based interactions.',
      'React component-based interface.',
      'CSS styling for the user experience.',
    ],
    contribution:
      'Focused on building an interactive frontend using React, JavaScript, and CSS.',
    statusNote:
      'The description covers the known project scope. Verify additional features such as timers, score history, or question randomization before listing them.',
  },

  'Business Websites': {
    overview:
      'A collection of business-oriented websites created to present information, services, and contact details through responsive web interfaces.',
    problem:
      'Businesses need accessible websites that clearly communicate their services and work across desktop and mobile screens.',
    workflow: [
      {
        title: '01. Present information',
        text: 'Visitors explore the business information and available services.',
      },
      {
        title: '02. Navigate the website',
        text: 'Clear navigation helps users find the information they need.',
      },
      {
        title: '03. Use across devices',
        text: 'Responsive layouts adapt the interface to different screen sizes.',
      },
    ],
    features: [
      'Responsive website layouts.',
      'HTML-based page structure.',
      'CSS styling and layout design.',
      'JavaScript interactions where required.',
    ],
    contribution:
      'Worked on frontend development, page layouts, styling, and responsive user experiences.',
    statusNote:
      'This entry represents business website development work. Add individual website links when the relevant projects are available online.',
  },
}

function Projects() {
  const [projects, setProjects] = useState(fallbackProjects)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Projects API unavailable')
        }
        return response.json()
      })
      .then((data) => {
        if (data.projects?.length) {
          const backendProjects = data.projects.map((project) => {
            const featuredProject = fallbackProjects.find(
              (item) => item.title === project.title
            )

            return {
              ...featuredProject,
              ...project,
              category:
                featuredProject?.category ||
                project.category ||
                'PROJECT',
              link: featuredProject?.link ?? null,
              status: featuredProject?.status || 'Project',
            }
          })

          const missingProjects = fallbackProjects.filter(
            (featured) =>
              !backendProjects.some(
                (project) => project.title === featured.title
              )
          )

          setProjects([...missingProjects, ...backendProjects])
        }
      })
      .catch((error) => {
        console.log('Using portfolio project data:', error.message)
      })
  }, [])

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  return (
    <div className="projects-page">
      <section className="page-hero">
        <p className="section-eyebrow">TANISH KALOTA PRESENTS</p>
        <h1>MY PROJECTS</h1>
        <p>
          Ideas transformed into applications. Explore my development work,
          technologies and ongoing projects.
        </p>
        <span className="project-total">
          {String(projects.length).padStart(2, '0')} PROJECTS
        </span>
      </section>

      <section className="projects-library">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">THE COLLECTION</p>
            <h2>Made with code</h2>
          </div>
          <span className="section-count">MY DEVELOPMENT JOURNEY</span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="library-card" key={project.title}>
              <div className={`library-poster poster-${index % 4}`}>
                <span className="poster-number">
                  N° {project.number || String(index + 1).padStart(2, '0')}
                </span>

                <span className="poster-monogram">
                  {project.title
                    .split(/\s+/)
                    .map((word) => word[0])
                    .join('')
                    .slice(0, 3)
                    .toUpperCase()}
                </span>

                <span className="poster-title">{project.title}</span>
                <span className="poster-type">
                  {project.type || 'DEVELOPER PROJECT'}
                </span>

                <span className="poster-play">
                  {project.link ? '↗' : '✦'}
                </span>
              </div>

              <div className="library-details">
                <div className="library-title-row">
                  <h3>{project.title}</h3>
                  <span className="library-category">
                    {project.category}
                  </span>
                </div>

                <p>{project.description}</p>

                <div className="project-stack">
                  {[
                    {
                      label: 'Frontend',
                      values:
                        project.stack?.frontend ||
                        project.tech?.filter((tech) =>
                          ['React', 'React.js', 'JavaScript', 'CSS', 'HTML'].includes(tech)
                        ) ||
                        [],
                    },
                    {
                      label: 'Backend',
                      values:
                        project.stack?.backend ||
                        project.tech?.filter((tech) =>
                          ['Node.js', 'Express.js', 'Express', 'FastAPI', 'Python'].includes(tech)
                        ) ||
                        [],
                    },
                    {
                      label: 'Database',
                      values:
                        project.stack?.database ||
                        project.tech?.filter((tech) =>
                          ['MongoDB', 'PostgreSQL', 'MySQL'].includes(tech)
                        ) ||
                        [],
                    },
                    {
                      label: 'Tools',
                      values: project.stack?.tools || [],
                    },
                  ]
                    .filter((group) => group.values.length > 0)
                    .map((group) => (
                      <div className="stack-line" key={group.label}>
                        <span className="stack-label">{group.label}</span>
                        <div className="stack-values">
                          {group.values.map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>

                <div className="project-card-actions">
                  <button
                    className="project-summary-btn"
                    type="button"
                    onClick={() => setSelectedProject(project)}
                  >
                    Project Summary <span>↗</span>
                  </button>

                  {project.link ? (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore Project ↗
                    </a>
                  ) : (
                    <span className="project-status">
                      {project.status === 'In Development'
                        ? 'Currently in development'
                        : 'Project details coming soon'}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-modal-close"
              type="button"
              aria-label="Close project summary"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <p className="section-eyebrow">PROJECT DEEP DIVE</p>
            <h2 id="project-modal-title">{selectedProject.title}</h2>

            <div className="project-modal-meta">
              <span>{selectedProject.type}</span>
              <span>{selectedProject.status}</span>
            </div>

            {(() => {
              const details = projectDetails[selectedProject.title]

              if (!details) {
                return (
                  <p>
                    {selectedProject.description}
                  </p>
                )
              }

              return (
                <>
                  <section className="project-detail-section">
                    <h3>What is this project?</h3>
                    <p>{details.overview}</p>
                  </section>

                  <section className="project-detail-section">
                    <h3>The problem it addresses</h3>
                    <p>{details.problem}</p>
                  </section>

                  <section className="project-detail-section">
                    <h3>How it works</h3>
                    <div className="project-workflow">
                      {details.workflow.map((step) => (
                        <article
                          className="project-workflow-step"
                          key={step.title}
                        >
                          <h4>{step.title}</h4>
                          <p>{step.text}</p>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="project-detail-section">
                    <h3>Key features</h3>
                    <ul className="project-feature-list">
                      {details.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="project-detail-section">
                    <h3>Technologies used</h3>
                    <div className="project-detail-tech">
                      {(selectedProject.tech || []).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </section>

                  <section className="project-detail-section">
                    <h3>Development contribution</h3>
                    <p>{details.contribution}</p>
                  </section>

                  <p className="project-detail-note">{details.statusNote}</p>
                </>
              )
            })()}

            <div className="project-modal-actions">
              {selectedProject.link && (
                <a
                  className="btn btn-light"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore Live Project ↗
                </a>
              )}

              <button
                className="btn btn-dark"
                type="button"
                onClick={() => setSelectedProject(null)}
              >
                Close Summary
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default Projects
