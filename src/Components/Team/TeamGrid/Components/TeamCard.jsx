import React from 'react';

function TeamCard({ teamData }) {

    const {
        image,
        name,
        role
    } = teamData;

    return (
        <div className='team-card'>
            {/* Name */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/team/${image}.png`}
                alt={name}
            />
            <div className='info space-y-2 -mt-10 bg-green-color-95 rounded-e-md relative z-10 w-3/4 p-3'>
                {/* Name */}
                <h2 className='text-grey-color-15 font-semibold text-lg'>{name}</h2>
                {/* Role */}
                <p className='text-grey-color-30'>{role}</p>
            </div>
        </div>
    )
}

export default TeamCard;