import SectionHeader from "@components/Common/SectionHeader";
import blogsData from "@data/ourBlogs.json";
import BlogCard from "./BlogCard";

function OurBlogs() {
    return (
        <section className="our-blogs-section py-10" id="ourBlogs">
            {/* Section Header */}
            <SectionHeader
                title={blogsData.header.title}
                description={blogsData.header.description}
            />
            {/* Section Content */}
            <div className="container grid md:grid-cols-2 gap-10">
                {
                    blogsData.blogs.map((blog, index) => (<BlogCard blog={blog} key={index} />))
                }
            </div>
        </section>
    )
}

export default OurBlogs;