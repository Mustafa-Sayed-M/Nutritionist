import React from 'react';
import Hero from './Components/Hero';
import TextArea from './Components/TextArea';

function Landing() {
    return (
        <section className='landing' id='landing'>
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 md:grid-cols-2 items-center'>
                {/* Hero */}
                <Hero />
                {/* Text Area */}
                <TextArea />
            </div>
        </section>
    )
}

export default Landing;