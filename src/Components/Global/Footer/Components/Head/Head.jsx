import React from 'react';
import AppLogo from '../../../../Shared/AppLogo';
import { Link } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

const links = [
    {
        to: '/',
        text: 'Home',
    },
    {
        to: '/about',
        text: 'About',
    },
    {
        to: '/team',
        text: 'Team',
    },
    {
        to: '/process',
        text: 'Process',
    },
    {
        to: '/pricing',
        text: 'Pricing',
    },
    {
        to: '/blog',
        text: 'Blog',
    },
    {
        to: '/contact',
        text: 'Contact',
    },
];

function Head() {
    return (
        <div className='head-container p-3 flex max-lg:flex-col items-center justify-between gap-3'>
            {/* App Logo */}
            <AppLogo />
            {/* Fast Links */}
            <ul className='flex max-md:flex-col items-center justify-center gap-2 max-md:w-full'>
                {links.map((link, index) => <li key={index} className='w-full'>
                    <Link className='max-md:p-2 max-md:bg-dark-green-color-20 max-md:rounded-md block' to={link.to}>{link.text}</Link>
                </li>)}
            </ul>
            {/* Scroll To Top */}
            <ScrollToTop />
        </div>
    )
}

export default Head;