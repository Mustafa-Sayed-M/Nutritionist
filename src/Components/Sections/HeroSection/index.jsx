function HeroSection() {
    return (
        <section className="hero-section grid grid-cols-1 md:grid-cols-2 items-center" id="hero">
            {/* Left (Image) */}
            <div className="h-full">
                <img
                    src="/assets/images/hero.png"
                    alt="hero"
                    className="w-full h-full object-cover md:rounded-br-4xl max-md:rounded-b-4xl"
                />
            </div>

            {/* Right (Content) */}
            <div className="container mx-auto flex flex-col max-md:-mt-5 max-md:text-center">
                <div className="callout mb-4 max-md:mt-3 font-medium text-2xl pb-2 border-b-2 border-b-green-70 w-fit max-md:mx-auto">Transform Your ❤️ Health with</div>
                <h1 className="font-bold text-4xl mb-3">Personalized Nutrition Coaching</h1>
                <p className="mb-4">Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.</p>
                <div className="actions flex items-center gap-4 font-semibold mb-4">
                    <button type="button" className="py-3 px-5 rounded-md bg-green-70">Get Started Today</button>
                    <button type="button" className="py-3 px-5 rounded-md bg-green-95 border border-green-85">Book a Demo</button>
                </div>
                {/* Happy Customers */}
                <div className="happy-customers max-md:-order-1 max-md:mx-auto relative z-10 flex items-center gap-3 max-md:flex-col">
                    <div className="customers-avatars flex -space-x-3 p-2 rounded-full bg-green-97 border border-green-70">
                        <img
                            src="https://res.cloudinary.com/dd4fx5n88/image/upload/v1757541580/Image_eop7zr.png"
                            alt="customer1"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <img
                            src="https://res.cloudinary.com/dd4fx5n88/image/upload/v1757525327/Image-1_fhwzuq.png"
                            alt="customer2"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <img
                            src="https://res.cloudinary.com/dd4fx5n88/image/upload/v1756413284/profile-2_ljwjoo.png"
                            alt="customer3"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                    </div>
                    <h4 className="font-semibold">
                        <span className="text-dark-green-40">430+</span>
                        {" "}
                        <span className="text-dark-green-20">Happy Customers</span>
                    </h4>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;