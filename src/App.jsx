import React from 'react';
import { Layout, Header, Footer, Hero } from './components';

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
      </Layout>
      <Footer />
    </>
  );
};

export default App;