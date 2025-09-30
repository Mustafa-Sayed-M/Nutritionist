import { Link, useSearchParams } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Categories({ categories = [], page = "" }) {

    const [searchParams] = useSearchParams();

    const categoryParam = searchParams.get("category");

    return (
        <section className="categories-section" id="categories">
            <div className="categories-wrapper p-5 md:p-10 bg-dark-green-20 rounded-b-2xl flex items-center justify-between flex-wrap gap-4">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        420: { slidesPerView: 1.5 },
                        575: { slidesPerView: 2 },
                        768: { slidesPerView: 2.3 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4.5 },
                    }}
                >
                    {
                        categories.map((category, index) => {
                            // Determine if this category is selected
                            const isSelected = categoryParam
                                ? categoryParam.replaceAll("-", " ") === category
                                : index === 0;

                            // Base classes
                            let className = "category-item block py-2 px-4 rounded-md font-semibold border text-white ";

                            // Selected style
                            if (isSelected) {
                                className += "bg-dark-green-25 border-dark-green-30";
                            } else {
                                className += "border-transparent";
                                if (categoryParam) {
                                    className += " sm:hover:bg-dark-green-25";
                                }
                            }

                            return (
                                <SwiperSlide key={index}>
                                    <Link
                                        className={className}
                                        to={category === "All" ? `${page}` : `${page}?category=${category.replaceAll(" ", "-")}`}
                                    >
                                        {category}
                                    </Link>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Categories;