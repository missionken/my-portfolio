import './Education.css'

const EDUCATION = [
  {
    side: 'right',
    degree: 'BS Information Technology',
    period: 'May 2026 – Present',
    school: 'STI SJDM College',
    desc: 'Applying analytical logic and creative problem-solving to develop software projects that prioritize scalability, clean documentation, and intuitive user experiences.',
  },
  {
    side: 'left',
    degree: 'HUMSS Strand Graduate',
    period: 'July 2021 – 2023',
    school: 'Sapang Palay National High School',
    desc: 'Completed the Humanities and Social Sciences strand, developing strong communication, critical thinking, and analytical skills. Even coming from a non-technical background, this foundation fueled a deeper curiosity for technology and motivated the transition into Information Technology.',
  },
]

const CapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5"/>
  </svg>
)

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title animate-up">Education</h2>
        <div className="section-divider animate-up delay-1" />
        <div className="edu__timeline">
          <div className="edu__line" aria-hidden="true" />
          {EDUCATION.map((item, i) => (
            <div key={i}
              className={`edu__row edu__row--${item.side} animate-up`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
              <div className={`edu__card${item.side === 'right' ? ' edu__card--active' : ''}`}>
                <div className="edu__card-header">
                  <span className="edu__degree">{item.degree}</span>
                  <span className="edu__period">{item.period}</span>
                </div>
                <p className="edu__school">{item.school}</p>
                <p className="edu__desc">{item.desc}</p>
              </div>
              <div className="edu__dot"><CapIcon /></div>
              <div className="edu__spacer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}