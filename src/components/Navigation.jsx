import React, { useState } from "react";

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState("Focus");
  const navItems = ["Focus", "Services", "Clients", "Team", "Contact"];
  const navItem = ["Focus", "Services", "Clients", "Team", "Contact"];


  return (
    <nav className="flex flex-col items-center sm:items-end">
      <ul className="flex flex-wrap justify-center sm:justify-end">

        {/* {navItems.map((item) => (
            <li
              key={item}
              className={`inline-block mr-4 cursor-pointer ${
                activeLink === item ? "text-orange-200" : ""
              }`}
              onClick={() => setActiveLink(item)}
            >
              {item}
              </li>
          ))} */}
        {navItem.map((item, index) => (
          <li
            className={`inline-block mr-4 cursor-pointer `}
          >

            <a key={index}
              href={`#${item.toLowerCase()}`}
              className={`text-white hover:text-orange-200 transition-colors duration-300 ${activeLink === item ? "text-orange-200 border-b-2  border-orange-200 border-solid w-fill pb-2" : ""
                }`}
              onClick={() => setActiveLink(item)}
            >

              {item}
            </a>
            {/* <div className="shrink-0 mt-2 h-px border border-orange-200 border-solid w-fill" /> */}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;