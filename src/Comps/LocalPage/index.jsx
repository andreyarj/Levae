import React from 'react';

function LocalPage({FirstText, SecoundText}) {
    return (
        <>
        <h1 className='w-full h-auto font-Glacier 5:text-[2.25rem] text-[1.5rem] dark:text-white text-darkslate'>{FirstText} <span className='text-sky'>{SecoundText}</span></h1>
        </>
    );
}

export default LocalPage;