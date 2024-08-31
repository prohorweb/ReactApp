import React from "react";
import Navigation from './Navigation.jsx';

function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 sm:gap-5 mb-8 sm:mb-12">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bd43eb46c0be7ca7b8d26e61a11fd47923032810d093e47d61310dae727b3a7?placeholderIfAbsent=true&apiKey=95b40f35762941bfb8c2b598dc225fe8"
        alt="Company Logo"
        className="object-contain w-36 sm:w-40 md:w-44 lg:w-48 max-w-full aspect-[4.37]"
      />
      <Navigation />
    </header>
  );
}

export default Header;