import React from 'react';

import LocalPage from './../../Comps/LocalPage';

function AboutBudget() {
    return (
        <>
        <section id='AboutBudget' className='flex flex-col flex-nowrap gap-[20px] items-start justify-start w-full h-auto p-[20px] dark:bg-darkslate bg-white'>

            <LocalPage FirstText='Inicio →' SecoundText='Orçamentos'/>

            <button type="submit" className='md-ripples px-[30px] py-[10px] font-Stara text-white hover:bg-darksky bg-sky transition .3s rounded-[10px]'>Fale Conosco</button>

            <form name="Budget" netlify className='flex flex-col flex-nowrap items-start justify-center gap-[10px] w-full h-auto p-[10px] dark:bg-gray bg-slate rounded-[10px]'>

                <input type="text" name="Name" id="Name" className='px-[10px] h-[40px] w-full dark:bg-darkslate bg-white font-Stara dark:text-white text-darkslate border-l-[4px] invalid:border-l-yellow border-l-sky rounded-[5px] dark:placeholder:text-white placeholder:text-darkslate' required placeholder='Nome' autoComplete='no'/>

                <input type="email" name="Email" id="Email" className='px-[10px] h-[40px] w-full dark:bg-darkslate bg-white font-Stara dark:text-white text-darkslate border-l-[4px] invalid:border-l-yellow border-l-sky rounded-[5px] dark:placeholder:text-white placeholder:text-darkslate' required placeholder='email@gmail.com' autoComplete='no'/>

                <input type="tel" name="Phone" id="Phone" className='px-[10px] h-[40px] w-full dark:bg-darkslate bg-white font-Stara dark:text-white text-darkslate border-l-[4px] invalid:border-l-yellow border-l-sky rounded-[5px] dark:placeholder:text-white placeholder:text-darkslate' required placeholder='Telefone' autoComplete='no'/>

                <h1 className='w-full h-auto font-Glacier text-left dark:text-white text-darkslate text-[1.5rem]'>Serviço que deseja solicitar?</h1>

                <label htmlFor="Residencial" className='flex flex-row flex-nowrap items-center justify-start gap-[10px] w-full h-auto font-Stara dark:text-white text-darkslate text-[1rem]'><input type="radio" name="Service" id="Residencial" value='Residencial' required/>Mudança Residencial</label>

                <label htmlFor="Comercial" className='flex flex-row flex-nowrap items-center justify-start gap-[10px] w-full h-auto font-Stara dark:text-white text-darkslate text-[1rem]'><input type="radio" name="Service" id="Comercial" value='Comercial' required/>Mudança Comercial</label>

                <label htmlFor="Guarda Móveis" className='flex flex-row flex-nowrap items-center justify-start gap-[10px] w-full h-auto font-Stara dark:text-white text-darkslate text-[1rem]'><input type="radio" name="Service" id="Guarda Móveis" value='Guarda Móveis' required/>Guarda Móveis</label>

                <label htmlFor="Suporte" className='flex flex-row flex-nowrap items-center justify-start gap-[10px] w-full h-auto font-Stara dark:text-white text-darkslate text-[1rem]'><input type="radio" name="Service" id="Suporte" value='Suporte' required/>Suporte</label>

                <button type="submit" className='md-ripples px-[30px] py-[10px] font-Stara text-white hover:bg-darksky bg-sky transition .3s rounded-[10px]'>Enviar</button>

            </form>

        </section>
        </>
    );
}

export default AboutBudget;