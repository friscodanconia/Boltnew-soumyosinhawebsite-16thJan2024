import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from './hooks/useMediaQuery';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Reading } from './components/Reading';
import { Contact } from './components/Contact';
import { SearchProvider } from './context/SearchContext';

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <Router>
      <SearchProvider>
        <div className="h-screen flex flex-col bg-white dark:bg-gray-900">
          <div className="flex flex-1 overflow-hidden">
            {!isMobile && <Sidebar />}
            <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
              <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/reading" element={<Reading />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
          {isMobile && <BottomNav />}
        </div>
      </SearchProvider>
    </Router>
  );
}
