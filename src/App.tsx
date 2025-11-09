import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
