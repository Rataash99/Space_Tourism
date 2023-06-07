import React, { useContext, useEffect, useState, useRef } from 'react';
import { GlobalContext } from '../App';
import moon from './assets/destination/image-moon.png'
import mars from './assets/destination/image-mars.png'
import europa from './assets/destination/image-europa.png'
import titan from './assets/destination/image-titan.png'
import bg from '../Content/assets/destination/background-destination-mobile.jpg'

const Destination_Page = () => {

    const refContent = useRef();
    const refDistance = useRef();
    const refTravel = useRef();
    const refName = useRef();
    const refImage = useRef();

    const localContext = useContext(GlobalContext);
    const {obj, setObj} = localContext;
    const destination_Data = obj.data['destinations'];
    const [under, setUnder] = useState({
        Moon : false,
        Mars : false,
        Europa : false,
        Titan : false
    });

    const setUnderline = (e) => {
        if(e.target.classList.contains('Moon')){
            setUnder({
                Moon : true,
                Mars : false,
                Europa : false,
                Titan : false
            })
        }
        else if(e.target.classList.contains('Mars')){
            setUnder({
                Moon : false,
                Mars : true,
                Europa : false,
                Titan : false
            })
        }
        else if(e.target.classList.contains('Europa')){
            setUnder({
                Moon : false,
                Mars : false,
                Europa : true,
                Titan : false
            })
        }
        else if(e.target.classList.contains('Titan')){
            setUnder({
                Moon : false,
                Mars : false,
                Europa : false,
                Titan : true
            })
        }
    }
   
    const addContent = (e) => {
        destination_Data.map((item, index) => {
            if(e.target.classList.contains(item.name)){
                refContent.current.innerHTML = destination_Data[index].description;
                refDistance.current.innerHTML = destination_Data[index].distance;
                refTravel.current.innerHTML = destination_Data[index].travel;
                refName.current.innerHTML = destination_Data[index].name;
                refImage.current.src = item.name == 'Moon' ? moon : item.name == 'Mars' ? mars : item.name == 'Europa' ? europa : titan;
                setUnderline(e);
            }
        })
    }

    return(
        <div className='destination flex flex-col items-center text-center gap-[1.9rem] font-Barlow_Condensed pt-[5.6rem] w-[100%] overflow-scroll md:pt-[5rem] md:flex-row md:items-start md:relative transition-all duration-500'>
            <div className='flex gap-3 tracking-[2.8px] md:w-full md:absolute md:text-[1.1rem] md:pl-8 lg:pl-[8rem] xl:pl-[10rem] 2xl:pl-[12rem] lg:text-[1.2rem] xl:text-[1.4rem] md:gap-5 md:top-32 lg:top-44 transition-all duration-500'>
                <span className='opacity-50'>01</span>
                <h2 className='uppercase'> Pick Your Destination</h2>
            </div>
            <div className='flex flex-col items-center gap-[1.9rem] md:justify-center md:w-full md:pt-[6rem] md:gap-[1.5rem] lg:flex-row lg:justify-center lg:gap-[6rem] xl:gap-[8rem] 2xl:gap-[15rem] lg:h-[86vh] transition-all duration-500'>
                <img ref = {refImage} className='animate-spin-slow w-[11.1rem] md:w-[20rem] 2xl:w-[23rem] transition-all duration-500' src = {moon} />
                <div className ='gap-[1.7rem] flex flex-col md:gap-[0.6rem] lg:max-w-[27rem] lg:items-start lg:gap-0  transition-all duration-500'>
                    <ul className='flex flex-row gap-5 justify-center tracking-[2px] md:text-[14px] md:gap-[1.6rem] xl:gap-[2rem]' onClick = {addContent}>
                        <li className = {`Moon cursor-pointer py-2 hover:border-b-[3px] border-b-[3px] border-transparent hover:border-white/50 transition-all duration-100 ${under.Moon && 'border-b-[3px] border-b-white' }`} >MOON</li>
                        <li className= {`Mars cursor-pointer py-2 hover:border-b-[3px] border-b-[3px] border-transparent hover:border-white/50 transition-all duration-100 ${under.Mars && 'border-b-[3px] border-b-white' }`} >MARS</li>
                        <li className= {`Europa cursor-pointer py-2 hover:border-b-[3px] border-b-[3px] border-transparent hover:border-white/50 transition-all duration-100 ${under.Europa && 'border-b-[3px] border-b-white' }`} >EUROPA</li>
                        <li className= {`Titan cursor-pointer py-2 hover:border-b-[3px] border-b-[3px] border-transparent hover:border-white/50 transition-all duration-100 ${under.Titan && 'border-b-[3px] border-b-white' }`} >TITAN</li>
                    </ul>
                    <div className='flex flex-col md:items-center transition-all duration-500'>
                        <h2 ref = {refName} className='text-[3.5rem] font-Bellefair uppercase md:text-[3.8rem] md:w-full lg:text-left lg:text-[5.3rem] 2xl:text-[6rem]'>MOON</h2>
                        <p ref = {refContent} className='text-[#D0D6F9] max-w-[20.3rem] tracking-[1px] md:text-[14px] md:max-w-[29.5rem] lg:text-left lg:tracking-[1.3px] lg:text-[1.1rem]'>{destination_Data[0]['description']}.</p>
                    </div>
                    <hr className='border-none lg:w-full h-[1px] bg-zinc-700 opacity-75 lg:h-[1px] md:mt-8 md:mb-3'></hr>
                    <div className='flex flex-col gap-[1.9rem] md:flex-row md:gap-[5rem] md:justify-center transition-all duration-500'>
                        <div className='uppercase flex flex-col gap-2 lg:text-left transition-all duration-500'>
                            <p className='text-[#D0D6F9] tracking-[2px] md:text-[13px]'> Avg. distance</p>
                            <h3  ref = {refDistance} className='text-3xl font-Bellefair md:text-3xl'> {destination_Data[0]['distance']}</h3>
                        </div>
                        <div className='uppercase flex flex-col gap-2 lg:text-left transition-all duration-500'>
                            <p className='text-[#D0D6F9] tracking-[2px] md:text-[13px]'> Est. Travel Time</p>
                            <h3  ref = {refTravel} className='text-3xl font-Bellefair md:text-3xl'> {destination_Data[0]['travel']}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destination_Page;