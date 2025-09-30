import SectionHeader from "@components/common/SectionHeader";

function Faqs() {
    return (
        <section className="faqs-section py-10" id="faqs">
            {/* Section Header */}
            <SectionHeader
                title="FAQ"
                description="We address commonly asked questions and provide comprehensive answers to help you navigate your way through your nutrition and wellness journey."
            />
            {/* Section Content */}
            <div className="container">
                Faqs
            </div>
        </section>
    )
}

export default Faqs;