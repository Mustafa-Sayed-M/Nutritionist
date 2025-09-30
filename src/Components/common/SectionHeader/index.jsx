function SectionHeader({ title = "", description = "", className = "" }) {
    return (
        <div className={`section-header mb-10 ${className}`}>
            <div className="container text-center">
                <h2 className="font-bold mb-2 text-[24px] md:text-[34px] lg:text-[40px]">{title}</h2>
                <p className="md:max-w-[800px] md:mx-auto">{description}</p>
            </div>
        </div>
    )
}

export default SectionHeader;