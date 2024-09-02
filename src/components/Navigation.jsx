import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { name: 'О соборе', url: 'about' },
    { name: 'Новости', url: 'news' },
    { name: 'Деятельность', url: 'services' },
    { name: 'Главная', url: '/' },
    { name: 'Образование', url: 'edu' },
    { name: 'Прихожанам', url: 'crowd' },
    { name: 'Контакты', url: 'contact' },
  ];


  return (
    <>
      <nav className="px-20 pt-10 pb-16 max-md:px-5 max-sm:hidden">
        <ul className="flex flex-wrap justify-center lg:grid lg:grid-cols-7 lg:gap-7 gap-5">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <li className={`flex flex-wrap  content-center justify-center ${item.name === 'Главная' ? 'max-lg:hidden' : ''}`} >
                <a key={index}
                  href={`#${item.url.toLowerCase()}`}
                  className={` xl:text-base text-xs tracking-[.035em] text-white font-['Georgia'] uppercase hover:text-orange-200 ${activeLink === item ? "text-orange-200" : ""
                    }`}
                  onClick={() => setActiveLink(item)}
                >
                  {item.name === 'Главная' ? (
                    <>
                      <img loading="lazy" src="/logo.svg" alt="" className="" />
                    </>
                  ) : item.name}
                </a>
              </li>
            </React.Fragment>
          ))}
        </ul>

      </nav>
        <nav className="fixed w-full text-indigo-200 hidden max-sm:block ">
          <div className="flex flex-wrap justify-between content-center text-sm/6 bg-blue-950 p-2 uppercase font-['Georgia'] tracking-[.035em]">
              Николо-Морской собор
              <button onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <XMarkIcon className=" w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        {/* <div className={`fixed top-0 right-0 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out`}>Menu Item 1</div> */}
        <ul className={`fixed top-10 right-0 w-1/2 bg-blue-950 px-4 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out`}>
        {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <li className={`pb-3`} >
                <a key={index}
                  href={`#${item.url.toLowerCase()}`}
                  className={`tracking-[.035em] hover:text-orange-200 ${activeLink === item ? "text-orange-200" : ""
                    }`}
                  onClick={() => setActiveLink(item)}
                >
                  {item.name}
                </a>
              </li>
            </React.Fragment>
          ))}
        </ul>
        </nav>



    </>

  );
}

export default Navigation;