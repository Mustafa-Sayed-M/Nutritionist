import React from 'react';

function BookDemo() {
    return (
        <section className='book-demo p-3 md:p-5 min-h-[120px] flex max-md:flex-col items-center gap-y-3 gap-x-16 bg-green-color-95 border border-green-color-95 rounded-3xl relative overflow-hidden' id='book-demo'>
            {/* Pattern */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/shared/pattern.png`}
                alt='Book Demo'
                className='absolute -top-10 -left-5'
            />
            <div className='text-box relative z-10 w-full space-y-2'>
                <h1 className='font-semibold text-xl sm:text-2xl'>We Are Proud of Our Achievements</h1>
                <p>But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformation journey towards optimal health and well-being.</p>
            </div>
            <button
                type='button'
                title='Book Demo'
                aria-label='Book Demo'
                className='bg-green-color-70 py-2 px-4 rounded-md text-nowrap font-medium max-md:w-full'
            >
                Book a Demo
            </button>
        </section>
    )
}

export default BookDemo;