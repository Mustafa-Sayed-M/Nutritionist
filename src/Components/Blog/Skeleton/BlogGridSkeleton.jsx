import React from 'react';
import BlogCardSkeleton from './BlogCardSkeleton';

function BlogGridSkeleton() {
    return (
        <div className='blog-grid-skeleton grid grid-cols-1 md:grid-cols-2 gap-5'>

            <BlogCardSkeleton />
            <BlogCardSkeleton />

            <BlogCardSkeleton />
            <BlogCardSkeleton />

        </div>
    )
}

export default BlogGridSkeleton;