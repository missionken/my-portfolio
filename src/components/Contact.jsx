import { useState } from 'react'
import './Contact.css'

const CONTACT_ITEMS = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    label: 'Location', value: 'Tigbe, Norzagaray, Bulacan',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: 'Email', value: 'mission.ken.30@gmail.com', href: 'mailto:mission.ken.30@gmail.com',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.94-.95a2 2 0 0 1 2.12-.44 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>,
    label: 'Phone', value: '+63 907 540 2315', href: 'tel:+639075402315',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://my-portfolio-jade-iota-96.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__details animate-left">
            <h3 className="contact__details-title">Contact Details</h3>
            <ul className="contact__list">
              {CONTACT_ITEMS.map(item => (
                <li key={item.label} className="contact__item">
                  <span className="contact__item-icon">{item.icon}</span>
                  <div>
                    <p className="contact__item-label">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="contact__item-value contact__item-link">{item.value}</a>
                      : <p className="contact__item-value">{item.value}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact__form-wrap animate-right delay-2">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="cf-name">Name</label>
                  <input id="cf-name" type="text" name="name" placeholder="e.g. John Doe"
                    value={form.name} onChange={handleChange} className="contact__input" required />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="cf-email">Email</label>
                  <input id="cf-email" type="email" name="email" placeholder="e.g. someone@example.com"
                    value={form.email} onChange={handleChange} className="contact__input" required />
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="cf-msg">Message</label>
                <textarea id="cf-msg" name="message" placeholder="Write your message here..."
                  rows={6} value={form.message} onChange={handleChange}
                  className="contact__input contact__textarea" required />
              </div>
              <button type="submit" className="contact__btn" disabled={status === 'sending'}>
                {status === 'sending' && '⏳ Sending...'}
                {status === 'sent' && '✓ Message Sent!'}
                {status === 'error' && '❌ Failed. Try Again'}
                {status === 'idle' && 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}