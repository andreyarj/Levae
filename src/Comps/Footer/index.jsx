import React from 'react';

function Footer() {
    return (
        <>
        <footer className='w-full h-auto p-[20px] dark:bg-darkslate bg-white'>

            <h1 className='font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem]'>Entre em <span className='hover:bg-darksky bg-sky text-white px-[5px] rounded-[5px] transition .3s'>contato conosco</span> e agende seu serviço!</h1>

            <h2 className='font-Stara font-[900] italic dark:text-white text-darkslate 5:text-[1.2rem] text-[.8rem]'>Rua das Andorinhas, 742 – Bairro Industrial.</h2>

            <h2 className='font-Stara font-[900] italic dark:text-white text-darkslate 5:text-[1.2rem] text-[.8rem]'>Telefone (xx) xxxxx-xxxx.</h2>

            <h2 className='font-Stara font-[900] italic dark:text-white text-darkslate 5:text-[1.2rem] text-[.8rem]'>WhatsApp (xx) xxxx-xxxx</h2>

            <h2 className='font-Stara font-[900] italic dark:text-white text-darkslate 5:text-[1.2rem] text-[.8rem]'>levae@hotmail.com</h2>

        </footer>
        </>
    );
}

export default Footer;