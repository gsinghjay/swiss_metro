import { Link } from 'react-router-dom';
import './MetroTile.css';

interface MetroTileProps {
  href: string;
  color: string;
  size?: '1x1' | '2x1' | '1x2' | '2x2';
  title: string;
  subtitle?: string;
  metadata?: string;
}

export function MetroTile({ href, color, size = '1x1', title, subtitle, metadata }: MetroTileProps) {
  return (
    <Link to={href} className="metro-tile" data-size={size} style={{ backgroundColor: color }}>
      <div className="tile-content">
        {metadata && <div className="tile-metadata">{metadata}</div>}
        <h3 className="tile-title">{title}</h3>
        {subtitle && <p className="tile-subtitle">{subtitle}</p>}
      </div>
    </Link>
  );
}
