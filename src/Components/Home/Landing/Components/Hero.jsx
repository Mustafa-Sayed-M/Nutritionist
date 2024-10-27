import React from 'react';

function Hero() {
    return (
        <div className='hero'>
            <img
                src={`${process.env.PUBLIC_URL}/assets/home/hero-landing.png`}
                alt='Hero landing'
                className='max-md:rounded-b-[50px]'
            />
        </div>
    )
}

export default Hero;