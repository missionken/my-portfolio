import useScrollReveal from '../hooks/useScrollReveal'
import './Skills.css'

const SKILL_GROUPS = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    title: 'Frontend',
    tags: ['HTML5 / CSS3', 'React', 'JavaScript (ES6+)', 'Dynamic UI'],
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    title: 'Backend & DB',
    tags: ['Node.js', 'Java', 'Python', 'C#', 'MySQL / MONGODB', 'API Development'],
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
    title: 'Tools & Practices',
    tags: ['Git / GitHub', 'VS Code', 'User-Focused Design', 'Problem Solving'],
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Professional Traits',
    tags: ['Quick Learner', 'Proactive', 'Detail-Oriented', 'Adaptable', 'High Energy'],
  },
]

function SkillCard({ group, index }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="skills__card reveal" style={{ transitionDelay: `${0.1 + index * 0.1}s` }}>
      <div className="skills__card-header">
        <span className="skills__icon">{group.icon}</span>
        <h3 className="skills__group-title">{group.title}</h3>
      </div>
      <div className="skills__tags">
        {group.tags.map(tag => (
          <span key={tag} className="skills__tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const titleRef = useScrollReveal()
  const divRef   = useScrollReveal()
  const btnRef   = useScrollReveal()

  return (
    <section id="skills" className="skills">
      <div className="skills__wave-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(74,158,255,0.06)" />
              <stop offset="50%"  stopColor="rgba(37,99,235,0.1)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0.06)" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(56,189,248,0.04)" />
              <stop offset="50%"  stopColor="rgba(74,158,255,0.08)" />
              <stop offset="100%" stopColor="rgba(37,99,235,0.04)" />
            </linearGradient>
          </defs>
          <path d="M0,200 C200,100 400,300 720,200 C1040,100 1240,300 1440,200 L1440,400 L0,400 Z"
            fill="url(#waveGrad1)" className="skills__wave skills__wave--1"/>
          <path d="M0,250 C300,150 600,350 900,250 C1200,150 1350,300 1440,250 L1440,400 L0,400 Z"
            fill="url(#waveGrad2)" className="skills__wave skills__wave--2"/>
          <path d="M0,300 C250,220 500,360 800,280 C1100,200 1300,340 1440,300 L1440,400 L0,400 Z"
            fill="rgba(74,158,255,0.03)" className="skills__wave skills__wave--3"/>
        </svg>
      </div>
      <div className="container">
        <h2 ref={titleRef} className="section-title reveal">Professional &amp; Technical Skills</h2>
        <div ref={divRef} className="section-divider reveal reveal-delay-1" />
        <div className="skills__grid">
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </div>
        <div ref={btnRef} className="skills__resume-wrap reveal reveal-delay-2">
          <a href="#" onClick={e => e.preventDefault()} className="skills__resume-btn">RESUME</a>
          <a href="#" onClick={e => e.preventDefault()} className="skills__resume-btn">VIEW PROJECTS</a>
        </div>
      </div>
    </section>
  )
}