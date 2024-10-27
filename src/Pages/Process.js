import React from 'react';
import Header from '../Components/Shared/Header';
import HowItWork from '../Components/Process/HowItWork/HowItWork';

function Process() {
    return (
        <div className='process-page py-7'>
            <div className='container space-y-7'>
                {/* Header */}
                <Header
                    title={'Your Journey to Health and Wellness'}
                    description={`At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our "How it Works" process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here's a detailed breakdown of our process:`}
                />
                {/* How It Work */}
                <HowItWork />
            </div>
        </div>
    )
}

export default Process;