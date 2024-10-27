import React from 'react';
import TeamCard from './Components/TeamCard';

function TeamGrid({ teamList }) {
    return (
        <div className='team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {teamList.map((teamItem, index) => <TeamCard
                key={index}
                teamData={teamItem}
            />)}
        </div>
    )
}

export default TeamGrid;