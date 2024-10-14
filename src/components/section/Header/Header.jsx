import React from "react";
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Hero from './Hero.jsx';
import Carousel from './Carousel.jsx';


const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/19cbab9e32849c7515c7f2b59feafed51724f8213b2b8ca6bc89f4ab24e2724d?placeholderIfAbsent=true&apiKey=95b40f35762941bfb8c2b598dc225fe8", title: "Воскресная школа" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/15cb78f285eb51cdefd96e40a446d7f919fd2983de6c707c713519c7ef36f569?placeholderIfAbsent=true&apiKey=95b40f35762941bfb8c2b598dc225fe8", title: "Прихожанам" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d05bf0c6935d1038e35a06ab7dba2373c0d234cd0b7d69920c9b7d1e6152326?placeholderIfAbsent=true&apiKey=95b40f35762941bfb8c2b598dc225fe8", title: "Экскурсии" },

  { src: 'https://cy92216.tw1.ru/wp-content/uploads/2024/04/slide_1.jpg', title: "Паломникам" },
  { src: 'https://cy92216.tw1.ru/wp-content/uploads/2024/04/slide_2.jpeg', title: "Прихожанам" },
  { src: 'https://cy92216.tw1.ru/wp-content/uploads/2024/04/slide_3.jpeg', title: "Детям" },
  { src: 'https://cy92216.tw1.ru/wp-content/uploads/2024/04/slide_2.jpeg', title: "Прихожанам" },
  { src: 'https://cy92216.tw1.ru/wp-content/uploads/2024/04/slide_3.jpeg', title: "Детям" },
  { src: 'https://cy92216.tw1.ru/wp-content/uploads/2024/04/slide_1.jpg', title: "Паломникам" },
];

const basename = process.env.NODE_ENV === 'production' ? '/reactapp' : '';

const Header = () => {
  const location = useLocation();
  return (
    <header className="w-full relative">
      <section className="container p-0 flex flex-wrap justify-center mb-12">
          <Navigation />
        {location.pathname === '/' ? (<Hero />) : (
          <>
            <img  src={`${basename}/bg.png`}  alt="" className=" object-cover absolute inset-0 size-full" />
            <div className="mix-blend-multiply bg-blue-950 opacity-60 object-cover absolute inset-0 size-full"></div>
          </>
        )}
      </section>
      {location.pathname === '/' && <Carousel images={images} />}
    </header>
  );
};

export default Header;