import React from 'react';

import { FaCheck } from "react-icons/fa6";

function About() {
    return (
        <>
        <section id='About' className='flex flex-col flex-nowrap items-center justify-center gap-[10px] w-full p-[20px] bg-sky'>

            <h1 className='w-full text-center text-white 5:text-[3rem] text-[2rem] font-Glacier'>Porque usar nosso <span className='text-darkslate'>Guarda Móveis</span>?</h1>

            <p className='w-full h-auto font-Stara 5:text-[1.25rem] text-[1rem] text-white text-center'>Segurança, suporte e cuidado total com seus móveis, Com tecnologia de ponta e anos de experiência, somos sinônimo de profissionalismo!</p>

            <ul>

                <AdvantageOffered Text='Seguro e Monitorado'/>
                <AdvantageOffered Text='Ambiente Limpo'/>
                <AdvantageOffered Text='Armazenamento Sob Medida'/>
                <AdvantageOffered Text='Embalagem Profissional'/>
                <AdvantageOffered Text='Acompanhamento Online'/>
                <AdvantageOffered Text='Identificação e Inventário dos Itens'/>

            </ul>

        </section>
        </>
    );
}

function AdvantageOffered({Text}) {
    return (
        <>
        <li className='flex flex-row flex-nowrap items-center justify-center gap-[5px] font-Stara font-[900] 5:text-[1.25rem] text-[1rem] text-white'> <FaCheck  className='text-[1rem]'/> {Text}</li>
        </>
    );
}

export default About;