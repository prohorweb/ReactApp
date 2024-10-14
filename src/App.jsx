import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import NotFound from './pages/NotFound'; // Import your 404 component
import Layout from './Layout';

const App = () => {
  // Use basename only in production
  const basename = process.env.NODE_ENV === 'production' ? '/reactapp' : '';
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/news" element={<Layout><News /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
