import React from 'react';

function TeamCardSkeleton() {
    return (
        <div className='team-card-skeleton space-y-2'>
            <div className='image-skeleton h-[200px] animate-pulse bg-grey-color-60 rounded-md'></div>
            <div className='name-skeleton h-4 animate-pulse bg-grey-color-60 rounded-md w-36'></div>
            <div className='role-skeleton h-3 animate-pulse bg-grey-color-60 rounded-md w-20'></div>
        </div>
    )
}

export default TeamCardSkeleton;