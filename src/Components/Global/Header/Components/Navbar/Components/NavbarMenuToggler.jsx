import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleMenu } from '../../../../../../Store/slices/appSlice';
import { useLocation } from 'react-router-dom';

const barsIcon = `fa-solid fa-bars-staggered`;
const xIcon = `fa-solid fa-xmark`;

function NavbarMenuToggler() {

    const dispatch = useDispatch();

    const { openMenu } = useSelector(state => state.app);

    const handleNavbarMenuClick = () => {
        dispatch(handleMenu(!openMenu));
    }

    const { pathname } = useLocation()

    React.useEffect(() => {
        if (openMenu) dispatch(handleMenu(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, dispatch]);

    return (
        <button
            type='button'
            title='Navbar Menu Toggler'
            onClick={handleNavbarMenuClick}
            className='text-3xl text-green-color-70 lg:hidden'
        >
            <i className={`${openMenu ? xIcon : barsIcon} fa-fw`}></i>
        </button>
    )
}

export default NavbarMenuToggler;