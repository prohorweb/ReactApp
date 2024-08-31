import React from "react";

function Hero() {
    return ( 
        <>
            <h1 className="mt-32 text-6xl font-light leading-[70px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                Investment Banking <br /> for The Digital Era
            </h1>
            <p className="mt-10 text-xl leading-8 w-[692px] max-md:max-w-full">
                Save time, money, and stress with our turn-key fundraising solution and gain exposure to an extensive network of highlyqualified investors.
            </p>
            <button className="px-8 py-7 mt-24 text-lg font-bold text-center uppercase bg-orange-200 rounded-md max-md:px-5 max-md:mt-10">
                Apply for consultation
            </button>
        </>
    );
}

export default Hero;