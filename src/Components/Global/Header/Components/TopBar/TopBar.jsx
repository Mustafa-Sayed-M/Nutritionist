import React from 'react';

function TopBar() {
    return (
        <div className='top-bar border-b border-b-dark-green-color-20'>
            <div className='container py-3'>
                <div className='top-bar-content px-2 bg-dark-green-color-20 border border-dark-green-color-25 min-h-[45px] rounded-md flex items-center justify-between gap-3'>
                    {/* Patter 1 */}
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/global/topBar/pattern.png`}
                        alt='Pattern'
                        className='max-md:hidden'
                    />
                    <div className='part-text flex items-center justify-center gap-2 w-full'>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/global/topBar/icon.png`}
                            alt=''
                        />
                        <p className='text-sm line-clamp-1'>Join Our Personalized Nutrition Demo For Free</p>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                    {/* Patter 2 */}
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/global/topBar/pattern.png`}
                        alt='Pattern'
                        className='max-md:hidden'
                    />
                </div>
            </div>
        </div>
    )
}

export default TopBar;