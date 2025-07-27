import React from 'react';

import Post from './../../Imagem/Advertising/Post.jpg';
import Post2 from './../../Imagem/Advertising/Post2.jpg';

function Advertisings() {
    return (
        <>
        <section id='Advertising' className='6:scroll-p-[40px] scroll-p-[20px] snap-x snap-mandatory overflow-x-scroll flex flex-row flex-nowrap items-start justify-start gap-[40px] w-full h-auto 6:px-[60px] 6:py-[40px] p-[20px] dark:bg-gray bg-darksky'>

            <Poster Imagem={Post}/>

            <Poster Imagem={Post2}/>

        </section>
        </>
    );
}

function Poster({Imagem}) {
    return (
        <>
            <img src={Imagem} alt="Post" className='snap-start max-w-[500px] w-full h-auto rounded-[10px]'/>
        </>
    );
}


export default Advertisings;