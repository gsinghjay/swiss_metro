import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import projectsData from '../data/projects.json';
import './ProjectDetail.css';

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

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const foundProject = (projectsData as Project[]).find(p => p.slug === slug);

    setProject(foundProject || null);
    setLoading(false);
  }, [slug]);

  if (loading) return <Layout><div>Loading...</div></Layout>;
  if (!project) return <Navigate to="/projects" replace />;

  return (
    <Layout>
      <article className="project-detail">
        <div className="project-header" style={{ backgroundColor: project.color }}>
          <div className="project-header-content">
            <Link to="/projects" className="back-link">← BACK TO PHASES</Link>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
          </div>
        </div>

        <div className="project-content">
          <div className="content-container">
            <div className="project-details">
              {project.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
