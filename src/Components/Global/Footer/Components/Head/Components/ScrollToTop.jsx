import React from 'react';

function ScrollToTop() {

    const handleScrollToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' })
    };

    return (
        <button
            type='button'
            aria-label='Scroll to Top'
            title='Scroll to Top'
            onClick={handleScrollToTop}
            className='flex items-center gap-2'
        >
            <span className='font-medium'>Go To Top</span>
            <div className='w-10 h-10 leading-10 text-center rounded-full bg-dark-green-color-20 text-xl'>
                <i className="fa-solid fa-arrow-up"></i>
            </div>
        </button>
    )
}

export default ScrollToTop;