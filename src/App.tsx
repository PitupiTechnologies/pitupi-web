
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LazyMotion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Ambassador } from './pages/Ambassador';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';

const loadFeatures = () => import('framer-motion').then((mod) => mod.domAnimation);

function App() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <Router>
        <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ambassadors" element={<Ambassador />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </div>
          <Footer />
      </div>
    </Router>
    </LazyMotion>
  );
}

export default App;
