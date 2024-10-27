import React from 'react';
import Head from './Components/Head/Head';
import Foot from './Components/Foot/Foot';

function Footer() {
    return (
        <footer className='py-7 bg-dark-green-color-15 text-white'>
            <div className='container space-y-3'>
                {/* Head Container */}
                <Head />
                {/* Foot Container */}
                <Foot />
            </div>
        </footer>
    )
}

export default Footer;