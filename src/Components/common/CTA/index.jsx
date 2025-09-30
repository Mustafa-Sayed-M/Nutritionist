import Button from "@components/ui/Button";

function CTA() {
    return (
        <section className="cta-section py-10" id="cta">
            <div className="container">
                <div className="cta-content bg-green-95 border border-green-85 rounded-2xl p-5 md:p-10 relative">
                    {/* Left Decorative */}
                    <img
                        src="/assets/images/cta-left-decorative.png"
                        alt="Left Decorative"
                        className="absolute left-0 top-0"
                    />

                    <div className="flex md:items-center justify-between max-md:flex-col gap-x-10 gap-y-5 relative z-20 py-10">
                        <div className="flex-1">
                            <h2 className="font-semibold text-2xl mb-2">Join Our Team</h2>
                            <p>We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals.</p>
                        </div>
                        <Button
                            variant="primary"
                        >
                            Apply Now
                        </Button>
                    </div>

                    {/* Right Decorative */}
                    <img
                        src="/assets/images/cta-right-decorative.png"
                        alt="Right Decorative"
                        className="absolute right-0 bottom-0"
                    />
                </div>
            </div>
        </section>
    )
}

export default CTA;