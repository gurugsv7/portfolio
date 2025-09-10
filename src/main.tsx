import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </Router>
  </StrictMode>
);

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CertificationsPage from './CertificationsPage';
