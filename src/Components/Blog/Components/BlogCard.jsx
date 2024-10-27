import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blogData }) {

    const {
        id,
        imageName,
        category,
        title,
        description
    } = blogData;

    return (
        <div className='blog-card space-y-3'>
            {/* Category */}
            <h1 className='text-lg font-semibold pb-2 border-b-2 border-b-green-color-70 w-fit'>{category}</h1>
            {/* Cover */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/blog/${imageName}.png`}
                alt={title}
            />
            {/* Info */}
            <div className='info flex items-center gap-4'>
                {/* Part Text */}
                <div className='part-text space-y-2'>
                    <h2 className='text-2xl font-semibold'>{title}</h2>
                    <p>{description}</p>
                </div>
                {/* read More */}
                <Link
                    to={`/blog/detail/${id}`}
                    className='block bg-green-color-70 py-2 px-4 rounded-md text-nowrap font-medium'
                >
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BlogCard;