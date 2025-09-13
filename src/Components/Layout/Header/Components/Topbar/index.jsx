import { Link } from "react-router-dom";

const FloatingPattern = () => {
    return (
        <img
            src="/assets/images/topbar-pattern-left.png"
            alt="Pattern Left"
            width={250}
            className="absolute z-10 left-0 top-1/2 -translate-y-1/2 object-cover max-sm:hidden"
        />
    )
}

function Topbar() {
    return (
        <div className="topbar py-4 border-b border-b-dark-green-20">
            <div className="container">
                <Link
                    to={'/'}
                    style={{}}
                    className="flex items-center justify-center gap-3 bg-dark-green-20 p-3 rounded-md border border-dark-green-25 overflow-hidden relative"
                >
                    {/* Pattern Left */}
                    <img
                        src="/assets/images/topbar-pattern-left.png"
                        alt="Pattern Left"
                        width={250}
                        className="absolute z-10 left-0 top-1/2 -translate-y-1/2 object-cover max-sm:hidden"
                    />
                    {/* Content */}
                    <img
                        src="/assets/images/topbar-icon.png"
                        alt="Icon"
                    />
                    <p className="!text-white">Join Our Personalized Nutrition Demo For Free</p>
                    <i className="fa-solid fa-arrow-right fa-fw"></i>
                    {/* Pattern Right */}
                    <img
                        src="/assets/images/topbar-pattern-right.png"
                        alt="Pattern Right"
                        width={250}
                        className="absolute z-10 right-0 top-1/2 -translate-y-1/2 object-cover max-sm:hidden"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Topbar;