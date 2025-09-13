import HeaderInfo from "@components/Common/HeaderInfo";
import ComparisonTable from "@components/Sections/ComparisonTable";
import Faqs from "@components/Sections/Faqs";
import Pricing from "@components/Sections/Pricing";

function PricingPage() {
    return (
        <div className="pricing-page">
            {/* Header Info */}
            <HeaderInfo
                title="Our Pricing"
                description="At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle"
            />
            {/* Pricing Plans */}
            <Pricing
                showDescription={false}
                showFeatures
            />
            {/* Comparison Table */}
            <ComparisonTable />
            {/* Faqs */}
            <Faqs />
        </div>
    )
}

export default PricingPage;