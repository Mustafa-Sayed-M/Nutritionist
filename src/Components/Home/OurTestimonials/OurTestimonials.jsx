import React from 'react';
import HeadSection from '../../Shared/HeadSection';
import { TESTIMONIALS } from '../../../Data/constantData';
import TestimonialCard from './Components/TestimonialCard';

function OurTestimonials() {
    return (
        <section className='our-testimonials py-7' id='our-testimonials'>
            {/* Head Section */}
            <HeadSection
                title={`Our Testimonials`}
                description={`Our satisfied clients share their success stories and experiences on their journey to better health and well-being.`}
            />
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {TESTIMONIALS.map((testimonial, index) => <TestimonialCard
                    key={index}
                    testimonialData={testimonial}
                />)}
            </div>
        </section>
    );
}

export default OurTestimonials;