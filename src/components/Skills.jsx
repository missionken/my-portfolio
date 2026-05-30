import './Skills.css'

const SKILL_GROUPS = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    title: 'Frontend',
    tags: ['HTML5 / CSS3', 'JavaScript (ES6+)', 'Dynamic UI'],
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    title: 'Backend & DB',
    tags: ['Java', 'Python', 'C#', 'MySQL / MONGODB', 'API Development', 'Data Analytics & Visualization'],
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

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title animate-up">Professional &amp; Technical Skills</h2>
        <div className="section-divider animate-up delay-1" />
        <div className="skills__grid">
          {SKILL_GROUPS.map((group, i) => (
            <div key={group.title} className="skills__card animate-up"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
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
          ))}
        </div>

        <div className="skills__resume-wrap">
          <a href="#" onClick={e => e.preventDefault()} className="skills__resume-btn">
            RESUME
          </a>
        </div>

      </div>
    </section>
  )
}