import React from 'react';
import Header from '../Components/Shared/Header';
import Faq from '../Components/Pricing/Faq/Faq';

function Pricing() {
    return (
        <div className='pricing-page py-7'>
            <div className='container space-y-7'>
                {/* Header */}
                <Header
                    title={'Our Pricing'}
                    description={`At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle`}
                />
                {/* Faq */}
                <Faq />
            </div>
        </div>
    )
}

export default Pricing;