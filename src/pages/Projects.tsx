import { projects } from '../data/projects';
import { useState } from 'react';
import ProjectDetail from './ProjectDetail';

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);

  if (activeId) {
    const project = projects.find(p => p.id === activeId)!;
    return <ProjectDetail project={project} onBack={() => setActiveId(null)} />;
  }

  return (
    <section className="section" aria-labelledby="projects-heading">
      <h1 id="projects-heading">Web Development Projects</h1>
      <p>
        A selection of recent work illustrating UI/UX design, front-end engineering,
        accessibility, and analytics implementation.
      </p>
      <div className="card-grid">
        {projects.map(project => (
          <article key={project.id} className="card">
            <h2 className="card-title">{project.title}</h2>
            <p className="card-subtitle">{project.role}</p>
            <p>{project.summary}</p>
            <div className="card-tag-row">
              {project.tech.map(t => (
                <span key={t} className="card-tag">{t}</span>
              ))}
            </div>
            <button className="btn" onClick={() => setActiveId(project.id)}>
              View case study →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
