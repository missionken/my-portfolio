import { useEffect, useRef } from 'react'
import './Hero.css'
import kenPhoto from '../assets/ken.jpg'

const CIRCLE_TEXT = '  BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY   •   KEN MISSION    •  '
const CIRCLE_R    = 138
const SVG_SIZE    = 320
const CENTER      = SVG_SIZE / 2

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x     = Math.random() * canvas.width
        this.y     = Math.random() * canvas.height
        this.r     = Math.random() * 2 + 0.5
        this.dx    = (Math.random() - 0.5) * 0.4
        this.dy    = (Math.random() - 0.5) * 0.4
        this.alpha = Math.random() * 0.5 + 0.1
      }
      update() {
        this.x += this.dx
        this.y += this.dy
        if (this.x < 0 || this.x > canvas.width ||
            this.y < 0 || this.y > canvas.height) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(74,158,255,${this.alpha})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 90; i++) particles.push(new Particle())

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(74,158,255,${0.05 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <svg className="hero__waves" viewBox="0 0 1200 600"
          preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glow1" cx="60%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#1d4ed8" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#050d1a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#glow1)" />
          <path d="M-100 320 Q300 180 600 340 Q900 500 1300 280"
            fill="none" stroke="rgba(74,158,255,0.08)" strokeWidth="1.5" />
          <path d="M-100 380 Q250 250 550 390 Q850 530 1300 350"
            fill="none" stroke="rgba(74,158,255,0.06)" strokeWidth="1" />
          <path d="M-100 260 Q350 130 650 290 Q950 450 1300 220"
            fill="none" stroke="rgba(56,189,248,0.05)" strokeWidth="1" />
        </svg>
        <canvas ref={canvasRef} className="hero__particles" aria-hidden="true" />
      </div>

      <div className="hero__inner container">
        <div className="hero__content animate-left">
          <h2 className="hero__greeting">Hi, I'm</h2>
          <h1 className="hero__name">Ken Mission</h1>
          <p className="hero__sub">
            Information Technology student specializing in system development
            and building user-friendly websites. Committed to delivering
            practical, efficient, and responsive digital solutions.
          </p>
        </div>

        <div className="hero__visual animate-right delay-2">
          <div className="hero__circle-wrap">
            <svg className="hero__circle-svg"
              width={SVG_SIZE} height={SVG_SIZE}
              viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <path id="circlePath"
                  d={`M ${CENTER},${CENTER} m -${CIRCLE_R},0 a ${CIRCLE_R},${CIRCLE_R} 0 1,1 ${CIRCLE_R * 2},0 a ${CIRCLE_R},${CIRCLE_R} 0 1,1 -${CIRCLE_R * 2},0`}
                />
              </defs>
              <text className="hero__circle-text">
                <textPath href="#circlePath" startOffset="0%"
                  textLength={`${2 * Math.PI * CIRCLE_R}`}
                  lengthAdjust="spacingAndGlyphs">
                  {CIRCLE_TEXT}
                </textPath>
              </text>
            </svg>
            <div className="hero__avatar">
              <img src={kenPhoto} alt="Ken Mission" className="hero__avatar-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}