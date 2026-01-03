import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useMediaQuery } from './hooks/useMediaQuery';
import { Sidebar } from './components/Sidebar';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { ProductImageryGallery } from './pages/ProductImageryGallery';
import { KrutrimDemos } from './pages/KrutrimDemos';
import { Reading } from './components/Reading';
import { Contact } from './components/Contact';
import { MobileLanding } from './components/MobileLanding';

// Helper component to conditionally render mobile landing or content
function AppContent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const shouldShowMobileLanding = isMobile && isHomePage;
  
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900">
      <div className="flex flex-1 overflow-hidden">
        {!isMobile && <Sidebar />}
        <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
          {shouldShowMobileLanding ? (
            <MobileLanding />
          ) : (
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/product-imagery-gallery" element={<ProductImageryGallery />} />
              <Route path="/krutrim-demos" element={<KrutrimDemos />} />
              <Route path="/reading" element={<Reading />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/about" replace />} />
            </Routes>
          )}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}
