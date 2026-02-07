import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useMediaQuery } from './hooks/useMediaQuery';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { ProductImageryGallery } from './pages/ProductImageryGallery';
import { KrutrimDemos } from './pages/KrutrimDemos';
import { AIInvestmentResearchGuide } from './pages/AIInvestmentResearchGuide';
import { Reading } from './components/Reading';
import { Contact } from './components/Contact';

// Helper component to render app content
function AppContent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900">
      <div className="flex flex-1 overflow-hidden">
        {!isMobile && <Sidebar />}
        <main className={`flex-1 overflow-y-auto bg-white dark:bg-gray-900 ${isMobile ? 'pb-20' : ''}`}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/projects/ai-investment-research/guide" element={<AIInvestmentResearchGuide />} />
            <Route path="/product-imagery-gallery" element={<ProductImageryGallery />} />
            <Route path="/krutrim-demos" element={<KrutrimDemos />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </main>
      </div>
      {isMobile && <BottomNav />}
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
