import React from 'react';
import LocalPage from '../../Comps/LocalPage';

function AboutResidentialChange() {
    return (
        <>
        <section id='AboutResidentialChange' className='flex flex-col flex-nowrap items-center justify-center 6:gap-[20px] gap-[10px] w-full h-auto dark:bg-darkslate bg-white 6:px-[60px] 6:py-[40px] p-[20px]'>

            <LocalPage FirstText='Inicio → Serviço → ' SecoundText='Mudança Residencial'/>

            <p className='reveal w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Contamos com especialistas experientes na montagem e desmontagem de armários, Mesas e móveis sofisticados, Oferecendo também embalagens adequadas para todo tipo de objeto.</p>
        
            <p className='reveal w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Nossa equipe é altamente treinada e equipada com as melhores ferramentas para executar qualquer tipo de serviço, Desde o transporte de itens delicados até os mais pesados.</p>
        
            <p className='reveal w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Utilizamos cobertores e capas apropriadas para proteger todos os móveis e eletrodomésticos, Além de materiais como plástico bolha e papelão ondulado, Garantindo mais segurança durante todo o processo de transporte.</p>
        
            <p className='reveal w-full h-auto font-Stara dark:text-white text-darkslate 5:text-[1.5rem] text-[1rem] text-justify'>Profissionais organizados e preparados para realizar sua mudança com agilidade, Eficiência e toda a segurança que sua família precisa, Não corra riscos, confie sua mudança a quem realmente entende do assunto!</p>
            
        </section>
        </>
    );
}

export default AboutResidentialChange;