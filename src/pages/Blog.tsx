import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { MetroTile } from '../components/MetroTile';
import postsData from '../data/posts.json';
import './Blog.css';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  color: string;
  published_at: string;
}

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const filteredPosts = (postsData as Post[])
      .filter(p => new Date(p.published_at) <= new Date())
      .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

    setPosts(filteredPosts);
  }, []);

  return (
    <Layout>
      <section className="blog-hero">
        <div className="hero-content">
          <h1 className="hero-title">DESIGN JOURNAL</h1>
          <p className="hero-subtitle">Documenting the transformation from Swiss to Metro design</p>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          {posts.length > 0 ? (
            <div className="tile-grid">
              {posts.map((post) => {
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
          ) : (
            <div className="empty-state">
              <h2>NO POSTS YET</h2>
              <p>Check back soon for new content</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
