function BlogCard({ blog = {} }) {

    const {
        banner = "",
        category = "",
        title = "",
        description = "",
        author = {
            avatar: "",
            name: "",
            publishedDate: ""
        }
    } = blog;

    return (
        <div className="blog-card p-5 rounded-xl bg-green-95 border border-green-90">
            {/* Banner */}
            <img
                src={banner}
                alt="Blog Banner"
                className="aspect-video w-full rounded-lg"
            />
            {/* Text Info */}
            <div className="blog-text-info">
                {/* Category */}
                <span className="text-grey-20">{category}</span>
                {/* Title */}
                <h3 className="mt-2 font-semibold mb-3 text-xl">{title}</h3>
                {/* Description */}
                <p className="mb-7 !text-grey-30">{description}</p>
            </div>
            {/* Author */}
            <div className="blog-author flex items-center justify-between gap-5">
                {/* Author Info */}
                <div className="author-info flex-1 flex items-center gap-3">
                    {/* Avatar */}
                    <img
                        src={author.avatar}
                        alt="Author Avatar"
                        width={60}
                        className="rounded-md object-cover aspect-square"
                    />
                    {/* Text Info */}
                    <div className="author-text-info">
                        {/* Name */}
                        <h4 className="text-xl mb-0.5 font-semibold">{author.name}</h4>
                        {/* Published Date */}
                        <p>{author.publishedDate}</p>
                    </div>
                </div>
                {/* Actions */}
                <div className="blog-actions flex items-center gap-3 text-2xl">
                    <i className="fa-regular fa-heart fa-fw cursor-pointer"></i>
                    <i className="fa-regular fa-bookmark fa-fw cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;