import React from 'react';
import HeadSection from '../../Shared/HeadSection';

function OurPricing() {
    return (
        <section className='our-pricing py-7' id='our-pricing'>
            {/* Head Section */}
            <HeadSection
                title={`Our Pricing`}
                description={`We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources`}
            />
        </section>
    );
}

export default OurPricing;