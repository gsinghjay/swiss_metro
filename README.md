# Swiss Design Lineage - Metro Transformation

A student project documenting the transformation of a Swiss-style website into Microsoft's Metro design language through AI collaboration.

## About

This site was created as part of the Swiss Design Lineage course, where students learn to work strategically with AI while developing design judgment. The project demonstrates:

- Authentic Metro/Fluent design principles
- Bold typography and tile-based layouts
- Content-first philosophy
- Strategic AI collaboration process

## Design Features

- **Typography**: Dramatically large hero text (96px) with clear hierarchy
- **Colors**: Systematic Metro palette (Microsoft Blue, Magenta, Teal, Lime)
- **Layout**: Tile-based grid system with multiple size variants
- **Responsive**: Mobile-first design that reflows gracefully
- **Flat Design**: Pure Metro aesthetic without gradients or shadows

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Routing**: React Router 7
- **Data**: JSON files (no database)
- **Styling**: CSS Modules

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is configured for GitHub Pages deployment. Push to `main` branch to trigger automatic deployment via GitHub Actions.

### Manual Setup for GitHub Pages

1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. Push to main branch to deploy

## Project Structure

```
src/
├── components/      # Reusable components (MetroNav, MetroTile, Layout)
├── pages/          # Page components (Home, Blog, Projects, About)
├── data/           # JSON data files (posts.json, projects.json)
└── index.css       # Global styles
```

## Educational Context

**Course**: Swiss Design Lineage
**Instructor**: Keith Williams
**Style**: Fluent/Metro (⭐⭐ Intermediate)
**Date**: November 2025

This project explores how to transform one design language into another while maintaining authenticity and learning to direct AI effectively.

## License

Educational project - All Rights Reserved
