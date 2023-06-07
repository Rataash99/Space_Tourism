import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Content/assets/shared/logo.svg";
import hamburg from "../Content/assets/shared/icon-hamburger.svg";
import close from "../Content/assets/shared/icon-close.svg";

const Header = () => {
  const ulRef = useRef();
  const navRef = useRef();
  const [nav, setNav] = useState(false);

  const [under, setUnder] = useState({
    home: false,
    destination: false,
    crew: false,
    technology: false
  });

  const setUnderline = (e) => {
    if (e.target.classList.contains('Home')) {
      setUnder({
        home: true,
        destination: false,
        crew: false,
        technology: false
      })
    }
    else if (e.target.classList.contains('Destination')) {
      setUnder({
        home: false,
        destination: true,
        crew: false,
        technology: false
      })
    }
    else if (e.target.classList.contains('Crew')) {
      setUnder({
        home: false,
        destination: false,
        crew: true,
        technology: false
      })
    }
    else if (e.target.classList.contains('Technology')) {
      setUnder({
        home: false,
        destination: false,
        crew: false,
        technology: true
      })
    }
  }

  const toggleNav = (e) => {
    if (window.innerWidth > 767) {
      console.log(e.target)
      setUnderline(e);
      return;
    };
    if (!nav) {
      ulRef.current.style.transform = 'translatex(0%)';
      console.log("I'm not nav.....")
      // navRef.current.style.zIndex = '20'
    }
    else {
      ulRef.current.style.transform = 'translatex(100%)';
      console.log("I'm nav.....")
      // navRef.current.style.zIndex = 
    }
    setNav(!nav);
  }

  return (
    <nav ref={navRef} className="fixed h-0 flex justify-between items-start transition  duration-[4s] z-10 font-bold w-[100%] md:font-normal lg:mt-[2rem] ">
      <img className="p-7 lg:p-4 lg:ml-9 w-[6.2rem] lg:w-[5.5rem]" src={logo} alt="logo" />
      <img onClick={toggleNav} className="z-10 absolute right-5 top-9 md:hidden" src={nav ? close : hamburg} alt='hamburg transition duration-[4s]' />
      <ul ref={ulRef} className=" transition duration-500 translate-x-[100%] flex justify-start relative items-start flex-col top-0 right-0 gap-[2rem] before:inset-0 before:absolute before:backdrop-blur-xl before:bg-slate-400/[0.08] before:-z-10 min-h-[100vh] w-[68.2%] text-md uppercase text tracking-[3px] text-slate-100/[0.9] pl-10 pt-[8rem] md:flex-row md:min-h-fit md:translate-x-[0%] md:w-[59%] md:items-center md:text-sm md:p-0 md:justify-evenly lg:justify-center lg:gap-[4rem]">
        <hr className="hidden lg:block lg:absolute w-[40%] -left-[38%] h-1 opacity-30 xl:-left-[50%] xl:w-[53%]"></hr>
        <Link onClick={toggleNav} to='/home' className={`Home flex gap-[0.8rem] items-baseline w-[100%] md:justify-center md:py-8 md:w-fit md:hover:border-b-[3px] md:border-b-[3px] md:border-transparent md:hover:border-white/75 transition-all duration-100 ${under.home && 'md:border-b-[3px] md:border-b-white'}`}>
          <span className="text-slate-100 font-black font-Barlow_Condensed md:hidden lg:block ">00</span>Home
        </Link>
        <Link onClick={toggleNav} to='/destination' className={`Destination flex gap-[0.8rem] items-baseline w-[100%] md:justify-center md:py-8 md:w-fit md:hover:border-b-[3px] md:border-b-[3px] md:border-transparent md:hover:border-white/75 transition-all duration-500transition-all duration-100 ${under.destination && 'md:border-b-[3px] md:border-b-white'}`} >
          <span className="text-slate-100 font-black font-Barlow_Condensed md:hidden lg:block">01</span>Destination
        </Link>
        <Link onClick={toggleNav} to='/crew' className={`Crew flex gap-[0.8rem] items-baseline w-[100%] md:justify-center md:py-8 md:w-fit md:hover:border-b-[3px] md:border-b-[3px] md:border-transparent md:hover:border-white/75 transition-all duration-100 ${under.crew && 'md:border-b-[3px] md:border-b-white'}`} >
          <span className="text-slate-100 font-black font-Barlow_Condensed md:hidden lg:block">02</span>Crew
        </Link>
        <Link onClick={toggleNav} to='/technology' className={`Technology flex gap-[0.8rem] items-baseline w-[100%] md:justify-center md:py-8 md:w-fit md:hover:border-b-[3px] md:border-b-[3px] md:border-transparent md:hover:border-white/75 transition-all duration-100 ${under.technology && 'md:border-b-[3px] md:border-b-white'}`} >
          <span className="text-slate-100 font-black font-Barlow_Condensed md:hidden lg:block">03</span>Technology
        </Link>
      </ul>
    </nav>
  );
};
export default Header;
