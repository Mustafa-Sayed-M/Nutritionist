import React from 'react';
import BlogCard from './Components/BlogCard';

function BlogGrid({ blogList }) {
    return (
        <div className='blog-grid grid grid-cols-1 md:grid-cols-2 gap-5'>
            {blogList.map((blog, index) => <BlogCard
                key={index}
                blogData={blog}
            />)}
        </div>
    )
}

export default BlogGrid;