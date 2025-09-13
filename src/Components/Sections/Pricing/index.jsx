import SectionHeader from "@components/Common/SectionHeader";
import plansData from "@data/plans.json";
import PlanCard from "./PlanCard";

function Pricing({ showDescription = true, showFeatures = false }) {
    return (
        <section className="pricing-section py-10" id="pricing">
            {/* Section Header */}
            <SectionHeader
                title={plansData.header.title}
                description={plansData.header.description}
            />
            {/* Section Content */}
            <div className="container grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-5 items-start">
                {
                    plansData.plans.map((plan, index) => <PlanCard
                        key={index}
                        plan={plan}
                        showDescription={showDescription}
                        showFeatures={showFeatures}
                    />)
                }
            </div>
        </section>
    )
}

export default Pricing;