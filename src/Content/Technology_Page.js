import React, { useContext, useEffect, useState, useRef } from 'react';
import { GlobalContext } from '../App';
import spacec from "./assets/technology/image-space-capsule-landscape.jpg"
import spacep from  "./assets/technology/image-spaceport-landscape.jpg"
import launch from "./assets/technology/image-launch-vehicle-landscape.jpg"
import spacecPot from "./assets/technology/image-space-capsule-portrait.jpg"
import spacepPot from  "./assets/technology/image-spaceport-portrait.jpg"
import launchPot from "./assets/technology/image-launch-vehicle-portrait.jpg"

const Technology_Page = () => {
    const [width,setWidth] = useState(window.innerWidth);
    const refDescription = useRef();
    const refName = useRef();
    const refImage = useRef();

    const localContext = useContext(GlobalContext);
    const {obj, setObj} = localContext;
    const destination_Data = obj.data['technology'];
    const [under, setUnder] = useState({
        launchvehicle : false,
        spaceport : false,
        spacecapsule : false
    });

    const setUnderline = (e) => {
        if(e.target.classList.contains('Launchvehicle')){
            setUnder({
                launchvehicle : true,
                spaceport : false,
                spacecapsule : false
            })
        }
        else if(e.target.classList.contains('Spaceport')){
            setUnder({
                launchvehicle : false,
                spaceport : true,
                spacecapsule : false
            })
        }
        else if(e.target.classList.contains('Spacecapsule')){
            setUnder({
                launchvehicle : false,
                spaceport : false,
                spacecapsule : true
            })
        }
    }
    
    const addContent = (e) => {
        destination_Data.map((item, index) => {
            if(e.target.classList.contains(item.name.replace(/\s/g, ''))){
                refDescription.current.innerHTML = destination_Data[index].description;
                refName.current.innerHTML = destination_Data[index].name;
                
                setUnderline(e);
                if(window.innerWidth > 1024){
                    refImage.current.src = item.name == 'Launch vehicle' ? launchPot : item.name == 'Spaceport' ? spacepPot : spacecPot;
                }
                else{
                    refImage.current.src = item.name == 'Launch vehicle' ? launch : item.name == 'Spaceport' ? spacep : spacec;
                }
            }
        })
    }

    return(
        <div className='technology flex flex-col items-center text-center gap-[1.9rem] font-Barlow_Condensed pt-[5.6rem] w-full overflow-scroll md:pt-[8rem] lg:pt-[10rem] transition-all duration-500'>
            <div className='flex  gap-3 tracking-[2.8px] md:w-full md:pl-8 lg:pl-[8.5rem] lg:text-[1.3rem] lg:gap-5 xl:pl-[10.8rem] transition-all duration-500'>
                <span className='opacity-50'>03</span>
                <h2 className='uppercase'> space launch 101</h2>
            </div>
            <div className='flex flex-col items-center gap-[2rem] w-[100%] md:gap-[3rem] lg:flex-row lg:h-[60vh] transition-all duration-500 '>
                <img ref = {refImage} className=' w-full mx-auto lg:max-w-[22rem] lg:absolute lg:right-0 xl:max-w-[30rem] 2xl:max-w-[32rem]' src = {launchPot} />
                <div className ='gap-[2rem] flex flex-col lg:flex-row  lg:pl-28 xl:pl-[10rem] lg:gap-5 xl:gap-16 transition-all duration-500 '>
                    <ul className='flex flex-row gap-5 justify-center tracking-[2px] lg:flex-col transition-all duration-500' onClick = {addContent}>
                        <li className = {`Launchvehicle my-auto px-4 py-2 rounded-full border-[1px] border-slate-600  lg:text-2xl lg:px-7 lg:py-4 cursor-pointer transition-all duration-500 hover:border-slate-300 ${under.launchvehicle && 'bg-[#D0D6F9] text-black border-slate-200' }`}>1</li>
                        <li className= {`Spaceport my-auto px-4 py-2 rounded-full border-[1px] border-slate-600  lg:text-2xl lg:px-7 lg:py-4 cursor-pointer transition-all duration-500 hover:border-slate-300 ${under.spaceport && 'bg-[#D0D6F9] text-black border-slate-200' }`} >2</li>
                        <li className= {`Spacecapsule my-auto px-4 py-2 rounded-full border-[1px] border-slate-600  lg:text-2xl lg:px-7 lg:py-4 cursor-pointer transition-all duration-500 hover:border-slate-300 ${under.spacecapsule && 'bg-[#D0D6F9] text-black border-slate-200' }`} >3</li>
                    </ul>
                    <div className='flex flex-col md:gap-1 lg:text-left lg:gap-0 xl:gap-0 transition-all duration-500'>
                        <h2 className='text-slate-400 uppercase font-Barlow_Condensed tracking-[2px] xl:text-[1.1rem]'>The terminology ...</h2>
                        <div className='flex flex-col gap-4 xl:gap-2'>
                            <h1 className='text-[1.7rem] font-Bellefair uppercase text-white md:text-[2rem] lg:text-[3.4rem] xl:text-[3.4rem]' ref = {refName}>Launch vehicle</h1>
                            <p className='max-w-[20.5rem] tracking-[1px] md:tracking-normal md:max-w-[21.9rem] lg:text-[1rem] lg:max-w-[25rem] lg:tracking-[0.8px]  leading-8'ref = {refDescription}>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    )
}
export default Technology_Page;