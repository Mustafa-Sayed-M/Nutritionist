function StoryItem({ storyData = {} }) {

    const {
        image = "",
        title = "",
        description = "",
        date = ""
    } = storyData;

    return (
        <div className="story-item flex items-center max-lg:flex-col group lg:even:flex-row-reverse" >
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="lg:group-odd:border-e-8 lg:group-odd:border-e-green-70 lg:group-even:border-s-8 lg:group-even:border-s-green-70 w-full lg:w-1/2 max-lg:border-b-8 border-b-green-70"
            />
            {/* Content */}
            <div className="story-content p-5 lg:p-10 w-full lg:w-1/2">
                <h3 className="w-fit pb-2 border-b-2 border-b-green-70 mb-4 font-semibold text-2xl">{title}</h3>
                <p className="mb-4">{description}</p>
                <span className="text-grey-20 font-semibold">{date}</span>
            </div>
        </div>
    )
}

export default StoryItem;