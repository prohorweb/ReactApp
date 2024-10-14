import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Layout from './Layout';
import About from './pages/About';

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/news" element={<Layout><News /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
      </Routes>
    </>
  );
};

export default App;