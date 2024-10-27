import React from 'react';
import HeadSection from '../../Shared/HeadSection';
import { COMPANY_ACHIEVEMENTS } from '../../../Data/constantData';
import AchievementCard from './Components/AchievementCard';

function CompanyAchievements() {
    return (
        <section className='company-achievements' id='company-achievements'>
            {/* Head Section */}
            <HeadSection
                title={`Company Achievements`}
                description={`At Nutritionist, we take pride in our accomplishments and the positive impact we have made on the lives of our clients. Here are some of our notable achievements`}
            />
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 md:grid-cols-2 gap-3'>
                {COMPANY_ACHIEVEMENTS.map((achievement, index) => <AchievementCard
                    key={index}
                    achievementData={achievement}
                />)}
            </div>
        </section>
    )
}

export default CompanyAchievements;