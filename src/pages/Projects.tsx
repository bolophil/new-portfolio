// src/components/Projects.tsx
import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectDetail from './ProjectDetail';

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);

  if (activeId) {
    const project = projects.find((p) => p.id === activeId)!;
    return (
      <ProjectDetail
        project={project}
        onBack={() => setActiveId(null)}
      />
    );
  }

  return (
    <section className="section" aria-labelledby="projects-heading">
      <header className="section-header">
        <h1 id="projects-heading" className="section-title">
          Web & UI/UX Projects
        </h1>
        <p className="section-intro">
          A selection of web development work demonstrating UI/UX design,
          front-end engineering, accessibility, and analytics for internal and
          external communications.
        </p>
      </header>

      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.id} className="card">
            <header className="card-header">
              <h2 className="card-title">{project.title}</h2>
              <p className="card-subtitle">{project.role}</p>
            </header>

            <p className="card-body-text">{project.summary}</p>

            {project.responsibilities.length > 0 && (
              <ul className="card-list">
                {project.responsibilities.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            <div className="card-meta">
              <div className="card-tag-row" aria-label="Technologies used">
                {project.tech.map((t) => (
                  <span key={t} className="card-tag card-tag--tech">
                    {t}
                  </span>
                ))}
              </div>

              {project.tags.length > 0 && (
                <div className="card-tag-row" aria-label="Project focus areas">
                  {project.tags.map((tag) => (
                    <span key={tag} className="card-tag card-tag--topic">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              className="btn"
              onClick={() => setActiveId(project.id)}
            >
              View case study →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
