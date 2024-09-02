import React from "react";
import Navigation from './Navigation.jsx';

const Header = () => {
  return (
    <header className="w-full min-h-[813px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/42f12883fcb4c64ff0207a5cddce104e77edae5b2471e49ab1809eb9e076d0e9?placeholderIfAbsent=true&apiKey=95b40f35762941bfb8c2b598dc225fe8" alt="" className="-z-10 object-cover absolute inset-0 size-full" />
      <Navigation />
    </header>
  );
};

export default Header;