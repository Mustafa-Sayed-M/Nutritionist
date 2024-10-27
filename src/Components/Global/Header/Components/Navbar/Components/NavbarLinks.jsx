import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const mainLinksList = [
    { to: '/', title: 'Home' },
    { to: '/about', title: 'About' },
    { to: '/team', title: 'Team' },
    { to: '/process', title: 'Process' },
    { to: '/pricing', title: 'Pricing' },
    { to: '/blog', title: 'Blog' },
]

function NavbarLinks() {

    const { openNavbarMenu } = useSelector(state => state.app);

    return (
        <div className={`navbar-links max-lg:w-full max-lg:order-1 flex max-lg:flex-col items-center gap-2 ${!openNavbarMenu && 'max-lg:hidden'}`}>
            {/* Main Links */}
            <ul className='flex max-lg:flex-col items-center gap-2 max-lg:w-full'>
                {mainLinksList.map((link, index) => <li key={index} className='max-lg:w-full'>
                    <NavLink
                        to={link.to}
                        className={({ isActive }) => `${isActive ? "text-green-color-70" : "sm:hover:text-green-color-70"} font-medium block lg:px-2 max-lg:p-2 max-lg:rounded-md transition max-lg:bg-dark-green-color-20`}
                    >
                        {link.title}
                    </NavLink>
                </li>)}
            </ul>
            {/* Contact Us Link */}
            <Link
                to={'contact'}
                className='block max-lg:w-full text-center font-medium bg-green-color-70 py-2 px-4 rounded-md text-black'
            >
                Contact Us
            </Link>
        </div>
    )
}

export default NavbarLinks;