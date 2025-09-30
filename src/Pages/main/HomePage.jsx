import OurBlogs from "@components/sections_temp/OurBlogs";
import Features from "@components/sections_temp/Features";
import HeroSection from "@components/sections_temp/HeroSection";
import Pricing from "@components/sections_temp/Pricing";
import Testimonials from "@components/sections_temp/Testimonials";

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