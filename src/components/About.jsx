import Reveal from './Reveal.jsx'
import { skills } from '../data/projects.js'

export default function About() {
  return (
    <section id="about">
      <div className="split">
        <Reveal>
          <span className="sec-tag">About Me</span>
          <h2 style={{ fontSize: 'clamp(30px,4.5vw,44px)', letterSpacing: '-1px', lineHeight: 1.15 }}>
            Developer, creator,
            <br />
            indie maker.
          </h2>
          <div className="about-card" style={{ marginTop: 26 }}>
            <p>
              Hi, I&apos;m <b>Andy Eka Mulya</b> from Sumenep, Indonesia. I run <b>NdysFortune</b>,
              a small shop selling hand-built website templates — every one designed, coded and
              verified by me, on desktop and mobile.
            </p>
            <p>
              I work in <b>vanilla HTML, CSS and JavaScript</b> on purpose: no heavy frameworks, no
              bloat — just fast, clean code that loads instantly and is easy to customise.
            </p>
            <p>
              Beyond templates, I build <b>Web3 front-ends</b> and hunt bugs in smart contracts and
              web apps — so the sites I ship are not just pretty, they&apos;re checked properly.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <span className="sec-tag">Skills</span>
          <h2
            style={{
              fontSize: 'clamp(30px,4.5vw,44px)',
              letterSpacing: '-1px',
              lineHeight: 1.15,
              marginBottom: 26,
            }}
          >
            What I do best.
          </h2>
          <div className="skills">
            {skills.map((s) => (
              <div className="skill" key={s.name}>
                <b>{s.name}</b>
                <span>{s.desc}</span>
                <div className="bar">
                  <i style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
