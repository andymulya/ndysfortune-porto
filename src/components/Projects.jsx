import Reveal from './Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects">
      <Reveal>
        <div className="sec-head">
          <span className="sec-tag">Selected Work</span>
          <h2>
            Projects that are live
            <br />
            on GitHub &amp; Vercel.
          </h2>
          <p>
            Every project below is a finished, working website — deployed live, with source on
            GitHub. Click through and try them.
          </p>
        </div>
      </Reveal>
      <div className="projects">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
