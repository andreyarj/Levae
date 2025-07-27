import React from 'react';

import Juliana from './../../Imagem/FeedbackFace/Juliana.jpg';
import Ricardo from './../../Imagem/FeedbackFace/Ricardo.jpg';
import Camila from './../../Imagem/FeedbackFace/Camila.jpg';
import Diego from './../../Imagem/FeedbackFace/Diego.jpg';
import Tatiane from './../../Imagem/FeedbackFace/Tatiane.jpg';
import Leandro from './../../Imagem/FeedbackFace/Leandro.jpg';

function Feedbacks() {
    return (
        <>
        <section id='Feedbacks' className='snap-x snap-mandatory scroll-p-[20px] overflow-x-scroll flex flex-row flex-nowrap items-start justify-start gap-[40px] w-full h-auto 6:px-[60px] 6:py-[40px] p-[20px] dark:bg-darkslate bg-white'>

            <Feedback Image={Juliana} Name='Juliana Martins' Service='Suporte' Paragraph='"A Levaê embalou e transportou tudo com extremo cuidado. Minha Mudança foi tranquila do início ao fim."'/>
            
            <Feedback Image={Ricardo} Name='Ricardo Souza' Service='Guarda Móveis' Paragraph='"A equipe foi pontual, organizada e eficiente. O serviço de guarda-móveis também superou minhas expectativas."'/>

            <Feedback Image={Camila} Name='Camila Ribeiro' Service='Mudança Residencial' Paragraph='"Foram rápidos, cuidadosos e muito educados. Fiquei surpresa com o nível de profissionalismo."'/>

            <Feedback Image={Diego} Name='Diego Isaac' Service='Comercial' Paragraph='"A mudança do meu escritório foi feita com agilidade e zero complicações. Serviço realmente de confiança."'/>

            <Feedback Image={Tatiane} Name='Tatiane Oliveira' Service='Guarda Móveis' Paragraph='"Usei o guarda-móveis por 3 meses e tudo voltou intacto, Atendimento excelente e espaço seguro."'/>

            <Feedback Image={Leandro} Name='Leandro Costa' Service='Mudança Comercial' Paragraph='"Desde o primeiro contato, Tudo foi simples e bem explicado, Ótimo custo-benefício e serviço impecável.'/>

        </section>
        </>
    );
}

function Feedback({Image, Name, Service, Paragraph}) {
    return (
        <>
        <div className='snap-center flex flex-col flex-nowrap items-center justify-center gap-[10px] 375:min-w-[320px] 6:min-w-[350px] min-w-[280px] 6:h-[210px] h-[200px] 6:p-[15px] p-[10px] dark:bg-gray bg-slate rounded-[10px]'>
            
            <div className='flex flex-row flex-nowrap items-center justify-center gap-[10px] w-full h-auto'>
                
                <img src={Image} alt="Imagem" className='6:w-[65px] w-[55px] 6:h-[65px] h-[55px] rounded-[5px]'/>

                <div className='flex flex-col flex-nowrap items-center justify-center w-full h-auto'>

                    <h1 className='w-full font-Glacier dark:text-white text-darkslate text-left 6:text-[1.75rem] text-[1.5rem]'>{Name}</h1>

                    <h2 className='w-full font-Stara text-sky text-left 6:text-[1.25rem] text-[1rem]'>{Service}</h2>

                </div>

            </div>

            <p className='w-full h-full font-Stara 375:text-[1.1rem] 6:text-[1.2rem] text-[1rem] text-left dark:text-white text-darkslate'>{Paragraph}</p>

        </div>
        </>
    );
}

export default Feedbacks;