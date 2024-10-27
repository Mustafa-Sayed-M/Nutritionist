import React from 'react';
import HeadSection from '../../Shared/HeadSection';

function OurBlogs() {
    return (
        <section className='our-blogs py-7' id='our-blogs'>
            {/* Head Section */}
            <HeadSection
                title={`Our Blogs`}
                description={`Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.`}
            />
        </section>
    );
}

export default OurBlogs;