import React from 'react';
import AppLogo from '../../../../Shared/AppLogo';
import NavbarLinks from './Components/NavbarLinks';
import NavbarMenuToggler from './Components/NavbarMenuToggler';

function Navbar() {
    return (
        <nav>
            <div className='container py-3 min-h-[60px] flex flex-wrap gap-y-3 items-center justify-between'>
                {/* App Logo */}
                <AppLogo />
                {/* Navbar Links */}
                <NavbarLinks />
                {/* Navbar Menu Toggler */}
                <NavbarMenuToggler />
            </div>
        </nav>
    )
}

export default Navbar;