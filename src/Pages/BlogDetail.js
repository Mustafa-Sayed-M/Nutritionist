import React from 'react'
import { useParams } from 'react-router-dom';

function BlogDetail() {

    const { blogId } = useParams();

    return (
        <div className={`blog-detail-page ${blogId}`}>
            <div className='container py-7'>
                Blog Id: {blogId}
                <p className='font-semibold text-center text-xl'>This Page Under Work...</p>
            </div>
        </div>
    )
}

export default BlogDetail;