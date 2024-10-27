import React from 'react';
import HeadSection from '../../Shared/HeadSection';
import { FEATURES } from '../../../Data/constantData';
import FeatureCard from './Components/FeatureCard';

function Features() {
    return (
        <section className='features py-7' id='features'>
            {/* Head Section */}
            <HeadSection
                title={`Features`}
                description={`Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.`}
            />
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 md:grid-cols-2 gap-3'>
                {FEATURES.map((feature, index) => <FeatureCard
                    key={index}
                    featureData={feature}
                />)}
            </div>
        </section>
    );
}

export default Features;