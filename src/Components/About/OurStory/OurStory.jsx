import React from 'react';
import HeadSection from '../../Shared/HeadSection';
import { STORES } from '../../../Data/constantData';
import StoryWrapper from './Components/StoryWrapper';

function OurStory() {
    return (
        <section className='our-story' id='our-story'>
            {/* Head Section */}
            <HeadSection
                title={`Our Story`}
                description={`Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey.`}
            />
            {/* Content Grid */}
            <div className='content-grid'>
                {STORES.map((story, index) => <StoryWrapper
                    key={index}
                    storyData={story}
                />)}
            </div>
        </section>
    )
}

export default OurStory;