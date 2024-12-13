import React from 'react';
import './App.scss';
import { Layout } from './components/utilities/Layout/Layout';
import { HomePage } from './components/pages/HomePage/HomePage';
import { Portfolio } from './components/pages/Portfolio/Portfolio';
import { Project } from './components/pages/Project/Project';
import { About } from './components/pages/About/About';
import { CertificateList } from './components/pages/CertificateList/CertificateList';
import { Course } from './components/pages/Course/Course';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Create a client
const queryClient = new QueryClient();

export function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/certificates" element={<CertificateList />} />
              <Route path="/about/certificates/:id" element={<Course />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
