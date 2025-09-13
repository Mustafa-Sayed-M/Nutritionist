import Categories from "@components/Common/Categories";
import CTA from "@components/Common/CTA";
import HeaderInfo from "@components/Common/HeaderInfo";
import TeamMembers from "@components/Sections/TeamMembers";

function TeamPage() {
    return (
        <div className="team-page">
            {/* Header Info */}
            <HeaderInfo
                title="Meet Our Team of Experts"
                description="Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health."
            >
                {/* Categories */}
                <Categories
                    categories={[
                        "Management Team",
                        "Nutritionists and Dietitians",
                        "Customer Support",
                        "Marketing and Communications",
                        "Technology and Development"
                    ]}
                    page="/team"
                />
            </HeaderInfo>
            {/* Team Members */}
            <TeamMembers />
            {/* CTA */}
            <CTA />
        </div>
    )
}

export default TeamPage;