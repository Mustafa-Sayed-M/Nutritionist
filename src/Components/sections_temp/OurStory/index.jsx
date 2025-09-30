import SectionHeader from "@components/common_temp/SectionHeader";
import storyData from "@data/ourStory.json";
import StoryItem from "./StoryItem";

function OurStory() {
    return (
        <section className="our-story-section py-10" id="ourStory">
            {/* Section Header */}
            <SectionHeader
                title={storyData.header.title}
                description={storyData.header.description}
            />
            {/* Section Content */}
            <div className="container">
                <div className="story-items bg-green-95 rounded-2xl overflow-hidden border border-green-70">
                    {
                        storyData.content.map((item, index) => (<StoryItem key={index} storyData={item} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurStory;