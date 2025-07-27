import React from 'react';

import LocalPage from './../../Comps/LocalPage';

function AboutFurnitureStorage() {
    return (
        <>
        <section id='AboutFurnitureStorage' className='flex flex-col flex-nowrap items-center justify-center 6:gap-[20px] gap-[10px] w-full h-auto dark:bg-darkslate bg-white 6:px-[60px] 6:py-[40px] p-[20px]'>

            <LocalPage FirstText='Inicio → Serviço → ' SecoundText='Guarda Móvel'/>

            <p className='reveal w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Box fechados com total segurança, Dedetizado e monitorado 24hs, De forma organizada, Retiramos, Embalamos, Inventariamos e identificamos seus produtos através de etiquetas personalizadas, Oferecendo aos clientes um serviço confiável e eficiente sem você pagar nada à mais por isto.</p>

        </section>
        </>
    );
}

export default AboutFurnitureStorage;