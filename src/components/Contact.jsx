import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact">
      <Reveal>
        <div className="contact-box">
          <span className="sec-tag">Contact</span>
          <h2>Have a project in mind?</h2>
          <p>
            Tell me what you need — a landing page, a store, a dashboard, or a Web3 front-end —
            and I&apos;ll build it fast, clean and responsive.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="mailto:andymulya13@gmail.com">
              Email Me
            </a>
            <a className="btn btn-ghost" href="https://github.com/andymulya" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
