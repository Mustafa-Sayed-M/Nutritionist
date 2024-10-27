import React from 'react';
import HeadSection from '../../Shared/HeadSection';

function HowItWork() {
    return (
        <section className='how-it-work' id='how-it-work'>
            {/* Head Section */}
            <HeadSection
                title={`How It Works`}
                description={`We provide a step-by-step guide on how to get started on your journey towards better health and nutrition. We are here to simplify the process and make it easy for you to navigate our platform and access the resources you need to achieve your goals. Here's how it works`}
            />
        </section>
    )
}

export default HowItWork;