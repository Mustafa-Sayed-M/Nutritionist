import OurBlogs from "@components/sections/OurBlogs";
import Features from "@components/sections/Features";
import HeroSection from "@components/sections/HeroSection";
import Pricing from "@components/sections/Pricing";
import Testimonials from "@components/sections/Testimonials";

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