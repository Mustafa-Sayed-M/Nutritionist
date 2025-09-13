import SectionHeader from "@components/Common/SectionHeader";
import Card from "@components/UI/Card";
import workStepsData from "@data/workSteps.json";

function WorkSteps() {
    return (
        <section className="work-steps-section py-10" id="workSteps">
            {/* Section Header */}
            <SectionHeader
                title={workStepsData.header.title}
                description={workStepsData.header.description}
                className="mb-20"
            />
            {/* Section Content */}
            <div className="container grid lg:grid-cols-2 gap-x-5 gap-y-20">
                {
                    workStepsData.steps.map((step, index) => (
                        <div key={index} className="relative">
                            <span className="absolute -top-12 left-0 text-7xl font-bold text-dark-green-40">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <Card
                                data={step}
                                className="relative"
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default WorkSteps;