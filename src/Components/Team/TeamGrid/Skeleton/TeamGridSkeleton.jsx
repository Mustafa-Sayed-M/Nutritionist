import React from 'react';
import TeamCardSkeleton from './TeamCardSkeleton';

function TeamGridSkeleton() {
    return (
        <div className='blog-grid-skeleton grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

            <TeamCardSkeleton />
            <TeamCardSkeleton />

            <TeamCardSkeleton />
            <TeamCardSkeleton />

        </div>
    )
}

export default TeamGridSkeleton;