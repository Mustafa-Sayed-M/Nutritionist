function TestimonialCard({ testimonial = {} }) {

    const { testimonial: testimonialContent = "", author: { avatar = "", name = "" } } = testimonial;

    return (
        <div className="testimonial-card rounded-md bg-green-97 border border-green-90 flex flex-col">
            <div className="testimonial-content p-5">
                {/* Quote Icon */}
                <div className="quote-icon mb-7 text-dark-green-30 text-4xl">
                    <i className="fa-solid fa-quote-left fa-fw"></i>
                </div>
                {/* Testimonial */}
                <p className="mb-5 line-clamp-3">{testimonialContent}</p>
            </div>
            {/* Author */}
            <div className="testimonial-author p-5 flex items-center gap-3 bg-green-95 border-t border-t-green-90 rounded-b-md">
                {/* Avatar */}
                <img
                    src={avatar}
                    alt="Author Avatar"
                    width={50}
                    height={50}
                    className="rounded-md aspect-square object-cover"
                />
                {/* Name */}
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default TestimonialCard;