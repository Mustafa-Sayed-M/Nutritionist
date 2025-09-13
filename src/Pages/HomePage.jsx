import OurBlogs from "@components/Sections/OurBlogs";
import Features from "@components/Sections/Features";
import HeroSection from "@components/Sections/HeroSection";
import Pricing from "@components/Sections/Pricing";
import Testimonials from "@components/Sections/Testimonials";

function HomePage() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <HeroSection />
            {/* Features */}
            <Features />
            {/* Our Blogs */}
            <OurBlogs />
            {/* Testimonials */}
            <Testimonials />
            {/* Pricing */}
            <Pricing
                showDescription
                showFeatures={false}
            />
        </div>
    )
}

export default HomePage;