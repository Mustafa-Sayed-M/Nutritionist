import React from 'react';

function TestimonialCard({ testimonialData }) {

    const {
        content,
        author: {
            avatarName,
            name,
        }
    } = testimonialData;

    return (
        <div className='testimonial-card p-3 rounded-md bg-green-color-95 border border-green-color-85 flex flex-col gap-3'>
            {/* Icon Quote */}
            <i className="fa-brands fa-quora text-2xl text-dark-green-color-30"></i>
            {/* Content */}
            <p className='min-h-[120px]'>{content}</p>
            {/* Author Info */}
            <div className='author-info flex items-center gap-2'>
                {/* Avatar */}
                <img
                    src={`${process.env.PUBLIC_URL}/assets/home/testimonials/${avatarName}.png`}
                    alt=''
                    width={35}
                />
                {/* Name */}
                <p>{name}</p>
            </div>
        </div>
    )
}

export default TestimonialCard;