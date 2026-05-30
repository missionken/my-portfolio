import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title animate-up">About Me</h2>
        <div className="section-divider animate-up delay-1" />
        <div className="about__body animate-up delay-2">
          <p className="about__para">
            Hello! I am <strong>Ken Mission</strong>, an Information Technology student passionate about building reliable, user-friendly web solutions. 
            I find great fulfillment in transforming ideas into fully functional websites and applications, ensuring every project is both visually appealing and technically sound.
          </p>
          <p className="about__para">
            I believe in learning by doing. I approach my work with a disciplined mindset and a genuine curiosity for how technology shapes everyday life. 
            My development philosophy centers on writing clean, maintainable code and designing intuitive interfaces, always prioritizing the end-user experience. 
            When faced with technical challenges, I rely on a logical and analytical approach to find the most practical solutions.
          </p>
          <p className="about__para">
          Beyond coding, I also have a keen interest in database management and IT support. I enjoy learning how different systems work together, and I always strive to create digital experiences that are simple, efficient, and easy to use.
          </p>
        </div>
      </div>
    </section>
  )
}