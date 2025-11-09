import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import postsData from '../data/posts.json';
import './BlogPost.css';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  color: string;
  published_at: string;
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const foundPost = (postsData as Post[]).find(
      p => p.slug === slug && new Date(p.published_at) <= new Date()
    );

    setPost(foundPost || null);
    setLoading(false);
  }, [slug]);

  if (loading) return <Layout><div>Loading...</div></Layout>;
  if (!post) return <Navigate to="/blog" replace />;

  const date = new Date(post.published_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Layout>
      <article className="post">
        <div className="post-header" style={{ backgroundColor: post.color }}>
          <div className="post-header-content">
            <Link to="/blog" className="back-link">← BACK TO JOURNAL</Link>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">{date}</div>
          </div>
        </div>

        <div className="post-content">
          <div className="content-container">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
}
