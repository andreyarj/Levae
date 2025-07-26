import React from 'react';

import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <>
        <section id='Welcome' className='flex flex-col flex-nowrap items-start justify-start gap-[10px] w-full h-auto p-[20px] bg:white dark:bg-darkslate'>

            <h1 className='w-full h-auto font-Glacier dark:text-white text-darkslate 5:text-[3rem] text-[2rem]'>Somos Levaê</h1>

            <p className='w-full h-auto font-Stara text-left dark:text-white text-darkslate 5:text-[1.25rem] text-[1rem]'>A Levaê cuida de cada detalhe com uma equipe treinada para tornar sua mudança simples, Segura e sem estresse, Serviços de mudança residenciais, Comerciais e Guarda Moveis com atendimento rápido, Seguro e sem complicação, Do planejamento à entrega, Cuidamos de tudo por você.</p>
            
            <Link to='/Budget' type="submit" className='md-ripples bg-sky px-[35px] py-[7.5px] font-Stara text-white 5:text-[1.3rem] text-[1.25rem]  rounded-[100px]'>Solicitar</Link>

        </section>
        </>
    );
}

export default Welcome;