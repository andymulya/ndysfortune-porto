import { useEffect, useRef, useState } from 'react'

export default function ProjectCard({ project }) {
  const cardRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const onMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`
  }
  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <article
      ref={cardRef}
      className={`project reveal${visible ? ' visible' : ''}${project.featured ? ' featured' : ''}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className={project.image ? 'thumb' : 'thumb vein-thumb'}>
        {project.image ? (
          <img src={project.image} alt={`${project.name} — ${project.subtitle}`} />
        ) : (
          <div className="inner">
            <div className="ticker">$VEIN</div>
            <div className="sub">Agent Vein — deposit-mining dApp on BNB Chain</div>
          </div>
        )}
        <span className="price">{project.price}</span>
      </div>
      <div className="body">
        <div>
          <h3>
            {project.name} <small>— {project.subtitle}</small>
          </h3>
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map((t) => (
              <span key={t.label} className={`tag${t.tone ? ` ${t.tone}` : ''}`}>
                {t.label}
              </span>
            ))}
          </div>
        </div>
        <div className="links">
          <a className="btn btn-primary btn-sm" href={project.demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          {project.github && (
            <a className="btn btn-ghost btn-sm" href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
