import React from 'react';
import { Link } from 'react-router-dom';

function AboutServices() {
    return (
        <>
        <section id='AboutServices' className='flex flex-row flex-wrap items-center justify-center 6:gap-[40px] gap-[20px] w-full h-auto 6:px-[60px] 6:py-[40px] p-[20px] dark:bg-darkslate bg-white'>

            <Service Class='Comercial' Text='Mudança Comerçial' To='/Service/CommercialChangePage'/>
            <Service Class='Residencial' Text='Mudança Residencial' To='/Service/ResidentialChange'/>
            <Service Class='GuardaMoveis' Text='Guarda Moveis' To='/Service/FurnitureStorage'/>
            <Service Class='Suporte' Text='Suporte' To='/Service/Support'/>
            
        </section>
        </>
    );
}

function Service({Class, Text, To}) {

    return (
        <>
            <Link to={To} className={`flex flex-col flex-nowrap items-center justify-center ${Class} max-w-[350px] w-full h-[220px] rounded-[20px]`}>

                <h1 className='w-auto h-auto font-Glacier text-center text-[2rem] text-white'>{Text}</h1>            
            
            </Link>
        </>
    );
}

export default AboutServices;