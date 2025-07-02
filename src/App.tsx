import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ConfidentialComputing = lazy(() => import('./pages/ConfidentialComputing'));
const QuantumComputing = lazy(() => import('./pages/QuantumComputing'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const CaseStudyConfidentialComputing = lazy(() => import('./pages/CaseStudyConfidentialComputing'));
const CaseStudyQuantum = lazy(() => import('./pages/CaseStudyQuantum'));
const CaseStudyEnterprise = lazy(() => import('./pages/CaseStudyEnterprise'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/confidential-computing" element={<ConfidentialComputing />} />
            <Route path="/services/quantum-computing" element={<QuantumComputing />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/confidential-computing" element={<CaseStudyConfidentialComputing />} />
            <Route path="/case-studies/quantum-computing" element={<CaseStudyQuantum />} />
            <Route path="/case-studies/togaf-enterprise-architecture" element={<CaseStudyEnterprise />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;