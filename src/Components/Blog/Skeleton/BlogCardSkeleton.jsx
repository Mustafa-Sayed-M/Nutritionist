import React from 'react';

function BlogCardSkeleton() {
    return (
        <div className='blog-card-skeleton space-y-2'>
            <div className='h-4 rounded-md bg-grey-color-60 animate-pulse w-36'></div>
            <div className='h-[160px] rounded-md bg-grey-color-60 animate-pulse'></div>
            <div className='h-6 rounded-md bg-grey-color-60 animate-pulse w-80'></div>
            <div className='flex items-center gap-3'>
                <div className='description-wrapper space-y-2 w-full'>
                    <p className='h-2 rounded-md bg-grey-color-60 animate-pulse w-3/4'></p>
                    <p className='h-2 rounded-md bg-grey-color-60 animate-pulse w-2/4'></p>
                    <p className='h-2 rounded-md bg-grey-color-60 animate-pulse w-1/4'></p>
                    <p className='h-2 rounded-md bg-grey-color-60 animate-pulse w-1/5'></p>
                </div>
                <div className='h-8 rounded-md bg-grey-color-60 animate-pulse w-36'></div>
            </div>
        </div>
    )
}

export default BlogCardSkeleton;