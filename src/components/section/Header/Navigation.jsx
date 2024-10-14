import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const Navigation = () => {
  const basename = process.env.NODE_ENV === 'production' ? '/reactapp' : '';

  const [activeLink, setActiveLink] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { name: 'О соборе', url: '/about' },
    { name: 'Новости', url: '/news' },
    { name: 'Деятельность', url: '/services' },
    { name: 'Главная', url: '/' },
    { name: 'Образование', url: '/edu' },
    { name: 'Прихожанам', url: '/crowd' },
    { name: 'Контакты', url: '/contactss' },
  ];


  return (
    <>
      <nav className="relative z-10 px-20 py-10 max-md:px-5 max-sm:hidden">
        <ul className="flex flex-wrap justify-between lg:grid lg:grid-cols-7 lg:gap-7 gap-5">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <li className={`flex flex-wrap  content-center justify-center ${item.name === 'Главная' ? 'max-lg:hidden' : ''}`} >
                <a key={index}
                  href={`${basename}${item.url.toLowerCase()}`}
                  className={` xl:text-base text-xs tracking-[.035em] text-white font-['Georgia'] uppercase hover:text-orange-200 ${activeLink === item ? "text-orange-200" : ""
                    }`}
                  onClick={() => setActiveLink(item)}
                >
                  {item.name === 'Главная' ? (
                    <>
                      <img loading="lazy" src={`${basename}/logo.svg`} alt="" className="" />
                    </>
                  ) : item.name}
                </a>
              </li>
            </React.Fragment>
          ))}
        </ul>

      </nav>
      <nav className="fixed w-full text-indigo-200 hidden max-sm:block z-20">
        <div className="flex flex-wrap justify-between content-center bg-blue-950 p-4 uppercase font-['Georgia'] tracking-[.035em]">
          Николо-Морской собор
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <XMarkIcon className=" w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
        <ul className={`fixed right-0 w-1/2 bg-blue-950 px-4 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out`}>
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <li className={`pb-3 ${item.name === 'Главная' ? 'hidden' : ''}`} >
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