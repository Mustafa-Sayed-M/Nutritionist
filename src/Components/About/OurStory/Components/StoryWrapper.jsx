import React from 'react';

function StoryWrapper({ storyData }) {

    const {
        id,
        image,
        title,
        description,
        date
    } = storyData;

    return (
        <div className='story-wrapper flex max-md:flex-col'>
            {/* Image */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/about/ourStory/${image}.png`}
                alt={title}
                className={`w-full md:w-1/2 object-cover ${id % 2 === 0 && 'order-2'}`}
            />
            {/* Split */}
            <div className={`split max-md:hidden bg-green-color-70 w-3 ${id % 2 === 0 && 'order-1'}`}></div>
            {/* Part Text */}
            <div className={`part-text w-full md:w-1/2 p-5 md:p-10 max-md:order-2`}>
                <h1 className='text-xl font-semibold mb-5 pb-2 border-b-2 border-b-green-color-70 w-fit'>{title}</h1>
                <p className='mb-3'>{description}</p>
                <p className='font-medium'>{date}</p>
            </div>
        </div>
    )
}

export default StoryWrapper;