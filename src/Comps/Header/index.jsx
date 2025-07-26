import React from 'react';

import Logo from './../../Imagem/Logo.png';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <header className='flex flex-row flex-nowrap items-center justify-between w-full h-[100px] px-[20px] dark:bg-darkslate bg-white shadow-lg hover:shadow-xl transition .3s'>

        <Link to='/'><img src={Logo} alt="Icon Levae" className='w-[50px]'/></Link>

            <nav className='flex flex-row flex-nowrap items-center justify-center gap-[7.5px]'>

                <Link to='/Service' className='font-Stara dark:text-white text-darkslate text-[1rem] 5:text-[1.25rem] font-[700]'>Serviços</Link>

                <Link to='/Enterprise' className='font-Stara dark:text-white text-darkslate text-[1rem] 5:text-[1.25rem] font-[700]'>Empresa</Link>

                <Link to='/Budget' className='font-Stara dark:text-white text-darkslate text-[1rem] 5:text-[1.25rem] font-[700]'>Orçamentos</Link>

            </nav>

        </header>
        </>
    );
}

export default Header;