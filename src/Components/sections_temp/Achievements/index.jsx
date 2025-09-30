import SectionHeader from "@components/common_temp/SectionHeader";
import Card from "@components/ui_temp/Card";
import achievementsData from "@data/achievements.json";

function Achievements() {
    return (
        <section className="achievements-section py-10" id="achievements">
            {/* Section Header */}
            <SectionHeader
                title={achievementsData.header.title}
                description={achievementsData.header.description}
            />
            {/* Section Content */}
            <div className="container grid md:grid-cols-2 gap-5">
                {
                    achievementsData.achievements.map((achievement, index) => (<Card key={index} data={achievement} />))
                }
            </div>
        </section>
    )
}

export default Achievements;