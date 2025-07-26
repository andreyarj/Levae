import React from 'react';

import { BiTimeFive } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa6";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsGlobeAmericas } from "react-icons/bs";

function Differentials() {
    return (
        <>
        <section id='Differentials' className='flex flex-col flex-nowrap items-center justify-center gap-[20px] w-full h-auto 6:px-[60px] 6:py-[40px] p-[20px] dark:bg-darkslate bg-white'>

            <Differential Icon={BiTimeFive} Text='Rapidez e Agilidade'/>            
            <Differential Icon={FaBoxOpen} Text='Alto Cuidado'/>            
            <Differential Icon={RiErrorWarningLine} Text='Garantia'/>            
            <Differential Icon={BsGlobeAmericas} Text='Atendimento Nacional'/>            

        </section>
        </>
    );
}

function Differential({Icon, Text}){
    return(
        <>
        <div className='overflow-hidden relative flex flex-row flex-nowrap items-center justify-start min-w-[280px] max-w-[420px] w-full h-[80px] pl-[60px] dark:bg-white bg-sky rounded-[20px]'>
            
            <Icon className='absolute left-[0] translate-x-[-30%] text-[3.5rem] dark:text-sky text-white'/>

            <span className='font-Glacier text-[1.5rem] dark:text-sky text-white'>{Text}</span>
        
        </div>
        </>
    )

}

export default Differentials;