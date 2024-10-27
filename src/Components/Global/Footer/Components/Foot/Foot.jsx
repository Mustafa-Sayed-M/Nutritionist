import React from 'react';

const links = [
    {
        href: 'mailto:mustafacoder9@gmail.com',
        text: 'Send Mail',
        fontAwesomeIcon: 'envelope',
    },
    {
        href: 'https://wa.link/uwnu8m',
        text: '01122124968',
        fontAwesomeIcon: 'phone',
    },
    {
        href: 'https://www.google.com/maps/@30.2293393,31.3198485,13z?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D',
        text: 'Kafr Hamza, Qalyubia',
        fontAwesomeIcon: 'location-dot',
    },
];

function Foot() {
    return (
        <div className='foot-container bg-dark-green-color-20 border border-dark-green-color-25 rounded-md p-3 flex max-lg:flex-col items-center justify-between gap-3'>
            {/* Contact Links */}
            <ul className='flex max-md:flex-col items-center gap-2'>
                {links.map((link, index) => <li key={index}>
                    <a
                        href={link.href}
                        target='_blank'
                        rel="noreferrer"
                        className={`block py-2 px-4 rounded-sm border border-dark-green-color-25 sm:hover:border-green-color-70 transition`}
                    >
                        <i className={`fa-solid fa-${link.fontAwesomeIcon} fa-fw me-2`}></i>
                        <span>{link.text}</span>
                    </a>
                </li>)}
            </ul>
            {/* Copyrights */}
            <p className='text-grey-color-95 text-center'>© 2024 Nutritionist | All rights reserved | Mustafa Sayed ❤</p>
        </div>
    )
}

export default Foot;