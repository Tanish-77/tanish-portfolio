import { useState } from 'react'
import "../App.css";

const codingTopics = [
  {
    title: 'Sorting Algorithms',
    level: 'FUNDAMENTALS',
    description: 'Understanding how algorithms arrange data efficiently.',
    topics: ['Bubble Sort', 'Insertion Sort', 'Selection Sort'],
    symbol: '↕',
  },
  {
    title: 'Arrays & Strings',
    level: 'CORE PROBLEM SOLVING',
    description: 'Practising array traversal, searching and common interview patterns.',
    topics: ['Array Traversal', 'Two Pointers', 'Majority Element'],
    symbol: '[]',
  },
  {
    title: 'Problem Solving',
    level: 'INTERVIEW PREPARATION',
    description: 'Breaking problems into smaller steps and building logical solutions.',
    topics: ['Logic Building', 'Edge Cases', 'Time Complexity'],
    symbol: '{ }',
  },
]

function DSA() {
  const [activeTopic, setActiveTopic] = useState('All')

  const visibleTopics =
    activeTopic === 'All'
      ? codingTopics
      : codingTopics.filter((topic) => topic.title === activeTopic)

  return (
    <div className="dsa-page">
      <section className="page-hero dsa-hero">
        <p className="section-eyebrow">THE DEVELOPER'S PLAYGROUND</p>
        <h1>DSA & CODING</h1>
        <p>
          Every problem is an opportunity to think deeper, write cleaner
          code and become a better developer.
        </p>
        <span className="project-total">LANGUAGE: PYTHON</span>
      </section>

      <section className="dsa-library">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">THE TRAINING GROUND</p>
            <h2>Think. Solve. Improve.</h2>
          </div>
          <span className="section-count">ONE PROBLEM AT A TIME</span>
        </div>

        <div className="dsa-filters">
          {['All', ...codingTopics.map((topic) => topic.title)].map((topic) => (
            <button
              key={topic}
              className={activeTopic === topic ? 'dsa-filter active' : 'dsa-filter'}
              onClick={() => setActiveTopic(topic)}
            >
              {topic}
            </button>
          ))}
        </div>

        <div className="dsa-grid">
          {visibleTopics.map((topic, index) => (
            <article className={`dsa-card dsa-card-${index % 3}`} key={topic.title}>
              <div className="dsa-card-top">
                <span>{topic.level}</span>
                <span className="dsa-symbol">{topic.symbol}</span>
              </div>

              <h3>{topic.title}</h3>
              <p>{topic.description}</p>

              <div className="dsa-topic-list">
                {topic.topics.map((item) => (
                  <span key={item}>
                    <span className="dsa-check">›</span> {item}
                  </span>
                ))}
              </div>

              <div className="dsa-card-footer">
                <span>PYTHON PRACTICE</span>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="coding-note">
          <span className="coding-note-mark">N</span>
          <div>
            <p className="section-eyebrow">CURRENT FOCUS</p>
            <h3>Building strong fundamentals</h3>
            <p>
              Practising algorithm implementation in Python and preparing
              for software developer interviews.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DSA