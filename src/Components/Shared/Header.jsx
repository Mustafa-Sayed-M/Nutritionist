import React from 'react';

function Header({ title, description }) {
    return (
        <section className='header text-center space-y-3 py-10 px-3 md:px-10 rounded-t-xl' id='header' style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/shared/header-background.png)`,
            backgroundSize: 'cover'
        }}>
            <img
                src={`${process.env.PUBLIC_URL}/assets/shared/logo-icon.png`}
                alt='Logo Icon'
                className='mx-auto'
            />
            <h1 className='font-semibold text-3xl'>{title}</h1>
            <p>{description}</p>
        </section>
    )
}

export default Header;