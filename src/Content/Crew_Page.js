import React, { useContext, useEffect, useState, useRef } from 'react';
import { GlobalContext } from '../App';
import douglas from './assets/crew/image-douglas-hurley.png'
import mark from './assets/crew/image-mark-shuttleworth.png'
import victor from './assets/crew/image-victor-glover.png'
import anousheh from './assets/crew/image-anousheh-ansari.png'
import bg from '../Content/assets/destination/background-destination-mobile.jpg'

const Crew_Page = () => {

    const refRole = useRef();
    const refBio = useRef();
    const refName = useRef();
    const refImage = useRef();

    const localContext = useContext(GlobalContext);
    const {obj, setObj} = localContext;
    const destination_Data = obj.data['crew'];
    const [under, setUnder] = useState({
        douglas : false,
        mark : false,
        victor : false,
        anousheh : false
    });

    const setUnderline = (e) => {
        if(e.target.classList.contains('DouglasHurley')){
            setUnder({
                douglas : true,
                mark : false,
                victor : false,
                anousheh : false
            })
        }
        else if(e.target.classList.contains('MarkShuttleworth')){
            setUnder({
                douglas : false,
                mark : true,
                victor : false,
                anousheh : false
            })
        }
        else if(e.target.classList.contains('VictorGlover')){
            setUnder({
                douglas : false,
                mark : false,
                victor : true,
                anousheh : false
            })
        }
        else if(e.target.classList.contains('AnoushehAnsari')){
            setUnder({
                douglas : false,
                mark : false,
                victor : false,
                anousheh : true
            })
        }
    }
    
    const addContent = (e) => {
        destination_Data.map((item, index) => {
            if(e.target.classList.contains(item.name.replace(/\s/g, ''))){
                refRole.current.innerHTML = destination_Data[index].role;
                refBio.current.innerHTML = destination_Data[index].bio;
                refName.current.innerHTML = destination_Data[index].name;
                refImage.current.src = item.name == 'Douglas Hurley' ? douglas : item.name == 'Mark Shuttleworth' ? mark : item.name == 'Victor Glover' ? victor : anousheh;
                setUnderline(e);
            }
        })
    }

    return(
        <div className='crew flex flex-col items-center text-center gap-[1.9rem] font-Barlow_Condensed pt-[5.6rem] w-[100%] overflow-scroll md:items-start md:gap-0 md:pt-[7rem] lg:gap-8 lg:pt-[11rem] transition-all duration-500'>
            <div className='flex gap-3 tracking-[2.8px] md:pl-9 lg:text-[1.3rem] lg:w-full lg:pl-[3.5rem] xl:pl-[11rem] transition-all duration-500'>
                <span className='opacity-50'>02</span>
                <h2 className='uppercase'> Meet Your Crew</h2>
            </div>
            <div className='flex flex-col items-center gap-[2rem] w-[100%] lg:h-[60vh] lg:justify-end lg:items-start transition-all duration-500'>
                <div className=' transition-all duration-500'>
                    <img ref = {refImage} className='w-[11.1rem] mx-auto md:absolute md:w-[15.8rem] md:bottom-0 md:left-[38%] lg:-right-[14rem] lg:w-[28rem] xl:-right-[25rem] 2xl:w-[30rem]' src = {douglas} />
                    <hr className='border-none h-[1px] w-80 bg-zinc-600 opacity-75 md:hidden'></hr>
                </div>
                <div className ='gap-[2rem] flex flex-col md:flex-col-reverse lg:gap-[6rem] lg:items-start lg:text-start lg:pl-[3.5rem] xl:w-full xl:pl-[11rem] transition-all duration-500'>
                    <ul className='flex flex-row gap-5 justify-center tracking-[2px]' onClick = {addContent}>
                        <li className = {`DouglasHurley p-[0.35rem] rounded-full bg-gray-500 cursor-pointer xl:p-[0.4rem] transition-all duration-100 hover:bg-gray-400 ${under.douglas && 'bg-white' }`}></li>
                        <li className= {`MarkShuttleworth p-[0.35rem] rounded-full bg-gray-500 cursor-pointer xl:p-[0.4rem] transition-all duration-100 hover:bg-gray-400 ${under.mark && 'bg-white' }`} ></li>
                        <li className= {`VictorGlover p-[0.35rem] rounded-full bg-gray-500 cursor-pointer xl:p-[0.4rem] transition-all duration-100 hover:bg-gray-400 ${under.victor && 'bg-white' }`} ></li>
                        <li className= {`AnoushehAnsari p-[0.35rem] rounded-full bg-gray-500 cursor-pointer xl:p-[0.4rem] transition-all duration-100 hover:bg-gray-400 ${under.anousheh && 'bg-white' }`} ></li>
                    </ul>
                    <div className='flex flex-col md:gap-1 lg:gap-3 transition-all duration-500'>
                        <h2 className='text-slate-400 uppercase font-Bellefair text-lg lg:text-2xl' ref = {refRole}>Commander</h2>
                        <div className='flex flex-col gap-4 lg:gap-8'>
                            <h1 className='text-[1.7rem] font-Bellefair uppercase text-white md:text-4xl lg:text-6xl xl:text-[4.3rem]' ref = {refName}>Douglas Hurley</h1>
                            <p className='max-w-[20.2rem] md:max-w-[30rem] tracking-[1px] md:tracking-normal lg:text-xl lg:max-w-[25rem] lg:leading-7 xl:tracking-[1px] xl:text-[1.25rem] xl:max-w-[28rem] xl:leading-8'ref = {refBio}>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    )
}
export default Crew_Page;