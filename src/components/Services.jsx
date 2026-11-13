import Reveal from './Reveal.jsx'
import { services } from '../data/projects.js'

export default function Services() {
  return (
    <section id="services">
      <Reveal>
        <div className="sec-head">
          <span className="sec-tag">Services</span>
          <h2>What I can build for you.</h2>
          <p>Front-end only, delivered as clean source code — ready to host anywhere.</p>
        </div>
      </Reveal>
      <Reveal>
        <div className="services">
          {services.map((s) => (
            <div className="service" key={s.title}>
              <div className={`ic ${s.tint}`}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
