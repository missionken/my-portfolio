import './Footer.css'

const ROLES = ['WEB DEVELOPER','QUALITY ASSURANCE','DATABASE ADMIN']
const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.986V9h3.08v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.784 1.784 0 1 1 0-3.567 1.784 1.784 0 0 1 0 3.567zM6.919 20.452H3.752V9h3.167v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: 'Facebook', href: 'https://facebook.com', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.03 4.388 11.026 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.099 24 18.103 24 12.073z"/></svg> },
  { label: 'Instagram', href: 'https://instagram.com', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-border" aria-hidden="true" />
      <div className="container footer__inner">
        <h3 className="footer__name"> Ken Mission</h3>
        <div className="footer__roles">
          {ROLES.map((role, i) => (
            <>
              <span key={role}>{role}</span>
              {i < ROLES.length - 1 && <span className="footer__dot" aria-hidden="true">•</span>}
            </>
          ))}
        </div>
        <div className="footer__socials">
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="footer__social-link" aria-label={s.label}>{s.icon}</a>
          ))}
        </div>
        <p className="footer__copy">&copy; 2026 Ken Mission. All rights reserved.</p>
      </div>
    </footer>
  )
}