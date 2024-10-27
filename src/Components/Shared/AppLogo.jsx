import React from 'react';
import { Link } from 'react-router-dom';

function AppLogo() {
    return (
        <Link to={'/'}>
            <img
                src={`${process.env.PUBLIC_URL}/assets/global/logo.png`}
                alt='App Logo'
            />
        </Link>
    )
}

export default AppLogo;