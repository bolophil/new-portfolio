import type { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <section className="section" aria-labelledby="project-detail-heading">
      <button className="btn" onClick={onBack}>
        ← Back to projects
      </button>

      <h1 id="project-detail-heading" style={{ marginTop: '1rem' }}>
        {project.title}
      </h1>
      <p><strong>Role:</strong> {project.role}</p>

      <h2>Overview</h2>
      <p>{project.summary}</p>

      <h2>Responsibilities</h2>
      <ul>
        {project.responsibilities.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Tech Stack</h2>
      <p>{project.tech.join(' · ')}</p>

      <h2>Outcomes</h2>
      <p>
        {/* Replace this with your real measurable outcomes */}
        Increased user engagement and task completion rates, informed by web analytics.
      </p>
    </section>
  );
}
