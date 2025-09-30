import Categories from "@components/common/Categories";
import HeaderInfo from "@components/common/HeaderInfo";
import BlogsGrid from "@components/sections/BlogsGrid";

function BlogsPage() {
    return (
        <div className="blogs-page">
            {/* Header Info */}
            <HeaderInfo
                title="Our Blogs"
                description="Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being."
            >
                {/* Categories */}
                <Categories
                    categories={[
                        "All",
                        "Weight Loss Tips",
                        "Healthy Eating",
                        "Fitness and Exercise",
                        "Mindset and Motivation",
                        "Recipes and Meal Planning"
                    ]}
                    page="/blogs"
                />
            </HeaderInfo>
            {/* Blogs Grid */}
            <BlogsGrid />
        </div>
    )
}

export default BlogsPage;