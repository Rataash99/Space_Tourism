import React from 'react';

const Home = () => {
    return(
        <div className='home overflow-scroll flex flex-col items-center justify-start text-center w-[100%] pt-[7.4rem] gap-[5rem] md:pt-[12rem] md:gap-10 lg:flex-row lg:justify-between lg:px-[8rem] xl:px-[10rem] 2xl:px-[12rem] lg:text-left transition-all duration-500'>
            <div className='flex flex-col items-center md:gap-0 md:justify-center lg:items-start lg:justify-start gap-3 transition-all duration-500'>
                <h4 className=' font-light uppercase text-[#D0D6F9] font-["Barlow_condensed"] tracking-[3px] md:text-[1.1rem] lg:w-full lg:text-[1.7rem]'>So, you want to travel to</h4>
                <h1 className='text-[5.1rem] md:text-[7rem]'>SPACE</h1>
                <p className='text-[#D0D6F9] font-Barlow_Condensed max-w-[17.8rem] tracking-[0.3px] md:max-w-[24rem] font-lighter md:tracking-[0.5px] lg:leading-7'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div>
                <div className='relative text-center rounded-[50%] text-black text-[1.4rem] bg-white px-8 py-[3.9rem] uppercase md:text-3xl md:px-11 md:py-[5.5rem] lg:after:content-[""] lg:after:absolute lg:after:w-full lg:after:h-full lg:after:bg-white/50 lg:after:rounded-full lg:after:opacity-0 lg:hover:after:opacity-25 lg:hover:after:scale-150 lg:after:left-0 lg:after:top-0 lg:after:ease-out lg:after:duration-500 hover:cursor-pointer lg:mt-[10rem] z-[2000] transition-all duration-500'>Explore</div>
            </div>
        </div>
    )
}
export default Home;




