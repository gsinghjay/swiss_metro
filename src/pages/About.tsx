import { Layout } from '../components/Layout';
import './About.css';

export function About() {
  return (
    <Layout>
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">THE PROJECT</h1>
          <p className="hero-subtitle">Transforming Swiss design into Metro through strategic AI collaboration</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="bio">
              <h2>THE ASSIGNMENT</h2>
              <p>This site documents my journey through the Swiss Design Lineage project, where I transformed a traditional Swiss-style website into Microsoft's Metro design language using AI collaboration. The goal wasn't just to build a site, but to learn how to direct AI strategically while developing genuine design judgment.</p>
              <p>I chose Metro (Fluent Design) for its bold typography, tile-based layouts, and content-first philosophy. Working with AI, I made all design decisions while the AI handled implementation, creating a portfolio piece that demonstrates both the transformation and our collaboration process.</p>
              <p>The result is this site: authentically Metro in aesthetic, documenting the research, iteration, and refinement that went into understanding and applying a historic design language to modern web development.</p>
            </div>

            <div className="skills-section">
              <h2>WHAT I LEARNED</h2>
              <div className="skills-grid">
                <div className="skill-tile" style={{ backgroundColor: '#0078D7' }}>
                  <h3>AI DIRECTION</h3>
                  <p>Strategic prompting, iterative refinement, screenshot-driven feedback</p>
                </div>
                <div className="skill-tile" style={{ backgroundColor: '#D80073' }}>
                  <h3>DESIGN JUDGMENT</h3>
                  <p>Metro principles, typography hierarchy, authentic style recognition</p>
                </div>
                <div className="skill-tile" style={{ backgroundColor: '#00ABA9' }}>
                  <h3>ITERATION</h3>
                  <p>Multiple refinement cycles, quality standards, attention to detail</p>
                </div>
                <div className="skill-tile" style={{ backgroundColor: '#A4C400' }}>
                  <h3>DOCUMENTATION</h3>
                  <p>Process capture, design decisions, collaboration reflection</p>
                </div>
              </div>
            </div>

            <div className="contact-section">
              <h2>PROJECT DETAILS</h2>
              <div className="contact-grid">
                <div className="contact-tile" style={{ backgroundColor: '#FA6800' }}>
                  <span className="contact-label">COURSE</span>
                  <span className="contact-value">Swiss Design Lineage</span>
                </div>
                <div className="contact-tile" style={{ backgroundColor: '#000000' }}>
                  <span className="contact-label">INSTRUCTOR</span>
                  <span className="contact-value">Keith Williams</span>
                </div>
                <div className="contact-tile" style={{ backgroundColor: '#0078D7' }}>
                  <span className="contact-label">STYLE</span>
                  <span className="contact-value">Fluent/Metro (⭐⭐)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
