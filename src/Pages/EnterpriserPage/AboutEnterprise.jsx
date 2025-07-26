import React from 'react';

import LocalPage from '../../Comps/LocalPage';

function AboutEnterprise() {
    return (
        <>
        <section id="AboutEnterprise" className='flex flex-col flex-nowrap items-center justify-center 6:gap-[20px] gap-[10px] w-full h-auto 6:px-[60px] 6:py-[40px] p-[20px] dark:bg-darkslate bg-white'>

            <LocalPage FirstText='Inicio →' SecoundText='Empresa'/>

            <p className='w-full h-auto font-Stara 5:text-[1.5rem] text-[1rem] text-justify dark:text-white text-darkslate'>Valorizamos profundamente a dedicação no atendimento ao cliente, Atuando com foco na clareza das informações e na transparência durante todo o processo de negociação, Acreditamos que um bom relacionamento começa com uma escuta atenta, Orientação qualificada e compromisso em oferecer soluções personalizadas para cada necessidade apresentada.</p>
            
            <p className='w-full h-auto font-Stara 5:text-[1.5rem] text-[1rem] text-justify dark:text-white text-darkslate'>A Levaê Transportes tem como princípio fundamental a busca pela excelência e o comprometimento absoluto com seus clientes, Nosso propósito vai além da prestação de serviços como mudanças residenciais, mudanças comerciais, Suporte especializado a arquitetos e o serviço de guarda-móveis online, Queremos, Acima de tudo, Criar vínculos de confiança, Conquistando a lealdade e satisfação contínua de quem escolhe trabalhar conosco.</p>
            
            <p className='w-full h-auto font-Stara 5:text-[1.5rem] text-[1rem] text-justify dark:text-white text-darkslate'>Por isso, Adotamos rigorosos padrões de qualidade em todas as etapas do processo logístico, Desde a retirada cuidadosa dos itens no local de origem até a entrega segura no destino final, cada ação é executada com atenção aos detalhes, responsabilidade e profissionalismo, O resultado é uma solução completa e eficaz, que cumpre com excelência tudo o que foi acordado Garantindo, Ao final, A tranquilidade e a plena satisfação de nossos clientes.</p>
            
        </section>
        </>
    );
}

export default AboutEnterprise;