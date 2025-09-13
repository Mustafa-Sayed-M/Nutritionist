function Card({ data = {}, className = "" }) {

    const {
        icon = "",
        title = "",
        description = ""
    } = data;

    return (
        <div className={`card p-5 bg-green-95 rounded-md border border-green-85 ${className}`}>
            {/* Header */}
            <div className="feature-card-header mb-3 flex items-center gap-3">
                {/* Icon */}
                <div className="icon-container w-14 h-14 flex items-center justify-center bg-green-70 rounded-md">
                    <img
                        src={icon}
                        alt="Feature Icon"
                        width={30}
                    />
                </div>
                {/* Title */}
                <h3 className="font-semibold text-xl">{title}</h3>
            </div>
            {/* Description */}
            <p>{description}</p>
        </div>
    )
}

export default Card;