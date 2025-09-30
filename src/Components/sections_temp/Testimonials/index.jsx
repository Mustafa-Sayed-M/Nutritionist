import SectionHeader from "@components/common_temp/SectionHeader";
import testimonialsData from "@data/testimonials.json";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    return (
        <section className="testimonials-section py-10" id="testimonials">
            {/* Section Header */}
            <SectionHeader
                title={testimonialsData.header.title}
                description={testimonialsData.header.description}
            />
            {/* Section Content */}
            <div className="container">
                {/* Testimonials Slider */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    navigation={{
                        prevEl: ".testimonials-prev-btn",
                        nextEl: ".testimonials-next-btn"
                    }}
                    pagination={{
                        el: ".testimonials-slider-pagination",
                        clickable: true,
                        dynamicBullets: true
                    }}
                    breakpoints={{
                        680: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            pagination: {
                                dynamicBullets: false
                            }
                        },
                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            pagination: {
                                dynamicBullets: false
                            }
                        },
                    }}
                >
                    {
                        testimonialsData.testimonials.map((testimonial, index) => (<SwiperSlide key={index}>
                            <TestimonialCard key={index} testimonial={testimonial} />
                        </SwiperSlide>))
                    }
                </Swiper>
                {/* Slider Controllers */}
                <div className="slider-controllers flex items-center justify-center mt-10 gap-5">
                    {/* Previous Btn */}
                    <button
                        type="button"
                        title="Previous Slide"
                        className="testimonials-prev-btn bg-green-95 w-10 h-10 leading-10 text-center rounded-md border border-green-90 text-grey-20"
                    >
                        <i className="fa-solid fa-angle-left fa-fw"></i>
                    </button>
                    {/* Pagination */}
                    <div className="testimonials-slider-pagination flex items-center gap-2 [&>span]:block [&>span]:cursor-pointer [&>span]:w-4 [&>span]:h-4 [&>span]:rounded-full [&>span]:bg-green-85 [&>span]:transition [&>span.swiper-pagination-bullet-active]:bg-dark-green-30"></div>
                    {/* Next Btn */}
                    <button
                        type="button"
                        title="Next Slide"
                        className="testimonials-next-btn bg-green-95 w-10 h-10 leading-10 text-center rounded-md border border-green-90 text-grey-20"
                    >
                        <i className="fa-solid fa-angle-right fa-fw"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;