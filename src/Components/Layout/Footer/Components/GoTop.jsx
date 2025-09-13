function GoTop() {
    return (
        <div className="go-top flex items-center gap-3">
            <span>Go To Top</span>
            <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-10 h-10 leading-10 text-center rounded-full bg-dark-green-20"
            >
                <i className="fa-solid fa-arrow-up fa-fw"></i>
            </button>
        </div>
    )
}

export default GoTop;