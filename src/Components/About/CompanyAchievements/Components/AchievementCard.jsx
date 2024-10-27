import React from 'react';

function AchievementCard({ achievementData }) {

    const {
        iconName,
        title,
        description,
    } = achievementData;

    return (
        <div className='achievement-card space-y-2 p-3 rounded-md bg-green-color-95 border border-green-color-85'>
            {/* Header */}
            <div className='flex items-center gap-2'>
                {/* Icon */}
                <div className='p-2 rounded-md bg-green-color-70'>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/about/companyAchievements/${iconName}.png`}
                        alt={title}
                        width={20}
                    />
                </div>
                {/* Title */}
                <h2 className='font-semibold'>{title}</h2>
            </div>
            {/* Description */}
            <p>{description}</p>
        </div>
    )
}

export default AchievementCard;