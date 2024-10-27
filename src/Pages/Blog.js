import React from 'react';
import { useLocation } from 'react-router-dom';
import { BLOGS_CATEGORIES } from '../Data/constantData';
import Header from '../Components/Shared/Header';
import BlogGrid from '../Components/Blog/BlogGrid';
import blogData from '../Data/blogsData.json';
import BlogGridSkeleton from '../Components/Blog/Skeleton/BlogGridSkeleton';
import NavFilter from '../Components/Shared/NavFilter';

function Blog() {

    const { pathname } = useLocation();

    const [blogsFiltered, setBlogsFiltered] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            if (pathname === '/blog') {
                setBlogsFiltered(blogData);
            } else {
                setBlogsFiltered(blogData.filter(blog => blog.category === pathname.split('/blog/')[1].replaceAll('+', ' ')));
            }
            setLoading(false);
        }, 700);
    }, [pathname]);

    return (
        <div className='blog-page py-7'>
            <div className='container space-y-7'>
                {/* Header */}
                <div className='header'>
                    {/* Header */}
                    <Header
                        title={'Our Blogs'}
                        description={`Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being.`}
                    />
                    {/* NavFilter */}
                    <NavFilter
                        page={'/blog'}
                        filterList={BLOGS_CATEGORIES}
                    />
                </div>
                {/* Blogs Grid */}
                {
                    loading ? (
                        <BlogGridSkeleton />
                    ) : (
                        <BlogGrid
                            blogList={blogsFiltered}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Blog;