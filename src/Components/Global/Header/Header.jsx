import React from 'react';
import TopBar from './Components/TopBar/TopBar';
import Navbar from './Components/Navbar/Navbar';

function Header() {
    return (
        <header className='bg-dark-green-color-15 text-white sticky top-0 z-50'>
            {/* Top Bar */}
            <TopBar />
            {/* Navbar */}
            <Navbar />
        </header>
    )
}

export default Header;