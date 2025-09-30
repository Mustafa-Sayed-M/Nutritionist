import CTA from "@components/common/CTA";
import HeaderInfo from "@components/common/HeaderInfo";
import WorkSteps from "@components/sections/WorkSteps";

function ProcessPage() {
    return (
        <div className="process-page">
            {/* Header Info */}
            <HeaderInfo
                title="Your Journey to Health and Wellness"
                description="At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our 'How it Works' process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here's a detailed breakdown of our process:"
            />
            {/* Work Steps */}
            <WorkSteps />
            {/* CTA */}
            <CTA />
        </div>
    )
}

export default ProcessPage;