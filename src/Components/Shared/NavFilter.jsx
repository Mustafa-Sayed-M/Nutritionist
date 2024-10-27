import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavFilter({ page, filterList }) {

    const { pathname } = useLocation()

    return (
        <div className='nav-filter bg-dark-green-color-20 py-5 px-10 rounded-b-md text-white'>
            <ul className='flex flex-wrap max-sm:flex-col items-center justify-center gap-2'>
                <li>
                    <Link
                        to={`${page}`}
                        className={`block py-2 px-4 rounded-md border border-dark-green-color-30 transition ${pathname === page && 'bg-dark-green-color-25'}`}
                    >
                        All
                    </Link>
                </li>
                {filterList.map((category, index) => <li key={index}>
                    <Link
                        to={`${page}/${category.replaceAll(' ', '+')}`}
                        className={`block py-2 px-4 rounded-md border border-dark-green-color-30 transition ${`${page}/${category}` === pathname.replaceAll('+', ' ') && 'bg-dark-green-color-25'}`}
                    >
                        {category}
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}

export default NavFilter;