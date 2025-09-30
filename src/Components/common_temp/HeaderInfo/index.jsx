function HeaderInfo({ title = "", description = "", children }) {
    return (
        <section className="header-info-section py-10" id="headerInfo">
            <div className="container">
                {/* Content Container */}
                <div className="content-container p-5 md:p-10 rounded-md bg-green-95 border border-green-85 relative overflow-hidden">
                    <img
                        src="/assets/images/header-info-hero.png"
                        alt="Header Information Hero"
                        className="absolute left-1/2 -translate-x-1/2 top-0"
                    />
                    <div className="relative z-10">
                        {/* Icon Container */}
                        <div className="icon-container mx-auto w-16 h-16 rounded-md flex items-center justify-center bg-gradient-to-b from-green-70 to-transparent mb-5">
                            <img
                                src="/assets/images/header-info-icon.png"
                                alt="Header Information Icon"
                                width={30}
                            />
                        </div>
                        {/* Text Container */}
                        <div className="text-container text-center">
                            <h2 className="font-semibold mb-3 text-2xl md:text-4xl">{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                {/* Children */}
                {children}
            </div>
        </section>
    )
}

export default HeaderInfo;