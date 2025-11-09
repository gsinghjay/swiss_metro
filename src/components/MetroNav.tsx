import { Link, useLocation } from 'react-router-dom';
import './MetroNav.css';

export function MetroNav() {
  const location = useLocation();

  return (
    <nav className="metro-nav">
      <div className="nav-container">
        <Link to="/" className="nav-brand">SWISS → METRO</Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link>
          <Link to="/blog" className={location.pathname.startsWith('/blog') ? 'active' : ''}>JOURNAL</Link>
          <Link to="/projects" className={location.pathname.startsWith('/projects') ? 'active' : ''}>PHASES</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>PROJECT</Link>
        </div>
      </div>
    </nav>
  );
}
