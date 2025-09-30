import Button from "@components/ui/Button";
import blogs from "@data/blogs.json";

function BlogsGrid() {
    return (
        <section className="blogs-grid-section py-10">
            <div className="container">
                <div className="blogs-cards-wrapper border border-green-85 grid lg:grid-cols-2 overflow-hidden rounded-2xl">
                    {
                        blogs.map((blog, index) => (<div className="blog-card bg-green-95 p-5 md:p-10" key={index}>
                            {/* Category */}
                            <h2 className="pb-2 border-b-2 border-b-green-70 font-semibold text-xl mb-5 w-fit">{blog.category}</h2>
                            {/* Banner */}
                            <div className="blog-card-banner mb-5">
                                <img
                                    src={blog.banner}
                                    alt="Blog Banner"
                                    className="rounded-t-xl w-3/4 ms-auto"
                                />
                            </div>
                            {/* Info */}
                            <div className="blog-card-info flex lg:items-center gap-3 max-sm:flex-col">
                                {/* Info Text */}
                                <div className="blog-card-info-text flex-1">
                                    {/* Title */}
                                    <h3 className="font-semibold text-2xl mb-2">{blog.title}</h3>
                                    {/* Description */}
                                    <p>{blog.description}</p>
                                </div>
                                {/* Read More */}
                                <Button
                                    variant="primary"
                                    title="Read More About This Blog"
                                >Read More</Button>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogsGrid;