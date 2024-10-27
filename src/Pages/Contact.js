import React from 'react'
import Header from '../Components/Shared/Header';

function Contact() {
    return (
        <div className='contact-page py-7'>
            <div className='container space-y-7'>
                {/* Header */}
                <Header
                    title={'Contact Us'}
                    description={`We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods`}
                />
            </div>
        </div>
    )
}

export default Contact;