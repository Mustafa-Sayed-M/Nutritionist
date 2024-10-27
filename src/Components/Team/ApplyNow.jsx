import React from 'react';

function ApplyNow() {
    return (
        <section className='apply-now p-3 md:p-5 min-h-[120px] flex max-md:flex-col items-center gap-y-3 gap-x-16 bg-green-color-95 border border-green-color-95 rounded-3xl relative overflow-hidden' id='book-demo'>
            {/* Pattern */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/shared/pattern.png`}
                alt='Apply Now'
                className='absolute -top-10 -left-5'
            />
            <div className='text-box relative z-10 w-full space-y-2'>
                <h1 className='font-semibold text-xl sm:text-2xl'>Join Our Team</h1>
                <p>We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals.</p>
            </div>
            <button
                type='button'
                title='Apply Now'
                aria-label='Apply Now'
                className='bg-green-color-70 py-2 px-4 rounded-md text-nowrap font-medium max-md:w-full'
            >
                Apply Now
            </button>
        </section>
    )
}

export default ApplyNow;