import React from 'react';
import HeadSection from '../../Shared/HeadSection';
import FaqCard from './Components/FaqCard';
import { FAQS } from '../../../Data/constantData';

function Faq() {
    return (
        <section className='faq' id='faq'>
            {/* Head Section */}
            <HeadSection
                title={`FAQ`}
                description={`We address commonly asked questions and provide comprehensive answers to help you navigate your way through your nutrition and wellness journey.`}
            />
            {/* Content Grid */}
            <div className='content-grid grid grid-cols-1 md:grid-cols-3 gap-5 items-center'>
                {/* Faqs */}
                <div className='faqs md:col-span-2 space-y-2'>
                    {FAQS.map((faq, index) => <FaqCard key={index} faqData={faq} />)}
                </div>
                {/* Ask Question */}
                <div className='ask-question'>
                    Ask Question
                </div>
            </div>
        </section>
    )
}

export default Faq;