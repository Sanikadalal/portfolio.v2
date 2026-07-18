import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Sofy = lazy(() => import('./pages/Sofy'));
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeBanner from './components/MarqueeBanner';
import AboutSection from './components/AboutSection';
import AboutMeSection from './components/AboutMeSection';
import BlogSection from './components/BlogSection';
import ResumeSection from './components/ResumeSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function HomePage() {
  useEffect(() => {
    const interactives = document.querySelectorAll('a, button, input, textarea, .interactive');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering-link'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering-link'));
    });
  }, []);

  return (
    <div className="text-gray-900 font-sans antialiased">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <AboutSection />
        <BlogSection />
        <AboutMeSection />
        <ResumeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/sofy" element={<Sofy />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
