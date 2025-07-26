import React from 'react';

import LocalPage from './../../Comps/LocalPage';

function AboutSupport() {
    return (
        <>
        <section className='flex flex-col flex-nowrap items-center justify-center gap-[10px] w-full h-auto dark:bg-darkslate bg-white p-[20px]'>

            <LocalPage FirstText='Inicio → Serviço → ' SecoundText='Suporte'/>

            <p className='w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Somos uma empresa especializada em dar suporte a arquitetos, Com mais de 5 anos de experiência oferecendo mão de obra qualificada para montagem de projetos residenciais e apartamentos decorados.</p>

            <p className='w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Nosso setor técnico é focado na instalação de telas, quadros, suportes de banheiro, Televisores, eletrodomésticos, Além da movimentação e organização de móveis.</p>

            <p className='w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Confira alguns dos serviços que a Levaê disponibiliza:<br></br> Compromisso com Qualidade e Rapidez, Instalação e retirada de suportes, Quadros, cortinas, Eletros, Entre outros, Organização de mobiliário e ambientação final.</p>

            <p className='w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Facilite a execução dos seus projetos com a excelência da Levaê.</p>

        </section>
        </>
    );
}

export default AboutSupport;