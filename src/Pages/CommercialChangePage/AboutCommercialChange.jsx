import React from 'react';

import LocalPage from './../../Comps/LocalPage';

function AboutCommercialChange() {
    return (
        <>
        <section id='CommercialChangePage' className='flex flex-col flex-nowrap items-center justify-center gap-[10px] w-full h-auto p-[20px] dark:bg-darkslate bg-white '>
            
            <LocalPage FirstText='Inicio → Serviço → ' SecoundText='Mudança Comercial'/>

            <p className='w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Na Levaê, Cuidamos da sua mudança como se fosse a nossa, Sabemos que mudar de casa é um momento importante, Por isso oferecemos um serviço completo com atenção, Agilidade e segurança.</p>
        
            <p className='w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Nossa equipe desmonta, Embala, Transporta e monta seus móveis e pertences com cuidado, Usando materiais como plástico bolha, Papelão ondulado e mantas protetoras, Tudo para que seus objetos cheguem intactos ao novo lar.</p>
        
            <p className='w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Também protegemos pisos, Elevadores e paredes, Sempre respeitando prazos e cuidando dos detalhes, Nossa organização garante uma experiência leve e tranquila para sua família.</p>
        
            <p className='w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Com a Levaê, Sua mudança é mais do que transporte é o começo de uma nova fase, Feita com responsabilidade e dedicação.</p>
        
        </section>
        </>
    );
}

export default AboutCommercialChange;