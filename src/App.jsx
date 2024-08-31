import React from 'react';
import { Layout, Header, Footer, Hero } from './components';

const App = () => {
  return (
    <>
      <div className="flex flex-col text-white rounded-none">
        <div className="flex relative flex-col items-center px-20 pt-8 pb-36 w-full min-h-[730px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e846012112a4e814d41d7e81324b9759b90885e5170754ee9eaa4004921f096?placeholderIfAbsent=true&apiKey=95b40f35762941bfb8c2b598dc225fe8" alt="" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative flex-col items-start mb-0 max-w-full w-[1111px] max-md:mb-2.5">
           
            <Header />
            <Layout>
              <Hero />
            </Layout>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;