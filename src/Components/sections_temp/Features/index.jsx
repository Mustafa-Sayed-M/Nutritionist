import SectionHeader from "@components/common_temp/SectionHeader";
import Card from "@components/ui_temp/Card";
import featuresData from "@data/features.json";

function Features() {
    return (
        <section className="features-section py-10" id="features">
            {/* Section Header */}
            <SectionHeader
                title={featuresData.header.title}
                description={featuresData.header.description}
            />
            {/* Section Content */}
            <div className="container grid md:grid-cols-2 gap-5">
                {
                    featuresData.features.map((feature, index) => (<Card
                        data={feature}
                        key={index}
                    />))
                }
            </div>
        </section>
    )
}

export default Features;