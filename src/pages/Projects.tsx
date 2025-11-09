import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { MetroTile } from '../components/MetroTile';
import projectsData from '../data/projects.json';
import './Projects.css';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  color: string;
  featured: boolean;
  order_index: number;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const sortedProjects = (projectsData as Project[])
      .sort((a, b) => a.order_index - b.order_index);

    setProjects(sortedProjects);
  }, []);

  return (
    <Layout>
      <section className="projects-hero">
        <div className="hero-content">
          <h1 className="hero-title">TRANSFORMATION</h1>
          <p className="hero-subtitle">The three phases of converting Swiss design to Metro</p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          {projects.length > 0 ? (
            <div className="tile-grid">
              {projects.map((project, index) => (
                <MetroTile
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  color={project.color}
                  size={index % 3 === 0 ? '2x1' : '1x1'}
                  title={project.title}
                  subtitle={project.description}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>NO PROJECTS YET</h2>
              <p>Check back soon for new work</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
