import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { MetroTile } from '../components/MetroTile';
import postsData from '../data/posts.json';
import projectsData from '../data/projects.json';
import './Home.css';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  color: string;
  published_at: string;
}

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

export function Home() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);

  useEffect(() => {
    const projects = (projectsData as Project[])
      .filter(p => p.featured)
      .sort((a, b) => a.order_index - b.order_index)
      .slice(0, 3);

    const posts = (postsData as Post[])
      .filter(p => new Date(p.published_at) <= new Date())
      .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
      .slice(0, 4);

    setFeaturedProjects(projects);
    setRecentPosts(posts);
  }, []);

  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">SWISS DESIGN<br/>LINEAGE</h1>
          <p className="hero-subtitle">Transforming a Swiss website into Metro design through AI collaboration</p>
          <div className="hero-meta">
            <span>STUDENT PROJECT</span>
            <span>STYLE: FLUENT/METRO</span>
            <span>NOVEMBER 2025</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">TRANSFORMATION PHASES</h2>
          <div className="tile-grid">
            {featuredProjects.map((project, index) => (
              <MetroTile
                key={project.id}
                href={`/projects/${project.slug}`}
                color={project.color}
                size={index === 0 ? '2x1' : '1x1'}
                title={project.title}
                subtitle={project.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">DESIGN JOURNAL</h2>
          <div className="tile-grid">
            {recentPosts.map((post) => {
              const date = new Date(post.published_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              });
              return (
                <MetroTile
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  color={post.color}
                  size="1x1"
                  title={post.title}
                  subtitle={post.excerpt}
                  metadata={date}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tile-grid">
            <MetroTile
              href="/about"
              color="#000000"
              size="2x1"
              title="THE PROJECT"
              subtitle="How I transformed Swiss design into Metro through AI collaboration"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
