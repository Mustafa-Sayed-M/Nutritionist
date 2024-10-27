import React from 'react';

function HeadSection({ title, description }) {
    return (
        <div className='head-section space-y-2 text-center mb-5'>
            <h3 className='font-semibold text-2xl'>{title}</h3>
            <p className='md:max-w-[600px] mx-auto'>{description}</p>
        </div>
    )
}

export default HeadSection;