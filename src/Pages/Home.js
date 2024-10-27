import React from 'react';
import Landing from '../Components/Home/Landing/Landing';
import Features from '../Components/Home/Features/Features';
import OurBlogs from '../Components/Home/OurBlogs/OurBlogs';
import OurPricing from '../Components/Home/OurPricing/OurPricing';
import OurTestimonials from '../Components/Home/OurTestimonials/OurTestimonials';

function Home() {
    return (
        <div className='home-page'>
            {/* Landing */}
            <Landing />
            {/* Container */}
            <div className='container space-y-7'>
                {/* Features */}
                <Features />
                {/* Our Blogs */}
                <OurBlogs />
                {/* Our Testimonials */}
                <OurTestimonials />
                {/* Our Pricing */}
                <OurPricing />
            </div>
        </div>
    )
}

export default Home;