import { useState } from 'react'
import '../App.css'

const skillGroups = [
  {
    title: 'Frontend Development',
    subtitle: 'THE USER EXPERIENCE',
    skills: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Angular'],
  },
  {
    title: 'Backend Development',
    subtitle: 'THE ENGINE ROOM',
    skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'Core Java'],
  },
  {
    title: 'Databases',
    subtitle: 'WHERE DATA LIVES',
    skills: ['MongoDB', 'PostgreSQL', 'Database Design'],
  },
  {
    title: 'Tools & Engineering',
    subtitle: 'BUILT FOR DELIVERY',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Docker Basics', 'CI/CD Basics', 'AWS Basics'],
  },
  {
    title: 'Computer Science',
    subtitle: 'THE FUNDAMENTALS',
    skills: ['Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Collections', 'Exception Handling'],
  },
]

function Skills() {
  const [selectedGroup, setSelectedGroup] = useState('All')

  const visibleGroups =
    selectedGroup === 'All'
      ? skillGroups
      : skillGroups.filter((group) => group.title === selectedGroup)

  return (
    <div className="skills-page">
      <section className="page-hero skills-hero">
        <p className="section-eyebrow">TANISH KALOTA PRESENTS</p>
        <h1>MY SKILLS</h1>
        <p>
          The technologies, tools and fundamentals I use to turn ideas
          into practical web applications.
        </p>
        <span className="project-total">CONTINUOUSLY LEARNING</span>
      </section>

      <section className="skills-library">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">MY TECH STACK</p>
            <h2>Tools of the trade</h2>
          </div>
          <span className="section-count">LEARN · BUILD · IMPROVE</span>
        </div>

        <div className="skill-filters">
          {['All', ...skillGroups.map((group) => group.title)].map((group) => (
            <button
              key={group}
              className={selectedGroup === group ? 'skill-filter active' : 'skill-filter'}
              onClick={() => setSelectedGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="skill-collection">
          {visibleGroups.map((group, index) => (
            <article className={`skill-showcase skill-showcase-${index % 4}`} key={group.title}>
              <div className="skill-showcase-heading">
                <span>{group.subtitle}</span>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills